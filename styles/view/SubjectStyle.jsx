import css from "styled-jsx/css";
const SubjectStyle = css`
  .item p {
    font-size: 1.375rem;
    color: #ccc;
    margin: 0;
  }
  .title {
    margin-top: 30px;
    width: 600px;
    word-break: keep-all;
  }
  .title span {
    color: #c8ced8;
    letter-spacing: 5px;
    font-size: 0.825rem;
  }
  .item .stack .stackItem {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    background-color: none;
    border: 1px solid #fff;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: .3s;
}
  .item .stack .stackItem:hover {
    background-color: #fff;
    color: #000;
  }
`;
export default SubjectStyle;