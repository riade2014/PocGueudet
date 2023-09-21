import logo from "../../assets/images/Logo.svg";
import home from "../../assets/images/Home.svg";
import menu from "../../assets/images/Hamburger Menu.svg";
import g from "../../assets/images/G.svg";
import myAccount from "../../assets/images/MyAccount.svg";
import cart from "../../assets/images/Cart.svg";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./PhoneHeader.css";

function PhoneHeader() {
  return (
    <>
      <div className="Logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="bottom-menu">
        <img src={home} alt="home" />
        <img src={cart} alt="cart" />
        <img src={g} alt="g" />
        <img src={myAccount} alt="vector" />
        <img src={menu} alt="menu" />
      </div>
    </>
  );
}

export default PhoneHeader;
