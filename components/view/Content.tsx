import ContentStyle from "../../styles/view/ContentStyle";
import Breif from "./Breif";
import Subject from "./Subject";

const Content = (props : any) => {
  const {work} = props;

  return (
    <div className="content d-flex">
      <Breif data={work} />
      <Subject data={work} />
      <style jsx>{ContentStyle}</style>
    </div>
  );
};

export default Content;
