import React from "react";
import linkedinIcon from "../../assets/linkedinIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
import heartIcon from "../../assets/heartIcon.png";
import githubIcon from "../../assets/githubIcon.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-5 px-10 md:px-16 text-gray-700 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright & Links */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <span>
            © {new Date().getFullYear()} Fadhillah Zainum. All Rights Reserved
          </span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="flex items-center">
            Made with
            <img src={heartIcon} alt="heart" className="w-4 h-4 mx-1" />
            in Indonesia
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a
            href="https://www.linkedin.com/in/fadhillah-zainum-muttaqin"
            className="hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com/fzainum.m?igsh=eDY3a24wZ2thbWtv"
            className="hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/zetwenty"
            className="hover:text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
