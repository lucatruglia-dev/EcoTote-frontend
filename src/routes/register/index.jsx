import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import AlertBox from "../../components/AlertBox/AlertBox";
import nazioniConBandiere from "./nazioni";
import './main.css'

export default function Register() {
  const [formData, setFormData] = createSignal({
    nome: "",
    cognome: "",
    nazione: "",
    dataNascita: "",
    email: "",
    password: "",
    confermaPassword: "",
    tos: false
  });

  const [showAlert, setShowAlert] = createSignal(false);
  const [alertConfig, setAlertConfig] = createSignal({
    icon: "",
    message: "",
    subMessage: ""
  });

  const showValidationAlert = (icon, message, subMessage) => {
    setAlertConfig({ icon, message, subMessage });
    setShowAlert(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData(),
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const data = formData();

    // Validazione nome
    if (!data.nome) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Nome mancante",
        "Inserisci il tuo nome"
      );
      return false;
    }

    if (!/^[a-zA-Z\s]{2,}$/.test(data.nome)) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Nome non valido",
        "Il nome deve contenere solo lettere e spazi"
      );
      return false;
    }

    // Validazione cognome
    if (!data.cognome) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Cognome mancante",
        "Inserisci il tuo cognome"
      );
      return false;
    }

    if (!/^[a-zA-Z\s]{2,}$/.test(data.cognome)) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Cognome non valido",
        "Il cognome deve contenere solo lettere e spazi"
      );
      return false;
    }

    // Validazione nazione
    if (!data.nazione) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Nazione mancante",
        "Seleziona la tua nazione"
      );
      return false;
    }

    // Validazione data di nascita
    if (!data.dataNascita) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Data di nascita mancante",
        "Inserisci la tua data di nascita"
      );
      return false;
    }

    // Validazione email
    if (!data.email) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Email mancante",
        "Inserisci la tua email"
      );
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Email non valida",
        "Inserisci un indirizzo email valido"
      );
      return false;
    }

    // Validazione password
    if (!data.password) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Password mancante",
        "Inserisci una password"
      );
      return false;
    }

    if (data.password.length < 8) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Password troppo corta",
        "La password deve essere di almeno 8 caratteri"
      );
      return false;
    }

    // Validazione conferma password
    if (data.password !== data.confermaPassword) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Password non corrispondenti",
        "Le password non coincidono"
      );
      return false;
    }

    // Validazione termini e condizioni
    if (!data.tos) {
      showValidationAlert(
        "fa-exclamation-circle",
        "Termini non accettati",
        "Devi accettare i termini e le condizioni per continuare"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const data = formData();
    const userData = {
      nome: data.nome,
      cognome: data.cognome,
      nazione: data.nazione,
      dataNascita: data.dataNascita,
      email: data.email,
      password: data.password
    };

    console.log("Dati utente:", userData);
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
        <span className="title">Register</span>
        <input 
          type="text" 
          name="nome"
          placeholder="Nome" 
          value={formData().nome}
          onChange={handleInputChange}
        />
        <input 
          type="text" 
          name="cognome"
          placeholder="Cognome" 
          value={formData().cognome}
          onChange={handleInputChange}
        />
        <select 
          name="nazione"
          value={formData().nazione}
          onChange={handleInputChange}
        >
          <option value="">Seleziona nazione</option>
          {nazioniConBandiere.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <div>
          <span>Data di nascita</span>
          <input 
            type="date" 
            name="dataNascita"
            style="width: 100%;" 
            value={formData().dataNascita}
            onChange={handleInputChange}
          />
        </div>
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
        <input 
          type="password" 
          name="confermaPassword"
          placeholder="Conferma password" 
          value={formData().confermaPassword}
          onChange={handleInputChange}
        />
        <div className="tos-check">
          <input 
            type="checkbox" 
            name="tos" 
            id="tos" 
            checked={formData().tos}
            onChange={handleInputChange}
          />
          <label htmlFor="tos">Accetto i <A href="#">termini e condizioni</A></label>
        </div>
        <button className="btn btn-green" onClick={handleSubmit}>
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
