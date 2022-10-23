import Image from "next/image";
import ImageItemStyle from "../../styles/view/ImageItemStyle";
import { useRef, useState, useEffect } from "react";

const ImageItem = (props: any) => {
  const { src, scroll } = props;
  const [scrollBoolean, setScrollBoolean] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const { current } = imageRef;
    if (!current) return;
    const { offsetTop } = current;
    if (offsetTop <= scroll + 900) setScrollBoolean(true);
  }, [scroll]);

  return (
    <div className="item" data-boolean={scrollBoolean} ref={imageRef}>
      <Image src={require(`../../server/public/image/${src}`)} />
      <style jsx>{ImageItemStyle}</style>
    </div>
  );
};
export default ImageItem;
