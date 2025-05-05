import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import BigCard from "~/components/BigCard/BigCard";

import './main.css'

export default function Home() {

  const auto_generated_list = [
    {title: "Lista 1", subtitle: "Lista già pronta", name: "Spesa BBQ", description: "Spesa per la tua grigliata con gli amici", tags: "carne,verdure,salse", color: "red"},
    {title: "Lista 2", subtitle: "Lista già pronta", name: "Spesa Vegana", description: "Spesa economica e super iper vegana!!! ", tags: "verdura,vegana,salutare", color: "green"},
  ]

  return (
    <main>
      <header>
        <span className="title">Mangia meglio, spreca meno</span>
        <div className="icon">
          <img src="../assets/icons/carrot.svg" alt="" />
        </div>
      </header>

      <div className="list">
        <div className="list-filters">
          <span className="title">Liste già pronte</span>
          <div className="cards-container">
            <div className="cards-slider">
              <button className="card sel">All</button>
              <button className="card">Carne</button>
              <button className="card">Vegana</button>
              <button className="card">Vegana</button>
              <button className="card">Vegana</button>
              <button className="card">Vegana</button>
              <button className="card">Vegana</button>
            </div>
          </div>
        </div>

        

        <div className="big-cards-container">
          <div className="big-cards-slider">

              {auto_generated_list.map((big_card, index) => (
                <BigCard
                title={big_card.title}
                subtitle={big_card.subtitle}
                name={big_card.name}
                description={big_card.description}
                tags={big_card.tags}
                color={big_card.color}
                ></BigCard>
              ))}
              

            {/* <div className="big-card">
              <div className="top">
                <div className="left">
                  <div className="icon"></div>
                </div>
                <div className="right">
                  <span className="title">Lista 1</span>
                  <span className="subtitle">Lista già pronta</span>
                </div>
              </div>
              <div className="content">
                <span className="name">Spesa BBQ</span>
                <span className="description">Spesa per la tua grigliata con gli amici</span>
              </div>
              <div className="tags">
                <a href="#" className="tag">Carne</a>
                <a href="#" className="tag">Verdure</a>
                <a href="#" className="tag">Salse</a>
              </div>
            </div>

            <div className="big-card">
              <div className="top">
                <div className="left">
                  <div className="icon"></div>
                </div>
                <div className="right">
                  <span className="title">Lista 1</span>
                  <span className="subtitle">Lista già pronta</span>
                </div>
              </div>
              <div className="content">
                <span className="name">Spesa BBQ</span>
                <span className="description">Spesa per la tua grigliata con gli amici</span>
              </div>
              <div className="tags">
                <a href="#" className="tag">Carne</a>
                <a href="#" className="tag">Verdure</a>
                <a href="#" className="tag">Salse</a>
              </div>
            </div> */}
          </div>
        </div>

        <div className="supermarket-container">
          <div className="title">Supermercati piu vicini</div>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img
                  src="https://play-lh.googleusercontent.com/qhCk-KOnqgRbly6nRGwlRC9NP1g83zPKR2s5rX_jtRIjfMHh-0AkQoAMmb26hhAavA"
                  alt=""
                />
              </div>
              <div className="text">
                <div className="name">Esselunga</div>
                <span className="distance">500m</span>
              </div>
              <div className="buttons">
                <A href="../"><i className="fa-solid fa-link"></i></A>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lidl_logo.png/960px-Lidl_logo.png"
                  alt=""
                />
              </div>
              <div className="text">
                <div className="name">LIDL</div>
                <span className="distance">2km</span>
              </div>
              <div className="buttons">
                <A href="../"><i className="fa-solid fa-link"></i></A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
