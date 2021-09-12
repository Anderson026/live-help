
import { ButtonSend } from "../components/ButtonSend";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import "../styles/principle.css";
// import { ButtonMenuMobile } from "../components/ButtomMenuMobile";
import logoLive from "../assets/logo.png";

export function Principle() {
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
      
      {/* contedúdo da página */}
      <div className="content">
        <h1 className="header">Novidades da Versão 1.0.0</h1>
        <div className="information">
          <section>
            <p>
              Nova Versão do PDV.
            </p>
            <p>
              Nova pasta do PDV.
            </p>

          </section>
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
        </div>
      </div>
      <button className="buttonMenuMobile" onClick={hideOrShowMenu}>
        {/* <img id="btnImg" src={buttonMenuMobile} alt="Icone de menu" /> */}
        <input type="checkbox" id="checkbox-menu" />
        <label onClick={hideOrShowMenu} htmlFor="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </button>
    </main>
  );
}