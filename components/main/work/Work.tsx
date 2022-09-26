import WorkStyle from "../../../styles/WorkStyle";
import Title from "./Title";

const Work = () => {
  return (
    <section
      id="work"
      className="d-flex align-items-center justify-content-between"
    >
      <Title />
      <div className="col-6 contents"></div>
      <style jsx>{WorkStyle}</style>
    </section>
  );
};

export default Work;
