import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    // Shortcut
    // ul>(li>Link[to=''])*2 & tab*/
    <ul>
      <li>
        <Link to="/admin/posts">Posts</Link>
      </li>
      <li>
        <Link to="/admin/users">Users</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
