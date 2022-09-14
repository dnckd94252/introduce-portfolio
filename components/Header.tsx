import HeaderStyle from "../styles/HeaderStyle";
import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Header = () => {
    return (
      <header className="d-flex pl-5 pr-5 pt-3 pb-3 justify-content-between align-items-center">
        <div className="menu d-flex align-items-center col-4">
          <Link href="/work">
            <a className="ml-4 mr-4">Work</a>
          </Link>
          <Link href="/about">
            <a className="ml-4 mr-4">About</a>
          </Link>
          <Link href="/wip">
            <a className="ml-4 mr-4">Wip</a>
          </Link>
          <Link href="/contact">
            <a className="ml-4 mr-4">Contact</a>
          </Link>
        </div>
        <div className="logo col-4 d-flex align-items-center justify-content-center">
          <Link href="/">
            <a>WooChang._</a>
          </Link>
        </div>
        <div className="col-4 d-flex util justify-content-end">
            <FaInstagram className="m-3" />
            <FaGithub className="m-3" />
        </div>        
        <style jsx>{HeaderStyle}</style>
      </header>
    );
}
export default Header;