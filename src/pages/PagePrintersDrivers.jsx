import { useEffect, useState } from "react";
import firebase from "../services/firebase";

export function PagePrintersDrivers() {
  // guardando e alterando os dados no estado
  const [listFiles, setListFiles] = useState([]);
  // colocando o firebase dentro de uma variável
  const ref = firebase.firestore().collection("printers_drivers");
  // função para pegar todos os dados do banco e armazenar dentro de um array para e por fim salvar no estado
  async function getFiles() {
    ref.onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setListFiles(docs);

    });
  }
  // hook para execupar a função getfiles
  useEffect(() => {
    getFiles();
  }, []);

  return(
    <main>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Baixar</th>
              <th>Descrição</th>
              <th>Versão</th>
              <th>Data de Lançamento</th>
            </tr>
          </thead>
          {/* usando o estado para mostrar os dados do banco de dados na tabela */}
          {listFiles.map((file) => {
            return <tbody key={file.id}>
              <tr>
                <td>{file.link}</td>
                <td>{file.description}</td>
                <td>{file.version}</td>
                <td>{file.date}</td>
              </tr>
            </tbody>
          })}
        </table>
      </div>
    </main>
  );
}
