import TitleStyle from "../../../styles/work/TitleStyle";
const Title = () => {
  return (
    <div className="col-6 title">
      <div className="contents w-100 d-flex align-items-center ">
        <div className="col-6 circle-controller d-flex align-items-center justify-content-center ">
          <div className="item position-absolute d-flex align-items-center justify-content-center">
            <div className="circle2"></div>
            <div className="circle"></div>
            <div className="circle-wrapper"></div>
          </div>
        </div>
        <div className="col-6 text">
          <h1>Work.</h1>
          <div className="d-flex content mt-5">
            <div className="bar mt-2"></div>
            <span>
              React , Node.js , Next.js , Laravel 등을 이용한 프로젝트입니다.
              주로 서비스 개발과 공공 사이트를 개발하였습니다.
            </span>
          </div>
        </div>
      </div>
      <div className="copyright d-flex w-100 align-items-center justify-content-center">
        <span>Choi Woo Chang. Portfolio.</span>
      </div>
      <style jsx>{TitleStyle}</style>
    </div>
  );
};
export default Title;
