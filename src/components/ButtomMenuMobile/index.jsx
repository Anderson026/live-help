
import "./style.css";
import buttonMenuMobile from "../../assets/buttonMenuMobile.svg";

export function ButtonMenuMobile() {
  return(
    <button className="buttonMenuMobile">
      <img src={buttonMenuMobile} alt="Icone de menu" />
    </button>
  );
}