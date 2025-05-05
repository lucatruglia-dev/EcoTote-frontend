import { createSignal } from 'solid-js';
import './PersonaCard.css';
import AddPersonaPopup from '../AddPersonaPopup/AddPersonaPopup'; // Importa il popup

export default function PersonaCard({ persona, index, toggleExpanded, onEdit }) {
  const [showEditPopup, setShowEditPopup] = createSignal(false);

  const handleEdit = (updatedPersona) => {
    onEdit(index, updatedPersona);
    setShowEditPopup(false);
  };

  return (
    <>
      <div
        class="card"
        style={{ height: persona.expanded ? 'fit-content' : '70px' }}
        key={index}
      >
        <div class="card-top" onClick={() => toggleExpanded(index)}>
          <div class="icon">
            <img src={`/assets/avatars/${persona.avatar}.webp`} alt="" />
          </div>
          <div class="text">
            <div class="name">{`${persona.nome} ${persona.cognome}`}</div>
            <span class="distance">{`${persona.eta} anni - ${persona.dieta}`}</span>
          </div>
          <div class="buttons">
            <button>
              <i class={`fa-solid fa-angle-down ${persona.expanded ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
        </div>

        {persona.expanded && (
          <div class="card-info">
            <span class="line"><b>Nickname:</b> {persona.nickname}</span>
            <span class="line"><b>Nome:</b> {persona.nome}</span>
            <span class="line"><b>Cognome:</b> {persona.cognome}</span>
            <span class="line"><b>Età: </b> {persona.eta}</span>
            <span class="line"><b>Peso: </b> {persona.peso}</span>
            <span class="line"><b>Altezza: </b> {persona.altezza}</span>
            <span class="line"><b>Sesso: </b> {persona.sesso}</span>
            <span class="line"><b>Dieta: </b> {persona.dieta}</span>
            <span class="line"><b>Preferenze: </b> {persona.altro}</span>
            <button class="edit-button" onClick={() => {
  console.log("Edit button clicked");
  setShowEditPopup(true);
}}>
  <i class="fa-solid fa-pen-to-square"></i> Modifica
</button>
          </div>
        )}
      </div>

      <AddPersonaPopup
        show={showEditPopup}
        setShow={setShowEditPopup}
        onAdd={handleEdit}
        initialData={persona} // Passa i dati iniziali
      />
    </>
  );
}