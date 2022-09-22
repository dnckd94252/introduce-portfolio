import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";
import HeaderStyle from "../styles/HeaderStyle";
import { useState } from "react";

const Header = () => {
  return (
    <header className="position-absolute w-100 d-flex pl-5 pr-5 pt-3 pb-3 justify-content-between align-items-center">
      <div className="logo">
        <Link href="/">
          <a>
            <h2>
              WOOCHANG<b>.</b>
            </h2>
          </a>
        </Link>
      </div>
      <div className="hamburger d-flex  flex-column justify-content-center position-relative align-items-end">
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <style jsx>{HeaderStyle}</style>
    </header>
  );
};
export default Header;
