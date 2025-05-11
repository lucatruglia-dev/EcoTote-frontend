import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { createSignal, Show, onMount } from "solid-js";
import AlertBox from "../../components/AlertBox/AlertBox";
import './main.css'

import getMembers from "../people/api";
import sendLogin from "./login";

export default function Login() {
  const [formData, setFormData] = createSignal({
    email: "",
    password: ""
  });

  onMount(async () => {
    await getMembers();
  });

  const [showAlert, setShowAlert] = createSignal(false);
  const [alertConfig, setAlertConfig] = createSignal({
    icon: "",
    message: "",
    subMessage: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData(),
      [name]: value
    });
  };

  const validateForm = () => {
    const data = formData();
    
    if (!data.email) {
      setAlertConfig({
        icon: "fa-exclamation-circle",
        message: "Email mancante",
        subMessage: "Inserisci la tua email"
      });
      setShowAlert(true);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setAlertConfig({
        icon: "fa-exclamation-circle",
        message: "Email non valida",
        subMessage: "Inserisci un indirizzo email valido"
      });
      setShowAlert(true);
      return false;
    }

    if (!data.password) {
      setAlertConfig({
        icon: "fa-exclamation-circle",
        message: "Password mancante",
        subMessage: "Inserisci la tua password"
      });
      setShowAlert(true);
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const response = await sendLogin(formData());
    
    if (response.success) {
      window.location.href = '/user_home';
    } else {
      setAlertConfig({
        icon: "fa-exclamation-circle",
        message: response.message,
        subMessage: response.subMessage
      });
      setShowAlert(true);
    }
  };

  return (
    <>
      <header>
        <div className="side left" onClick={() => window.location.href = '/'}>
          <img src="assets/icons/arrow.svg" className="icon" />
        </div>
        <div className="center">
          <img src="assets/icons/carrot.svg" className="icon" />
        </div>
        <div className="side right"></div>
      </header>

      <div className="login-box">
        <span className="title">Accedi</span>
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData().email}
          onChange={handleInputChange}
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={formData().password}
          onChange={handleInputChange}
        />
        <A href="../register" className="suggestion">
          Non hai un account? Registrati
        </A>
     
        {/* <button className="btn btn-green" onClick={handleSubmit}>
          Continua
        </button> */}

        <button className="btn btn-green" onClick={() => window.location.href = '/user_home'}>
          Continua
        </button>
       
      </div>

      <Show when={showAlert()}>
        <AlertBox
          icon={alertConfig().icon}
          message={alertConfig().message}
          subMessage={alertConfig().subMessage}
          onClose={() => setShowAlert(false)}
        />
      </Show>
    </>
  );
}
