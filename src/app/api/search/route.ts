import { findObjectsMatchingAllWords } from "@/lib/findObjectsContainingString";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, content } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }
    if (!content || typeof content !== "object") {
      return NextResponse.json(
        { error: "Content must be an object or array" },
        { status: 400 },
      );
    }

    // Stringify content for sending to OpenAI
    const contentString = JSON.stringify(content);

    // Call OpenAI to filter the content
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are an assistant that filters JSON arrays",
        },
        {
          role: "user",
          content: `You are an assistant that filters JSON arrays.Given the following JSON data: ${contentString}Return all objects that are **contextually similar** to the user description: "${prompt}". Contextually similar means that even if the fields do not exactly match, the object is relevant based on meaning, style, or concept. Consider fields like "title", "artist", and "style". Respond **only with a JSON array** of objects. Do not include explanations, summaries, or extra text.`,
        },
      ],
    });

    const responseText = completion.choices[0]?.message?.content;

    // Safely parse the returned JSON
    let filteredData: unknown[] = [];
    try {
      filteredData = JSON.parse(responseText || "[]");
    } catch {
      filteredData = [];
    }

    // Fallback to JavaScript search if OpenAI returns empty results
    if (filteredData.length === 0) {
        filteredData = findObjectsMatchingAllWords(content, prompt);
    }

    return NextResponse.json(filteredData);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
