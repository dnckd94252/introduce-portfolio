import WorkStyle from "../../../styles/WorkStyle";
import Title from "./Title";
import Content from "./Content";

const Work = () => {
  return (
    <section
      id="work"
      className="d-flex align-items-center justify-content-between"
    >
      <Title />
      <Content />
      <style jsx>{WorkStyle}</style>
    </section>
  );
};

export default Work;
