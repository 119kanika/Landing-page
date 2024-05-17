import icon from "../images/icon.png";
import logo from "../images/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="icons" src={icon} />
      <img className="icons" src={logo} alt="" />
    </div>
  );
};

export default Header;
