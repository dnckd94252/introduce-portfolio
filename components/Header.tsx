import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";
import HeaderStyle from "../styles/HeaderStyle";

const Header = () => {
    return (
      <header className="position-absolute w-100 d-flex pl-5 pr-5 pt-3 pb-3 justify-content-between align-items-center">
        
        <style jsx>{HeaderStyle}</style>
      </header>
    );
}
export default Header;