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
    background-color: #fff;
    border-radius: 100px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  header .hamburger .bar:nth-child(3) {
    width: 30px;
    transition: 0.2s;
  }
    
`;
export default HeaderStyle;
