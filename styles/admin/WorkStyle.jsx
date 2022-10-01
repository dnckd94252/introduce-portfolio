import css from "styled-jsx/css";
const WorkStyle = css`
  #work {
    height: 1000px;
    background-color: #131313;
  }

  #work .title span {
    color: #c8ced8;
    letter-spacing: 5px;
  }

  #work .item span {
    color: #c8ced8;
    letter-spacing: 5px;
  }

  #work .title h2 {
    font-family: "noto-black";
    font-size: 70px;
    color: #fff;
  }

  #work .item input[type="text"] {
    background: none;
    color: #fff;
    border: 1px solid #fff;
  }

  #work .item input[type="month"] {
    background: none;
    color: #fff;
    border: 1px solid #fff;
  }
  #work .item .plusBtn {
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    background: none;
    color: #fff;
    transition: 0.3s;
  }
  #work .item .plusBtn:hover {
    background-color: #fff;
    color: #000;
  }
`;
export default WorkStyle;
