import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactChild }) {
  return (
    <div className="Layout">
      <NavBar />
      <div>{children}</div>
      <style jsx>
        {`
          .Layout {
            background-color: #212121;
          }
        `}
      </style>
    </div>
  );
}
