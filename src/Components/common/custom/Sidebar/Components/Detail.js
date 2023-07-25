import React from "react";
import { SIDEBAR_TABS } from "./SidebarTabs";
import { Link, useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    const sidebarRoute = "/sidebar"; // Update this with your sidebar route
    const newRoute = `${sidebarRoute}/${path}`;
    navigate(newRoute);
  };

  return (
    <div>
      {SIDEBAR_TABS.map((item, i) => {
        return (
          <div
            key={i}
            className="border-bottom border-1 py-2 border-end border-1"
          >
            <Link
              to={`${item.title}`}
              onClick={() => handleClick(item.title)}
            >
              <span>{item.icons}</span>
              <p>{item.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
