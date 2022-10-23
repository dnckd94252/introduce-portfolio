import css from "styled-jsx/css";

const ImageItemStyle = css`
  .item {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    opacity: 0;
    transform: translateY(50px);
    transition: .5s;
  }
  .item[data-boolean="true"] {
    opacity: 1;
    transform: translateY(0);
  }

`;
export default ImageItemStyle;
