import ThreeJS from "./ThreeJS";
import VisualStyle from "../../../styles/VisualStyle";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

const Visual = () => {
  return (
    <section id="visual" className="vh-100 vw-100">
      <div className="container d-flex align-items-center pt-5 justify-content-between contents">
        <div className="text col-6 pt-5">
          <div className="title">
            <h1>WEB</h1>
            <h1>FRONTEND</h1>
            <div className="d-flex align-items-center">
              <h1>DE</h1>
              <div className="d-flex align-items-center  justify-content-center">
                <h1>V</h1>
                <div className="whiteBar position-absolute"></div>
              </div>
              <div className="pointText justify-content-end flex-column d-flex align-items-end ml-5">
                <div className="pointBar"></div>
                <span className="mt-3">Hi I Am Woo Chang Choi.</span>
                <span> Always Contact Ready.  </span>
              </div>
            </div>
          </div>
        </div>
        <div className="three d-flex pt-5 align-items-center justify-content-center">
          <ThreeJS />
        </div>
      </div>
      <div className="d-flex align-items-center w-100 pl-5 pr-5 justify-content-between under position-absolute">
        <div className="d-flex flex-column ml-4 mr-4">
          <span>MY</span>
          <span>FRONTEND</span>
          <span>PORTFOLIO.</span>
        </div>
        <div className="ml-4 mr-4">
          <div className="whiteBar"></div>
        </div>
        <div className="ml-4 mr-4 d-flex align-items-center flex-column">
          <span>CONTACT</span>
          <span>WEB</span>
        </div>
      </div>
      <style jsx>{VisualStyle}</style>
    </section>
  );
};

export default Visual;
