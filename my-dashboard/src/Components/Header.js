import React from "react";

const Header = () => {
  return (
    <div>
      <h1>Org Level View</h1>
      <select>
        <option value="All Plant">All Plant</option>
        <option value="Plant1">Plant1</option>
        <option value="Plant2">Plant2</option>
        <option value="Plant3">Plant3</option>
      </select>
      <img src={require(`../images/dropIcon.png`)} />
    </div>
  );
};

export default Header;
