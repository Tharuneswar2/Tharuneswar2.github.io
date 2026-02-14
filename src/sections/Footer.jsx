import React from "react";
import { socialImgs } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className={"footer-container"}>
        <div
          className={
            "flex flex-col justify-center items-center md:items-start md:gap-10 gap-5"
          }
        >
          <a
            href={"https://github.com/Tharuneswar2"}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my GitHub Profile
          </a>
        </div>
        <div className={"socials"}>
          {socialImgs.map((img) => (
            <a
              className={"icon"}
              target={img.url.startsWith("http") ? "_blank" : undefined}
              rel={
                img.url.startsWith("http") ? "noopener noreferrer" : undefined
              }
              href={img.url}
              key={img.url}
            >
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>

        <div className={"flex flex-col justify-center"}>
          <p className={"text-center md:text-end"}>
            © {new Date().getFullYear()} Tharuneswar | Doddi. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
