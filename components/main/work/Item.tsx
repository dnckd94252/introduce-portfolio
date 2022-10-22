import WorkStyle from "../../../styles/work/WorkStyle";
import Image from "next/image";
import { BsArrowRightSquare } from "react-icons/bs";
import { useRouter } from "next/router";

const Item = (props : any) => {
  const {id , start_date , end_date, type , mockup , name , content , sub_title} = props.information;
  const router = useRouter();

  const dateFormat = (date : Date) => {
    const baseDate = new Date(date);
    return `${baseDate.getFullYear()}.${baseDate.getMonth() + 1}`;
  }
  
  const pageRoute = () => router.push(`/view/${id}`);
  
  return (
    <div className="item position-relative d-flex justify-content-between mt-5 mb-5" onClick={pageRoute}>
      <Image
        src={require(`../../../server/public/image/${mockup}`)}
        className="baseImage position-absolute"
        objectFit="cover"
        objectPosition="center"
        layout="fill"
      />
      <div className="bg-navy position-absolute w-100 h-100"></div>
      <div className="circle-wrapper m-5 d-flex align-items-center position-relative justify-content-center">
        <div className="circle-border position-absolute w-100 h-100"></div>
        <div className="circle-inner d-flex align-items-center justify-content-center">
          {type}
        </div>
      </div>
      <div className="text d-flex flex-column p-5">
        <span className="year">{dateFormat(start_date)} ~ {dateFormat(end_date)}</span>
        <h2>
          {sub_title}
        </h2>
        <span className="d-flex align-items-center justify-content-end mt-5 viewMore">
          View More About <BsArrowRightSquare />
        </span>
      </div>
      <style jsx>{WorkStyle}</style>
    </div>
  );
};

export default Item;
