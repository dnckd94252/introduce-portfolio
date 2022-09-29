import WorkStyle from "../../../styles/work/WorkStyle";
import Image from "next/image";
import BsArrowRightSquare from "react-icons/bs";

const Work = () => {
  return (
    <section id="work" className="pt-5 pb-5">
      <div className="container">
        <div className="title pt-5 pb-5">
          <span>SELECTED PROJECTS</span>
          <h1>Case studies</h1>
        </div>
        <div className="contents d-flex align-items-center justify-content-between flex-column">
          <div className="item position-relative d-flex justify-content-between">
            <Image
              src={require("../../../public/contents/4926289.jpg")}
              className="baseImage position-absolute"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
            />
            <div className="bg-navy position-absolute w-100 h-100"></div>
            <div className="circle-wrapper m-5 d-flex align-items-center position-relative justify-content-center">
              <div className="circle-border position-absolute w-100 h-100"></div>
              <div className="circle-inner d-flex align-items-center justify-content-center">
                SOLO
              </div>
            </div>
            <div className="text d-flex flex-column p-5">
              <span className="year">2022.07 ~ 2022.08</span>
              <h2>
                GOTDOC Web App Service for Communication of Physicians, Users,
                and Managers
              </h2>
              <p>View More About </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{WorkStyle}</style>
    </section>
  );
};
export default Work;
