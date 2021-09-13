
import { useState } from "react";
import { ButtonSend } from "../../components/ButtonSend";
import { ButtonCancel } from "../../components/ButtonCancel";
import firebase from "../../services/firebase";
import { Link } from "react-router-dom";
import logoLive from "../../assets/logo.png";

export function InsertPdvVersions() {
  // salvar os dados do formulário no estado para enviar para o banco de dados
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");
  const [date, setDate] = useState("");
  // função para enviar os dados para o banco de dados
  function handleSubmit(event) {
    event.preventDefault();
    
    const db = firebase.firestore();
    db.collection("pdv_versions").add({
      link: link,
      description: description,
      version: version,
      date: date
    }).then(() => {
      alert("Dados enviados com sucesso!");
    }).catch((error) => {
      alert("Deu ruim", error);
    })
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
  return(
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
        <h1 className="header">Cadastro de Verões do PDV</h1>
        <div className="information">
          <div className="form-cad">
            <form onSubmit={handleSubmit}>
              <label>
                Link:
              </label>
              <input 
                type="url" 
                placeholder="Link de download" 
                value={link}
                required
                onChange={event => setLink(event.target.value)}//pegar os daddos do input
              />
              <label>
                Nome:
              </label>
              <input
                type="text"
                placeholder="Digite a descrição do arquivo" 
                value={description}
                required
                onChange={event => setDescription(event.target.value)}
              />
              <label>
                Versão:
              </label>
              <input 
                type="text" 
                placeholder="Informe a versão do arquivo" 
                value={version}
                required
                onChange={event => setVersion(event.target.value)}
              />
              <label>
                Data de Lançamento:
              </label>
              <input 
                type="date"
                value={date}
                required
                onChange={event => setDate(event.target.value)}
              />
              <ButtonSend onSubmit={handleSubmit} />
              <Link to="/secret"><ButtonCancel /></Link>
            </form>
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