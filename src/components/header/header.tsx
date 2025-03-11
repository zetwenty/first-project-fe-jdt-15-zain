import React, { useState } from "react";
import linkedinIcon from "../../assets/linkedinIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
import githubIcon from "../../assets/githubIcon.png";

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

const socialMedia = [
  {
    href: "https://www.linkedin.com/in/fadhillah-zainum-muttaqin",
    icon: linkedinIcon,
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/fzainum.m?igsh=eDY3a24wZ2thbWtv",
    icon: instagramIcon,
    alt: "Instagram",
  },
  { href: "https://github.com/zetwenty", icon: githubIcon, alt: "GitHub" },
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

      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 transition-transform transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setToggle((prev: boolean) => !prev)}
          className="flex md:hidden"
        >
          {toggle ? "close" : "open"}
        </button>
        {navData.map((item) => (
          <a
            key={item.route}
            className="hover:text-blue-400 hover:underline"
            href={item.route}
          >
            {item.label}
          </a>
        ))}
        <div className="flex gap-6 mt-4">
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.icon} alt={social.alt} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
