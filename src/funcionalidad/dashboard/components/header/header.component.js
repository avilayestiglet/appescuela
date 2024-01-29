import React from "react";

const HeaderComponentRoute = ({ item }) => {
  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-5 px-5">
        <h2 className="text-xl font-bold text-black-500">{item.name}</h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <a className="font-medium" href="/">
                {item.parent} /
              </a>
            </li>
            <li className="font-medium text-warning">{item.name}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponentRoute;
