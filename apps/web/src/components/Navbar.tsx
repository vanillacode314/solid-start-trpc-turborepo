import { Component } from "solid-js";
import { Button } from "ui";

export const Navbar: Component = () => {
  return (
    <nav
      style={{
        width: "100%",
        "background-color": "#2c4f7c",
        color: "white",
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center",
        padding: "1rem",
      }}
    >
      <span>Solid Start tRPC turborepo</span>
      <Button onClick={() => alert("Hi")}>Say Hi</Button>
    </nav>
  );
};

export default Navbar;
