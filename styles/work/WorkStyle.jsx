import css from "styled-jsx/css";
const WorkStyle = css`
  #work {
    background-color: #131313;
  }
  #work .title span {
    color: #c8ced8;
    letter-spacing: 5px;
  }
  #work .title h1 {
    font-family: "noto-black";
    font-size: 70px;
    color: #fff;
  }

  #work .contents .item {
    background-color: #fff;
    object-fit: cover;
    width: 100%;
    height: 800px;
  }

  #work .contents .item .text {
    z-index: 3;
    text-align: end;
  }

  #work .contents .item .text span {
    font-family: "noto-bold";
    color: #888;
    margin-bottom: 20px;
  }

  #work .contents .item .text h2 {
    width: 500px;
    font-family: "noto-black";
    font-size: 30px;
    letter-spacing: -1px;
    word-break: keep-all;
  }
`;
export default WorkStyle;
