

import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Principle } from "./pages/Principle";
import { Passwords } from "./pages/Passwords";
import { PagePdvVersions } from "./pages/PagePdvVersions";
import { PageInstallationFiles } from "./pages/PageInstallationFiles";
import { PageAutomationFiles } from "./pages/PageAutomationFiles";
import { PagePrintersDrivers } from "./pages/PagePrintersDrivers";
import { PageTefFiles } from "./pages/PageTefFiles";
import { PageTrainingOs } from "./pages/PageTrainingOs";
import { PageOtherFiles } from "./pages/PageOtherFiles";
// Página de cadastros
import { InsertPdvVersions } from "./pages/secret/InsertPdvVersions";
import { InsertInstallationFiles } from "./pages/secret/InsertInstallationFiles";
import { InsertAutomationFiles } from "./pages/secret/InsertAutomationFiles";
import { InsertPrintersDrivers } from "./pages/secret/InsertPrintersDrivers";
import { InsertTefFiles } from "./pages/secret/InsertTefFiles";
import { InsertTrainingOs } from "./pages/secret/InsertTrainingOs";
import { InsertOtherFiles } from "./pages/secret/InsertOtherFiles";
import { InsertChangeLog } from "./pages/secret/InsertChangeLog";
// Páginas de Tutoriais
import { CadastroDeColaboradores } from "./pages/tutorials/CadastroDeColaboradores";

// Função onde séra importada as rotas
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Principle} />
        <Route path="/passwords" exact component={Passwords} />
        {/* rotas de cadastros de arquivos de download */}
        <Route path="/secret/insertpdvversions" exact component={InsertPdvVersions} />
        <Route path="/secret/insertinstalationfiles" exact component={InsertInstallationFiles} />
        <Route path="/secret/insertautomationfiles" exact component={InsertAutomationFiles} />
        <Route path="/secret/insertprintersdrivers" exact component={InsertPrintersDrivers} />
        <Route path="/secret/insertteffiles" exact component={InsertTefFiles} />
        <Route path="/secret/inserttrainingos" exact component={InsertTrainingOs} />
        <Route path="/secret/insertotherfiles" exact component={InsertOtherFiles} />
        <Route path="/secret/insertchangelog" exact component={InsertChangeLog} />
        {/* Rotas de listagem de arquivos */}
        <Route path="/pagepdvversions" component={PagePdvVersions} />
        <Route path="/pageinstallationfiles" component={PageInstallationFiles} />
        <Route path="/pageautomationfiles" component={PageAutomationFiles} />
        <Route path="/pageprintersdrivers" component={PagePrintersDrivers} />
        <Route path="/pageteffiles" component={PageTefFiles} />
        <Route path="/pagetrainingos" component={PageTrainingOs} />
        <Route path="/pageotherfiles" component={PageOtherFiles} />
        {/* Rotas das páginas de tutoriais */}
        <Route path="/tutorials/01-cadastrodecolaboradores" exact component={CadastroDeColaboradores} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
