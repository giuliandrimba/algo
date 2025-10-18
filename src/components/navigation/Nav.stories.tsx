import Link from "next/link";
import { Button } from "../button/Button";
import { Nav } from "./Nav";

export default {
  title: "Navigation/Nav",
  component: Nav,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  render: () => (
    <Nav>
      <Button as={Link} href='#'>Nav Link</Button>
      <Button>Nav Button</Button>
    </Nav>
  ),
};