import gif1 from "../../assets/tutorials-images/tutorial-01/gif1.gif";
import gif2 from "../../assets/tutorials-images/tutorial-01/gif2.gif";
import "../../styles/tutorials-styles/cadastroDeColaboradores.css"


export function CadastroDeColaboradores() {

  return(
    <main className="page-container">
      <h1>Cadastro de Colaboradores</h1>
      <p>Para cadastrar colaboradores acessa o menu do sistema, no módulo de Cadastros - Colaboradores:</p>
      <img src={gif1} alt="mostrando o cadastro de colaboradores" />
      <p>Agora clica em incluir para cadastrar o novo colaborador, detalhe é que só o nome é campo obrigatório:</p>
      <img src={gif2} alt="cadastrando o colaborador" />
      <p>Se o estabelecimento utilizar cartões identfid, pode incluir no campo RFID.</p>
    </main>
  );
}