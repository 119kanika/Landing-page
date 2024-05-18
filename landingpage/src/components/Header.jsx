import icon from "../../public/images/icon.png";
import logo from "../../public/images/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="icons" src={icon} />
      <img className="icons" src={logo} alt="" />
    </div>
  );
};

export default Header;
