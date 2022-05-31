import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../components/Store/Context";
import "../styles/login.css";
import logoLive from "../assets/logo.png";

function initialState() {
  return { password: "" };
}

function login({password}) {
  if (password === "live2015") {
    return { token: "1234" }
  }
  alert("Senha inválida!")
  return {error: "Por favor verifique se digitou a senha corretamente!"};
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push("/principle");
    }

    setError(error);
    setValues(initialState);
  }

  return(
    <div className="bg-container">
      <div className="form-div">
        <img className="logo-img" src={logoLive} alt="logo da Live Sistemas" />
        <h1>Digite a senha</h1>
        <form onSubmit={onSubmit} className="form">
          <div className="label-form">
            <input id="password" type="password" name="password" onChange={onChange} value={values.password} required/>
          </div>
          <button className="btn-submit" type="submit">
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;