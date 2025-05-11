import { Title } from "@solidjs/meta";
import { createEffect } from "solid-js";
import './main.css';

export default function Home() {
  createEffect(() => {
    // Make POST request when component mounts
    fetch("https://api.ecotote.it/api/v1/auth/logout", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).catch(err => console.error("Error logging access:", err));
  });

  return (
    <>
      <header>
        <img src="assets/images/corn.svg" className="corn" />
        <img src="assets/images/home_logo.png" className="logo" />
      </header>

      <div className="content">
        <span className="title">Benvenuto in EcoTote</span>
        <a href="javascript:void(0)" className="btn btn-green" onClick={() => window.location.href = '/register'}>
          Registrati
        </a>
        <a href="javascript:void(0)" className="btn btn-green" onClick={() => window.location.href = '/login'}>
          Accedi
        </a>

        {/* <span className="suggestion">Accedi con . . .</span>

        <a href="javascript:void(0)" className="btn btn-white">
          <img src="../assets/icons/google.svg" className="btn-icon" />
          Google
        </a> */}
      </div>
    </>
  );
}
