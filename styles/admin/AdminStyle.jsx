import css from "styled-jsx/css";
const AdminStyle = css`
  #admin {
    background-color: #131313;
    padding-top: 100px;
  }

  #admin .title span {
    color: #c8ced8;
    letter-spacing: 5px;
  }
  #admin .title h2 {
    font-family: "noto-black";
    font-size: 70px;
    color: #fff;
  }
  #admin .workPlusBtn {
    background: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 10px 20px;
    letter-spacing: 5px;
    transition: 0.3s;
  }
  #admin .workPlusBtn:hover {
    background-color: #fff;
    color: #000;
  }
  
`;
export default AdminStyle;
