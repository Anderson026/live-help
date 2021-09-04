
import { Link } from "react-router-dom";
import { ButtonMenuMobile } from "../components/ButtomMenuMobile";
import "../styles/principle.css";

export function Principle() {

  return (
    <main>
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
        </div>
      </div>
      <Link to="/secret">
        <ButtonMenuMobile />
      </Link>
    </main>
  );
}