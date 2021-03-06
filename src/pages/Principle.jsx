
import { ButtonSend } from "../components/ButtonSend";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/principle.css";
import logoLive from "../assets/logo.png";
import firebase from "../services/firebase";


export function Principle() {

  // guardando e alterando os dados no estado
  const [listFiles, setListFiles] = useState([]);
  // colocando o firebase dentro de uma variável
  const ref = firebase.firestore().collection("change_log").orderBy("date", "desc");
  // função para pegar todos os dados do banco e armazenar dentro de um array para e por fim salvar no estado
  useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setListFiles(docs);
      
    });
  }, []);


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
        setPassword("");
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
          <Link to="/principle">
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
          <footer>Anderson Ferreira</footer>
        </div>
      </div>
      
      {/* contedúdo da página */}
      <div className="content">
        <h1 className="header">Novidades</h1>
        <div className="information">
          <div className="div-table">
            <table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Versão</th>
                  <th>Data de Lançamento</th>
                </tr>
              </thead>
              {listFiles.map((file) => {
                return <tbody key={file.id}>
                    <tr>
                      <td>{file.description}</td>
                      <td>{file.version}</td>
                      <td>{new Date(file.date).toLocaleDateString("pt-br", {timeZone: "UTC"})}</td>
                    </tr>
                  </tbody>
              })}
            </table>
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