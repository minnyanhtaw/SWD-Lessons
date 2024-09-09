import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link to={url}>
      <div className=" flex flex-col gap-4 items-center bg-blue-600 p-6 text-white rounded-lg">
        {icon} {name}
      </div>
    </Link>
  );
};

export default ModuleBtn;
