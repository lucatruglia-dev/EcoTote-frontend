import { Title } from "@solidjs/meta";
import ListaCard from "~/components/ListaCard/ListaCard";
import './main.css';
import { createSignal, onMount } from "solid-js";
import getListAPI from "./api";

export default function List() {
  /*const liste = [
    {nome: 'Lista 1', durata: 22, persone: ["Giulio", "Mario", "Pio"], preferenze: "Blablabla"},
    {nome: 'Lista 1', durata: 22, persone: ["Giulio", "Mario", "Pio"], preferenze: "Blablabla"},
    {nome: 'Lista 1', durata: 22, persone: ["Giulio", "Mario", "Pio"], preferenze: "Blablabla"},
    {nome: 'Lista 1', durata: 22, persone: ["Giulio", "Mario", "Pio"], preferenze: "Blablablas"},
  ];*/

  const [liste, setListe] = createSignal([]);

  onMount(async () => {
    const result = await getListAPI();
    setListe(result);
    console.log(result);
  });

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
          {liste().map((lista) => (
            <ListaCard
              nome={lista.nome}
              durata={lista.durata + " giorni"} 
              persone={lista.persone + " persone"}
              preferenze={lista.categoria}
              id={lista.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}