import { useState } from "react";
import "../styles/passwords.css";

export function Passwords() {
  let date = new Date();
  let hour = date.getHours();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let second = date.getSeconds();
 
  let calculatePasswordPosto = (day + month + year) - 2000;
  let calculatePasswordLoja = (hour + day + month + year) - 2000;
  let calculatePasswordConfig = (hour + day + month + year) - 75;
  let calculatePasswordCbc = (year - month - day - hour + second);

  const [passwordPosto, setPasswordPosto] = useState(calculatePasswordPosto);
  const [passwordLoja, setPasswordLoja] = useState(calculatePasswordLoja);
  const [passwordConfig, setPasswordConfig] = useState(calculatePasswordConfig);
  const [passwordCbc, setPasswordCbc] = useState(calculatePasswordCbc);

  function updatePasswords() {
    setPasswordPosto(calculatePasswordPosto);
    setPasswordLoja(calculatePasswordLoja);
    setPasswordConfig(calculatePasswordConfig);
    setPasswordCbc(calculatePasswordCbc);
  }

  return (
    <>
      <h1>Passwords</h1>
      <div className="content-div">
        <p>Senha do Live Posto: {passwordPosto}</p>
        <p>Senha do Live Loja: {passwordLoja}</p>
        <p>Senha do config do PDV: {passwordConfig}</p>
        <p>Senha do CBC 2k9: {passwordCbc}</p>
        <p>Senha do config da Getcard: secnas256</p>
        <p>Senha do Gsurf: Live202108</p>
        <button onClick={updatePasswords}>Atualizar Senhas</button>
      </div>
    </>
  );
}