
import { useState } from "react";
import { ButtonMenuMobile } from "../../components/ButtomMenuMobile";
import { ButtonSend } from "../../components/ButtonSend";
import { ButtonCancel } from "../../components/ButtonCancel";
import firebase from "../../services/firebase";

export function InsertInstallationFiles() {
  // salvar os dados do formulário no estado para enviar para o banco de dados
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [version, setVersion] = useState("");
  const [date, setDate] = useState("");
  // função para enviar os dados para o banco de dados
  function handleSubmit(event) {
    event.preventDefault();
    
    const db = firebase.firestore();
    db.collection("installation_files").add({
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
  return(
    <main>
      <div className="content">
        <h1 className="header">Cadastro de Arquivos de Instalação</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>
              Link:
              <input 
                type="url" 
                placeholder="Link de download" 
                value={link}
                onChange={event => setLink(event.target.value)}//pegar os daddos do input
              />
            </label>
            <label>
              Nome:
              <input
                type="text"
                placeholder="Digite a descrição do arquivo" 
                value={description}
                onChange={event => setDescription(event.target.value)}
                />
            </label>
            <label>
              Versão:
              <input 
                type="text" 
                placeholder="Informe a versão do arquivo" 
                value={version}
                onChange={event => setVersion(event.target.value)}
              />
            </label>
            <label>
              Data de Lançamento:
              <input 
                type="date"
                value={date}
                onChange={event => setDate(event.target.value)}
              />
            </label>
            <ButtonSend onSubmit={handleSubmit} />
            <ButtonCancel />
          </form>
        </div>
      </div>
        <ButtonMenuMobile />
    </main>
  );
}