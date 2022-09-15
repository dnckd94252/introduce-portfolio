import css from "styled-jsx/css";
const HeaderStyle = css`
  header {
    color: #fff;
  }

  header .logo {
    font-family: "noto-black";
    font-size: 23px;
  }

  header .logo b {
    font-size: 30px;
    color: #ff4a1f;
  }

  header .chatBtn {
    background-color: var(--point-green);
    border-radius: 100px;
  }

  .menu {
    font-family: "Raleway", Arial, sans-serif;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .menu * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  .menu a {
    display: inline-block;
    list-style: outside none none;
    margin: 0.5em 1.5em;
    padding: 0;
    padding: 0.3em 0;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    text-decoration: none;
    display: inline-block;
  }
  .menu a:before,
  .menu a:after {
    height: 3px;
    position: absolute;
    content: "";
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    background-color: #9b59b6;
    width: 0;
  }
  .menu a:before {
    top: 0;
    left: 0;
  }
  .menu a:after {
    bottom: 0;
    right: 0;
  }
  .menu a:hover,
  .menu .current a {
    color: #ffffff;
  }
  .menu a:hover:before,
  .menu .current a:before,
  .menu a:hover:after,
  .menu .current a:after {
    width: 100%;
  }
`;
export default HeaderStyle;
