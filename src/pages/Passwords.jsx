import { useState } from "react";
import "../styles/passwords.css";
import { ButtonSend } from "../components/ButtonSend";
import { Link } from "react-router-dom";
import logoLive from "../assets/logo.png";

export function Passwords() {
  let date = new Date();
  let hour = date.getHours();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let calculatePasswordPosto = (day + month + year) - 2000;
  let calculatePasswordLoja = (hour + day + month + year) - 2000;
  let calculatePasswordConfig = (hour + day + month + year) - 75;
  let calculatePasswordCbc = (year - month - day - hour);

  const [passwordPosto, setPasswordPosto] = useState(calculatePasswordPosto);
  const [passwordLoja, setPasswordLoja] = useState(calculatePasswordLoja);
  const [passwordConfig, setPasswordConfig] = useState(calculatePasswordConfig);
  const [passwordCbc, setPasswordCbc] = useState(calculatePasswordCbc);

  function updatePasswords() {
    document.location.reload(true);
    let update = window.addEventListener("click", () =>{
      setPasswordPosto(calculatePasswordPosto);
      setPasswordLoja(calculatePasswordLoja);
      setPasswordConfig(calculatePasswordConfig);
      setPasswordCbc(calculatePasswordCbc);
    })
    return update;
  }
// guardando o estado do que é digitado no input
const [password, setPassword] = useState("");
// função para redirecionar para as páginas de pdv versões ou passwords
function Redirect(event) {
  event.preventDefault();
  switch(password) {
    case "pdvversoes":
      return window.location.href = "https://www.notion.so/Live-PDV-NFC-e-24e7948e581a4e5bbf169cdb3e9dc9ed#bc0e132694ab41a8a7c3e12fd3f07cce";
    case "livetutoriais":
      return window.location.href = "http://livetutoriais.online:3300/";
    default:
      alert("Senha Inválida!");
  }
}

// função para mostrar o menu mobile
function hideOrShowMenu() {
  let divMenu = document.querySelector(".div-menu");
  divMenu.classList.toggle("active");
}

// função para mostar o modal
function hideOrShowtModal() {
  let modal = document.querySelector(".modal");
  modal.classList.toggle("active");
}

  return (
    <main>

      {/* menu mobile */}
      <div className="div-menu">
        <div className="div-logo">
          <Link to="/">
            <img className="logo-img" src={logoLive} alt="logo da Live Sistemas" />
          </Link>
        </div>
        <div className="div-buttons">
          <Link to="/downloadlinks">
            <div>Dowloads</div>
          </Link>
          <Link to="/passwords">
            <div>Passwords</div>
          </Link>
          <div onClick={hideOrShowtModal}>Tutoriais</div>
          <div onClick={hideOrShowtModal}>Acessar Versões do PDV</div>
        </div>
        <div className="div-footer">
          <footer>Anderson Ferreira 2021</footer>
        </div>
      </div>

      <div className="content">
        <h1 className="header">Passwords</h1>
        <div className="information">
          <div className="password-container">
            <div className="passwords-styles"><p>Senha do Live Posto: <span>{passwordPosto}</span></p></div>
            <div className="passwords-styles"><p>Senha do Live Loja: <span>{passwordLoja}</span></p></div>
            <div className="passwords-styles"><p>Senha do config do PDV: <span>{passwordConfig}</span></p></div>
            <div className="passwords-styles"><p>Senha do CBC 2k9: <span>{passwordCbc}</span></p></div>
            <div className="passwords-styles"><p>Senha do config da Getcard: <span>secnas256</span></p></div>
            <div className="passwords-styles"><p>Senha do Gsurf: <span>Live202109</span></p></div>
            
            {/* <div className="passwords-styles"> */}
              <button className="buttonUpdate" onClick={updatePasswords}>Atualizar Senhas</button>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* modal para informar a senha para redirecionamento para a página de versões do pdv */}
      <div className="modal ">
        <div className="div-password">
          <h1>Digite a senha de acesso:</h1>
          <form className="form" onSubmit={Redirect}>
            <input type="password"
              required
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <ButtonSend />
            <button className="button-cancel" onClick={hideOrShowtModal}>Cancelar</button>
          </form>
        </div>
      </div>
      {/* fim do modal */}

      <button className="buttonMenuMobile" onClick={hideOrShowMenu}>
        {/* <img id="btnImg" src={buttonMenuMobile} alt="Icone de menu" /> */}
        <input type="checkbox" id="checkbox-menu" />
        <label className="labelButton" onClick={hideOrShowMenu} htmlFor="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </button>
    </main>
  );
}