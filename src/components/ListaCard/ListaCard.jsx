import { createSignal } from 'solid-js';
import './ListaCard.css';
import { deleteListAPI } from './api';

export default function ListaCard(props) {
  const [expanded, setExpanded] = createSignal(false); // Stato per gestire l'espansione della card

  
  return (
    <>
      <div
        class="card"
        style={{ height: expanded() ? 'fit-content' : '70px' }} // Altezza dinamica in base allo stato
      >
        <div class="card-top" onClick={() => setExpanded(!expanded())}> {/* Rende cliccabile card-top */}
          <div class="icon">
            <img src={`/assets/avatars/${props.avatar || 'default'}.webp`} alt="Avatar" />
          </div>
          <div class="text">
            <div class="name">{props.nome}</div>
            <span class="distance">{props.durata} - {props.persone}</span>
          </div>
          <div class="buttons">
            <button>
              <i class={`fa-solid fa-angle-down ${expanded() ? 'rotate-180' : ''}`}></i> {/* Icona ruotata */}
            </button>
          </div>
        </div>

        {expanded() && ( // Mostra card-info solo se expanded è true
          <div class="card-info">
            <span class="line"><b>Nome:</b> {props.nome}</span>
            <span class="line"><b>Durata:</b> {props.durata}</span>
            <span class="line"><b>Persone:</b> {props.persone}</span>
            <span class="line"><b>Preferenze: </b> {props.preferenze || 'Nessuna'}</span>
            <button class="open-button" onClick={() => window.location.href = `/lista_specifica/${props.id}`}>
              <i class="fa-solid fa-up-right-from-square"></i> Apri
            </button>
            <button class="delete-button" onClick={async () => await deleteListAPI(props.id)}>
              <i class="fa-solid fa-trash"></i> Elimina
            </button>
          </div>
        )}
      </div>
    </>
  );
}