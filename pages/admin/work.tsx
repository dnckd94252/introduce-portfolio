import WorkStyle from "../../styles/admin/WorkStyle";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Work = () => {
  const [roleNum, setRoleNum] = useState(1);
    
  const rolePlus = () => {
    
  };

  return (
    <section
      id="work"
      className="pt-5 pb-5 d-flex align-items-center justify-content-center"
    >
      <div className="container contents">
        <div className="title mb-5 border-bottom">
          <span>작업물 업로드</span>
          <h2>WORK LIST UPLOAD</h2>
        </div>
        <form action="" className="work-plus">
          <div className="item d-flex flex-column mt-3">
            <span>NAME</span>
            <input
              type="text"
              className="pt-2 pb-2 pl-3 pr-3 mt-3"
              placeholder="작업물 이름"
              name="name"
            />
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>YEAR / MONTH</span>
            <div className="d-flex align-items-center date">
              <input
                type="month"
                className="pt-2 pb-2 pl-3 pr-3 mt-3"
                placeholder="작업물 이름"
                name="name"
              />
              <span className="ml-4 mr-4 mt-3">~</span>
              <input
                type="month"
                className="pt-2 pb-2 pl-3 pr-3 mt-3"
                placeholder="작업물 이름"
                name="name"
              />
            </div>
          </div>
          <div className="item d-flex flex-column mt-3">
            <div className="d-flex align-items-center">
              <span>ROLE</span>
              <button className="d-flex align-items-center justify-content-center plusBtn ml-3">
                <AiOutlinePlus />
              </button>
            </div>
            <input
              type="text"
              className="pt-2 pb-2 pl-3 pr-3 mt-3"
              placeholder="역할"
              name="name"
            />
          </div>
        </form>
      </div>
      <style jsx>{WorkStyle}</style>
    </section>
  );
};
export default Work;
