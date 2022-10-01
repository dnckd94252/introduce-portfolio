import WorkStyle from "../../../styles/work/WorkStyle";
import Image from "next/image";
import { BsArrowRightSquare } from "react-icons/bs";

const Item = () => {
  return (
    <div className="item position-relative d-flex justify-content-between mt-5 mb-5">
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
          GOTDOC Web App Service for Communication of Physicians, Users, and
          Managers
        </h2>
        <span className="d-flex align-items-center justify-content-end mt-5 viewMore">
          View More About <BsArrowRightSquare />{" "}
        </span>
      </div>
      <style jsx>{WorkStyle}</style>
    </div>
  );
};

export default Item;
