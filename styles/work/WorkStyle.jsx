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
    cursor: pointer;
  }

  #work .contents .item .bg-navy {
    background-color: #0e1322;
    opacity: 0;
    transition: 0.3s;
  }

  #work .contents .item:hover .bg-navy {
    opacity: 0.95;
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

  #work .contents .item .circle-wrapper {
    z-index: 3;
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 100%;
    transition: 0.2s;
  }

  #work .contents .item .circle-wrapper .circle-border {
    background-color: #fff;
    transition: 0.2s;
  }

  #work .contents .item .circle-inner {
    font-family: "noto-black";
    background-color: #121212;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    z-index: 4;
    color: #fff;
  }

  #work .contents .item:hover .text h2 {
    color: #fff;
    transition: 0.3s;
    animation: up-text-h2 0.5s .2s forwards ;
  }

  #work .contents .item:hover .text span {
    color: #ddd;
    transition: 0.3s;
    animation: up-text-h2 0.5s forwards;
  }

  @keyframes up-text-h2 {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export default WorkStyle;
