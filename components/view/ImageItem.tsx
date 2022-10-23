import Image from "next/image";
import ImageItemStyle from "../../styles/view/ImageItemStyle";

const ImageItem = (props: any) => {
  const { src } = props;
    
  return (
    <div className="item">
      <Image src={require(`../../server/public/image/${src}`)} />
      <style jsx>{ImageItemStyle}</style>
    </div>
  );
};
export default ImageItem;
