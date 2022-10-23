import ImageContentStyle from "../../styles/view/ImageContentStyle";
import ImageItem from "./ImageItem";
import { useState } from "react";
import { throttle } from "../../fnc/throtle";

const ImageContent = (props: any) => {
  const { work_image, work } = props.data;
  const { mockup } = work[0];
  const [scroll, setScroll] = useState(0);

  const scrollCalc = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScroll(scrollTop);
  };

  window.addEventListener("scroll", throttle(scrollCalc));

  return (
    <div className="imageContent mt-5 pt-5 pb-5 overflow-hidden border-top">
      <div className="title">
        <span>CASE STUDY</span>
        <h2>WORK RESULT</h2>
        <ImageItem src={mockup} scroll={scroll} />
        {work_image.map((item: any, idx: number) => (
          <ImageItem src={item.name} key={idx} scroll={scroll} />
        ))}
      </div>
      <style jsx>{ImageContentStyle}</style>
    </div>
  );
};
export default ImageContent;
