
import { ButtonSend } from "../components/ButtonSend";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/principle.css";
import "../styles/pageDownloadLinks.css";
// import { ButtonMenuMobile } from "../components/ButtomMenuMobile";
import logoLive from "../assets/logo.png";

export function PageSecret() {
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
        <div className="header-links">
          <Link to="/secret/insertinstalationfiles">
            <div className="div-links">Arquivos de Instalção</div>
          </Link>

          <Link to="/secret/insertpdvversions">
            <div className="div-links">Versões PDV</div>
          </Link>

          <Link to="/secret/insertautomationfiles">
            <div className="div-links">Arquivos de Automação</div>
          </Link>

          <Link to="/secret/insertprintersdrivers">
            <div className="div-links">Drivers de impressoras</div>
          </Link>

          <Link to="/secret/insertteffiles">
            <div className="div-links">Arquivos tef</div>
          </Link>

          <Link to="/secret/inserttrainingos">
            <div className="div-links">Pops e Os</div>
          </Link>

          <Link to="/secret/insertotherfiles">
            <div className="div-links">Diversos</div> 
          </Link>

          <Link to="/secret/insertchangelog">
            <div className="div-links">Change Log</div> 
          </Link>

        </div>
        <div className="information">
          <section>
            <p>Para cadastrar os arquivos basta clicar na sessão acima desejada.</p>

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
        <label className="labelButton" onClick={hideOrShowMenu} htmlFor="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </button>
    </main>
  );
}