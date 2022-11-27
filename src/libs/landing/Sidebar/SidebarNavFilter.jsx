import React from "react";

export const SidebarNavFilter = ({ setAlphabetically }) => {
  return (
    <li className="nav-item" style={{ gap: "1rem", alignItems: "center" }}>
      <span>Filter A-Z</span>
      <button onClick={setAlphabetically}>Filter</button>
    </li>
  );
};
