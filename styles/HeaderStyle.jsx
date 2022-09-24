import css from "styled-jsx/css";
const HeaderStyle = css`
  header {
    color: #fff;
    z-index: 100;
    overflow-y: hidden;
    height: 100px;
    transition: 0.5s;
  }
  header.active {
    height: 100vh;
    border-bottom: 1px solid #fff;
  }
  header .logo {
    z-index: 100;
  }
  header .logo h2 {
    font-family: "noto-bold";
  }
  header .logo h2 b {
    color: var(--point-orange);
  }

  header .hamburger {
    cursor: pointer;
  }

  header .hamburger .bar {
    width: 50px;
    height: 5px;
    transition: 0.3s;
    background-color: #fff;
    border-radius: 100px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  header .hamburger.active .bar:nth-child(1) {
    transform: rotate(45deg);
    position: absolute;
  }

  header .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  header .hamburger.active .bar:nth-child(3) {
    transform: rotate(-45deg);
    position: absolute;
  }

  header .wrapper {
    height: 100vh;
    overflow: hidden;
    background-color: #131313;
  }

  header .wrapper h1,
  header .wrapper .item {
    opacity: 0;
  }
  header .content {
    height: 760px;
  }

  header .content .items {
    margin-right: 300px;
  }
  header .content .items span {
    font-size: 70px;
    font-family: "noto-black";
    margin-top: 15px;
    margin-bottom: 15px;
  }

  header .content .items .item {
    width: 560px;
    position: relative;
  }
  header .content .decoration .decoBar {
    position: absolute;
    height: 1px;
    left: 20px;
    border-radius: 100px;
    background-color: #fff;
  }

  @keyframes decoBarWidth {
    from {
      width: 0px;
    }
    to {
      width: 200px;
    }
  }

  header .content .items .item:hover .decoBar {
    animation: decoBarWidth 0.3s forwards;
  }

  header .content .backMenu h1 {
    font-size: 430px;
    position: absolute;
    font-family: "noto-black";
    letter-spacing: -30px;
    padding-bottom: 200px;
    color: #000;
  }
  header .content .backMenu .bar {
    width: 400px;
    background-color: #000;
    height: 50px;
    margin-left: 40px;
  }

  header .menu-footer {
    height: 100px;
  }

  header .menu-footer .sns {
    font-size: 40px;
    width: 100px;
  }

  header .menu-footer .comment {
    font-family: "noto-black";
    color: #222;
    line-height: 25px;
    letter-spacing: -1px;
    font-size: 25px;
  }

  header.active .wrapper h1 {
    animation: backMenuActive 0.5s forwards;
  }
  header .wrapper h1 {
    animation: backMenuNotActive 0.5s forwards;
  }
  header.active .wrapper .content .items .item{
    animation: menuActive 0.5s forwards;
    /* opacity: 1; */
  } 

  @keyframes backMenuActive {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes backMenuNotActive {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-100px);
    }
  }
  @keyframes menuActive {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes menuNotActive {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-100px);
    }
  }
`;
export default HeaderStyle;
