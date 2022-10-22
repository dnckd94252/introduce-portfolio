import LoadingStyle from "../styles/LoadingStyle";
import { useState, useEffect } from "react";

const Loading = (props: any) => {
  const { state } = props;
  const [display, setDisplay] = useState<string>("flex");
  const [opacity, setOpacity] = useState(1);
  const [top, setTop] = useState<string | number>(0);

  useEffect(() => {
    if (state === true) {
      setTimeout(() => {
        setOpacity(0);
        setTop("-100%");
      }, 1000);

      setTimeout(() => {
        setDisplay("none");
      }, 1500);
    }
  }, [state]);
  
  return (
    <section
      id="loading"
      className=" align-items-center justify-content-center vh-100 vw-100 position-fixed"
      style={{
        opacity,
        top,
        display,
      }}
    >
      <div className="spinner"></div>
      <style jsx>{LoadingStyle}</style>
    </section>
  );
};

export default Loading;
