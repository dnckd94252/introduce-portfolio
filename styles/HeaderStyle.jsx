import css from "styled-jsx/css";
const HeaderStyle = css`
  header {
    color: #fff;
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
`;
export default HeaderStyle;
