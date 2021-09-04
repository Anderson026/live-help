
import { useState } from "react";
import { ButtonMenuMobile } from "../../components/ButtomMenuMobile";
import { ButtonSend } from "../../components/ButtonSend";
import { ButtonCancel } from "../../components/ButtonCancel";
import firebase from "../../services/firebase";

export function InsertChangeLog() {
  // salvar os dados do formulário no estado para enviar para o banco de dados
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // função para enviar os dados para o banco de dados
  function handleSubmit(event) {
    event.preventDefault();
    
    const db = firebase.firestore();
    db.collection("change_log").add({
      title: title,
      description: description,

    }).then(() => {
      alert("Dados enviados com sucesso!");
    }).catch((error) => {
      alert("Deu ruim", error);
    })

  }
  return(
    <main>
      <div className="content">
        <h1 className="header">Informe as Novidades da Versão</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>
              Versão:
              <input 
                type="text" 
                placeholder="Informe a versão" 
                value={title}
                onChange={event => setTitle(event.target.value)}//pegar os daddos do input
              />
            </label>
            <label>
              Descrição:
              <input
                type="text"
                placeholder="Informe as mudanças" 
                value={description}
                onChange={event => setDescription(event.target.value)}
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