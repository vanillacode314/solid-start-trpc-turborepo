import { Component, JSXElement } from "solid-js";
import Navbar from "~/components/Navbar";

interface Props {
  children: JSXElement;
}

export const BaseLayout: Component<Props> = (props) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>{props.children}</main>
    </>
  );
};

export default BaseLayout;
