import React, { useState } from "react";

const navData = [
  {
    route: "/home",
    label: "Home",
  },
  {
    route: "/project",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex flex-row justify-between py-5 px-10 shadow">
      <h2 className="text-blue-800">Fadhillah Zainum</h2>
      <nav className="hidden md:flex gap-10">
        {navData.map((item) => (
          <a
            key={item.route}
            className="hover:text-blue-400 hover:underline"
            href={item.route}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setToggle((prev: boolean) => !prev)}
        className="flex md:hidden"
      >
        {toggle ? "close" : "open"}
      </button>
    </div>
  );
};

export default Header;
