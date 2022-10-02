import WorkStyle from "../../styles/admin/WorkStyle";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";

const Work = () => {
  const [role, setRole] = useState([0]);
  const [stack, setStack] = useState([0]);

  const rolePlus = () => setRole([...role, role.length]);
  const stackPlus = () => setStack([...stack, stack.length]);

  

  return (
    <section id="work" className="pb-5 d-flex  justify-content-center">
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
              className="pt-4 pb-4 pl-3 pr-3 mt-4"
              placeholder="작업물 이름"
              name="name"
            />
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>YEAR / MONTH</span>
            <div className="d-flex align-items-center date">
              <input
                type="month"
                className="pt-4 pb-4 pl-3 pr-3 mt-4"
                name="month-before"
              />
              <span className="ml-4 mr-4 mt-3">~</span>
              <input
                type="month"
                className="pt-4 pb-4 pl-3 pr-3 mt-4"
                name="month-after"
              />
            </div>
          </div>
          <div className="item d-flex flex-column mt-3">
            <div className="d-flex align-items-center">
              <span>ROLE</span>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center plusBtn ml-3"
                onClick={rolePlus}
              >
                <AiOutlinePlus />
              </button>
            </div>
            {role.map((ele, idx) => (
              <input
                key={idx}
                type="text"
                className="pt-4 pb-4 pl-3 pr-3 mt-4"
                placeholder="역할"
                name="name"
              />
            ))}
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>TYPE</span>
            <select name="type" className="pt-4 pb-4 pl-3 pr-3 mt-4">
              <option value="solo">SOLO</option>
              <option value="team">TEAM</option>
            </select>
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>MOCK-UP</span>
            <button
              type="button"
              className="mockup-btn pt-4 pb-4 pl-3 pr-3 mt-4"
            >
              MOCKUP FILE UPLOAD
            </button>
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>CONTENT</span>
            <textarea
              name="content"
              className="pt-4 pb-4 pl-3 pr-3 mt-4"
              placeholder="작업물에 관한 내용"
              rows={10}
            ></textarea>
          </div>
          <div className="item d-flex flex-column mt-3">
            <div className="d-flex align-items-center">
              <span>STACK</span>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center plusBtn ml-3"
                onClick={stackPlus}
              >
                <AiOutlinePlus />
              </button>
            </div>
            {stack.map((ele, idx) => (
              <input
                key={idx}
                type="text"
                className="pt-4 pb-4 pl-3 pr-3 mt-4"
                placeholder="사용스택"
                name="stack"
              />
            ))}
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>IMAGES</span>
            <button
              type="button"
              className="mockup-btn pt-4 pb-4 pl-3 pr-3 mt-4"
            >
              IMAGE FILE UPLOAD
            </button>
          </div>
          <button type="submit" className="mt-5 successBtn pt-4 pb-4 pl-3 pr-3">
            SUBMIT
          </button>
        </form>
      </div>
      <style jsx>{WorkStyle}</style>
    </section>
  );
};
export default Work;
