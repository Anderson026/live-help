
import { ButtonSend } from "../components/ButtonSend";
import { useState } from "react/cjs/react.development";
import buttonMenuMobile from "../assets/buttonMenuMobile.svg";
import "../styles/principle.css";
import { Link } from "react-router-dom";

export function Principle() {
  // guardando o estado do que é digitado no input
  const [password, setPassword] = useState("");
  // função para redirecionar para as páginas de pdv versões ou passwords
  function Redirect(event) {
    event.preventDefault();
    switch(password) {
      case "pdvversoes":
        return window.location.href = "https://www.notion.so/Live-PDV-NFC-e-24e7948e581a4e5bbf169cdb3e9dc9ed#bc0e132694ab41a8a7c3e12fd3f07cce";
      case "passwords":
        return window.location.href = "http://localhost:3000/passwords";
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
        <div className="div-logo">Logo</div>
        <div className="div-buttons">
          <Link to="/pagepdvversions">
            <button>Dowloads</button>
          </Link>
          <button onClick={hideOrShowtModal}>Passwords</button>
          <button onClick={hideOrShowtModal}>Acessar Versões do PDV</button>
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
              <h1>Digite aqui a sua senha de acesso:</h1>
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
        </div>
      </div>
      <button className="buttonMenuMobile" onClick={hideOrShowMenu}>
        <img src={buttonMenuMobile} alt="Icone de menu" />
      </button>
    </main>
  );
}