import TitleStyle from "../../../styles/work/TitleStyle";
const Title = () => {
    return <div className="col-6 title d-flex align-items-center">
        <div className="col-6"></div>
        <div className="col-6 text">
            <h1>Work.</h1>
            <div className="d-flex content">
                <div className="bar"></div>
                <span>React , Node.js , Next.js , Laravel 등을 이용한 프로젝트입니다.</span>
            </div>
        </div>
        <style jsx>{TitleStyle}</style>
    </div>
}
export default Title;