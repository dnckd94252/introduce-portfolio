import Link from "next/link";
import { MdOutlineCircle } from "react-icons/md";
import { BsInstagram, BsGithub } from "react-icons/bs";
import HeaderStyle from "../styles/HeaderStyle";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openAction = () => {
    const val = !open ? true : false;
    setOpen(val);
  };

  return (
    <header className={`position-absolute w-100 pt-3 pb-3 ${!open ? null : 'active'}`}>
      <div className="menu w-100 d-flex  pl-5 pr-5 align-items-center justify-content-between">
        <div className="logo">
          <Link href="/">
            <a>
              <h2>
                WOOCHANG<b>.</b>
              </h2>
            </a>
          </Link>
        </div>
        <div
          className={`hamburger d-flex flex-column justify-content-center position-relative align-items-end ${
            !open ? null : "active"
          }`}
          onClick={openAction}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="wrapper d-flex flex-column">
        <div className="content w-100 align-items-center justify-content-between d-flex ">
          <div className="backMenu  align-items-center d-flex pl-5">
            <h1>
              MENU <br /> <div className="bar"></div>
            </h1>
          </div>
          <div className="d-flex flex-column align-items-end items pb-5 mb-5">
            <Link href="/" className="menuItem">
              <a>
                <div className="d-flex align-items-center item justify-content-between">
                  <div className="decoration d-flex align-items-center">
                    <MdOutlineCircle />
                    <div className="decoBar"></div>
                  </div>
                  <span>HOME</span>
                </div>
              </a>
            </Link>
            <Link href="/" className="menuItem">
              <div className="d-flex align-items-center item justify-content-between">
                <div className="decoration d-flex align-items-center">
                  <MdOutlineCircle />
                  <div className="decoBar"></div>
                </div>
                <span>CONTACT</span>
              </div>
            </Link>
            <Link href="/" className="menuItem">
              <a>
                <div className="d-flex align-items-center item justify-content-between">
                  <div className="decoration d-flex align-items-center">
                    <MdOutlineCircle />
                    <div className="decoBar"></div>
                  </div>
                  <span>ABOUT</span>
                </div>
              </a>
            </Link>
            <Link href="/" className="menuItem">
              <a>
                <div className="d-flex align-items-center item justify-content-between">
                  <div className="decoration d-flex align-items-center">
                    <MdOutlineCircle />
                    <div className="decoBar"></div>
                  </div>
                  <span>WORK</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="menu-footer pl-5 pr-5 d-flex align-items-center justify-content-between ">
          <div className="d-flex comment justify-content-center flex-column">
            <span>Are You</span>
            <span>Need Me</span>
            <span>?</span>
          </div>
          <div className="d-flex align-items-center justify-content-between sns">
            <BsGithub />
            <BsInstagram />
          </div>
        </div>
      </div>
      <style jsx>{HeaderStyle}</style>
    </header>
  );
};
export default Header;
