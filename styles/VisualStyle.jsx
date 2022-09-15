import css from "styled-jsx/css";
const VisualStyle = css`
  #visual {
    background-color: #151921;
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
  
`;
export default VisualStyle;
