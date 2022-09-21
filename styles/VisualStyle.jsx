import css from "styled-jsx/css";
const VisualStyle = css`
  #visual {
    background-color: #131313;
  }

  #visual .three .shadowBox {
    width: 700px;
    height: 700px;
    border-radius: 100%;
  }

  #visual .text .title h1 {
    font-family: "noto-black";
    color: #fff;
    letter-spacing: 3px;
    font-size: 120px;
    line-height: 90%;
  }

  #visual .text .title .whiteBar {
    width: 140px;
    height: 20px;
    margin-left: 50px;
    margin-bottom: 20px;
    background-color: #fff;
  }

  #visual .text .title .pointText {
    width: 400px;
  }
  #visual .text .title .pointText .pointBar {
    width: 150px;
    border-radius: 100px;
    height: 3px;
    background-color: #fff;
    opacity: 0.3;
  }
  #visual .text .title .pointText span {
    color: #fff;
    font-size: 20px;
  }

  #visual .under {
    color: #fff;
  }
  #visual .under .whiteBar {
    background-color: #fff;
    width: 2px;
    height: 60px;
    border-radius: 100px;
  }
`;

export default VisualStyle;
