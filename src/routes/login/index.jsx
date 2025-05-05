import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import './main.css'

export default function Login() {
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
      <span className="title">Login</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <A href="#" className="suggestion">
        Password dimenticata?
      </A>
      <A href="../user_home" className="btn btn-green">
        Continua
      </A>
    </div>
    </>
  );
}
