import css from "styled-jsx/css";
const TitleStyle = css`
  .title {
    height: 100%;
  }
  .title .text {
    padding-top: 170px;
    height: 95vh;
  }
  .title .text h1 {
    font-family: "noto-black";
    color: #222;
    font-size: 70px;
  }
  .title .content .bar {
    width: 50px;
    height: 5px;
    border-radius: 10px;
    margin-right: 20px;
    background-color: #222;
  }
  .title .content span {
    width: 300px;
    color: #222;
    letter-spacing: -1px;
    word-break: keep-all;
  }
  .title .circle-controller .item {
    width: 600px;
    height: 600px;
    left: -350px;
    border-radius: 100%;
    border: 1px solid #666;
  }
  .title .circle-controller .item .circle {
    width: 250px;
    height: 250px;
    z-index: 2;
    background: linear-gradient(90deg, #000 70%, #9b9ea1);
    border-radius: 100%;
  }
  .title .circle-controller .item .circle2 {
    position: absolute;
    width: 350px;
    border: 15px solid transparent;
    height: 350px;
    border-radius: 50%;
    background-image: linear-gradient(#eceff4, #eceff4),
      linear-gradient(to right, #9b9ea1, #222);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  .title .copyright {
    height: 5vh;
  }
  .title .copyright span {
    font-family: "noto-bold";
    letter-spacing: -1px;
    color: #777;
  }
  .title .circle-wrapper {
    width: 100%;
    border-radius: 100%;
    height: 100%;
    position: absolute;
    border: 5px solid #555;
    clip-path: polygon(50% 44%, 80% 0, 100% 0, 100% 23%);
    transition: .3s;
  }
  
`;
export default TitleStyle;
