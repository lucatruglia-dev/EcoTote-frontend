import { Title } from "@solidjs/meta";
import ListaCard from "~/components/ListaCard/ListaCard";
import './main.css';

export default function List() {
  const liste = [
    {nome: 'Lista 1', durata: 22, persone: ["Giulio", "Mario", "Pio"], preferenze: "Blablabla"},
    {nome: 'Lista 1', durata: 22, persone: ["Giulio", "Mario", "Pio"], preferenze: "Blablabla"},
    {nome: 'Lista 1', durata: 22, persone: ["Giulio", "Mario", "Pio"], preferenze: "Blablabla"},
    {nome: 'Lista 1', durata: 22, persone: ["Giulio", "Mario", "Pio"], preferenze: "Blablablas"},
  ];

  const handleEdit = (nickname) => {
    console.log("Edit button clicked for", nickname);
  };

  return (
    <main>
      <header>
        <span class="title">Le tue liste:</span>
      </header>

      <div class="list">
        <div class="cards">
          {liste.map((lista) => (
            <ListaCard
              nome={lista.nome}
              durata={lista.durata}
              persone={lista.persone}
              preferenze={lista.preferenze}
            />
          ))}
        </div>
      </div>
    </main>
  );
}