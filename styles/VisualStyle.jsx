import css from "styled-jsx/css";
const VisualStyle = css`
  #visual {
    background-color: #151921;
    overflow: hidden;
  }

  #visual .text h1 {
    background: linear-gradient(
      271.28deg,
      #e0f9b8 -1.29%,
      #47e9ea 53.12%,
      #0e92ff 117.3%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "noto-bold";
    font-size: 70px;
  }

  #visual .text .duty {
    padding: 10px 30px;
    background-color: var(--point-orange);
    border-radius: 100px;
    font-family: "noto-bold";
    color: #fff;
  }

  #visual .text .content span {
    word-break: keep-all;
    color: #fff;
    font-size: 20px;
  }

  #visual .projectBtn {
    background-color: var(--point-green);
    color: #fff;
    border: none;
    padding: 15px 40px;
    border-radius: 100px;
  }

  #visual .three .circle1 {
    width: 800px;
    height: 800px;
    border: 1px solid #fff;
    position: absolute;
    border-radius: 100%;
    opacity: 15%;
  }

  #visual .three .circle2 {
    width: 1200px;
    height: 1200px;
    border: 1px solid #fff;
    position: absolute;
    border-radius: 100%;
    opacity: 8%;
  }

  #visual .three .circle3 {
    width: 1700px;
    height: 1700px;
    border: 1px solid #fff;
    position: absolute;
    border-radius: 100%;
    opacity: 3%;
  }
`;

export default VisualStyle;
