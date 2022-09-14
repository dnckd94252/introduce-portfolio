import ThreeJS from "./ThreeJS";
import VisualStyle from "../../../styles/VisualStyle";

const Visual = () => {
  return (
    <section id="visual" className="vh-100 d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between contents">
        <ThreeJS />
      </div>
      <style jsx>{VisualStyle}</style>
    </section>
  );
};

export default Visual;
