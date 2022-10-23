import ImageContentStyle from "../../styles/view/ImageContentStyle";
import ImageItem from "./ImageItem";

const ImageContent = (props: any) => {
  const { work_image, work } = props.data;
  const { mockup } = work[0];


  return (
    <div className="imageContent mt-5 pt-5 border-top">
      <div className="title">
        <span>CASE STUDY</span>
        <h2>WORK RESULT</h2>
        <ImageItem src={mockup} />
        {work_image.map((item : any , idx : number) => <ImageItem src={item.name} key={idx} />)}
      </div>
      <style jsx>{ImageContentStyle}</style>
    </div>
  );
};
export default ImageContent;
