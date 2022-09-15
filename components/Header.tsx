import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";
import HeaderStyle from "../styles/HeaderStyle";

const Header = () => {
    return (
      <header className=" position-absolute w-100 d-flex pl-5 pr-5 pt-3 pb-3 justify-content-between align-items-center">
        <div className="menu d-flex align-items-center col-4">
          <Link href="/work">
            <a className="ml-4 mr-4" data-hover="Work">
              WORK
            </a>
          </Link>
          <Link href="/about">
            <a className="ml-4 mr-4" data-hover="About Me">
              ABOUT ME
            </a>
          </Link>
          <Link href="/contact">
            <a className="ml-4 mr-4" data-hover="Contact">
              CONTACT
            </a>
          </Link>
        </div>
        <div className="logo col-4 d-flex align-items-center justify-content-center">
          <Link href="/">
            <a>
              WooChang<b>.</b>
            </a>
          </Link>
        </div>
        <div className="col-4 d-flex util justify-content-end">
          <FaInstagram className="m-3" />
          <FaGithub className="m-3" />
          <button className="chatBtn btn btn-dark pl-5 pr-5">Chat</button>
        </div>
        <style jsx>{HeaderStyle}</style>
      </header>
    );
}
export default Header;