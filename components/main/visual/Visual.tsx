import ThreeJS from "./ThreeJS";
import VisualStyle from "../../../styles/VisualStyle";
import { BsArrowUpRight } from "react-icons/bs";

const Visual = () => {
  return (
    <section id="visual" className="vh-100 vw-100 d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between contents">
        <div className="text col-6">
          <div className="d-flex align-items-center">
            <h1>Hi! I Am</h1>
            <div className="duty ml-4 d-flex align-items-center">
              <span>Front end Dev</span>
            </div>
          </div>
          <h1>Woo Chang</h1>
          <div className="content mt-5 d-flex flex-column">
            <span>개발하는 것에 매력을 느껴 즐기며 하는 고등학생입니다.</span>
            <span>
              백엔드와 프론트엔드를 구분하지 않고 배우고 있지만 최적의 사용자
              경험을 위해 고민하는 프론트엔드 개발자에 전반적으로 관심이 많은
              학생입니다.
            </span>
          </div>
          <button className="projectBtn mt-5">
            Go Project
            <BsArrowUpRight className="ml-3" />
          </button>
        </div>
        <div className="three d-flex align-items-center justify-content-center">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <ThreeJS />
        </div>
      </div>
      <style jsx>{VisualStyle}</style>
    </section>
  );
};

export default Visual;
