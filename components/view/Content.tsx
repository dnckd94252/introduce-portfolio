import ContentStyle from "../../styles/view/ContentStyle";
import Breif from "./Breif";

const Content = () => {
  return (
    <div className="content d-flex">
      <Breif />
      <style jsx>{ContentStyle}</style>
    </div>
  );
};

export default Content;
