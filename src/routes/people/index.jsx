// People.jsx
import { createSignal, onMount } from 'solid-js';
import PersonaCard from '../../components/PersonaCard/PersonaCard'; // Importa il componente PersonaCard
import AddPersonaPopup from '../../components/AddPersonaPopup/AddPersonaPopup'; // Importa il componente AddPersonaPopup
import ChooseAvatar from '../../components/ChooseAvatar/ChooseAvatar';
import './main.css';
import getMembers from './api';


export default function People() {
  const [personeList, setPersoneList] = createSignal([
    {
      nickname: "marcolino",
      avatar: '2',
      nome: 'Marco',
      cognome: 'Rossi',
      eta: 25,
      peso: '50kg',
      altezza: '200cm',
      sesso: 'Maschio',
      dieta: 'Onnivora',
      altro: 'Blablablablablablablabla',
      expanded: false,
    },
  ]);

  onMount(async () => {
    const members = await getMembers();
    console.log(members);
  });

  const [showPopup, setShowPopup] = createSignal(false);
  const [hasChanges, setHasChanges] = createSignal(false);

  const toggleExpanded = (index) => {
    setPersoneList(personeList().map((p, i) =>
      i === index ? { ...p, expanded: !p.expanded } : p
    ));
  };

  const handleAddPersona = (nuovaPersona) => {
    setPersoneList([...personeList(), nuovaPersona]);
    setHasChanges(true); // Imposta hasChanges a true
  };

  const handleEditPersona = (index, updatedPersona) => {
    setPersoneList(personeList().map((p, i) => (i === index ? updatedPersona : p)));
    setHasChanges(true); // Imposta hasChanges a true
  };

  const applyChanges = () => {
    console.log("Dati attuali:", personeList());
    setHasChanges(false); // Resetta lo stato delle modifiche
  };

  return (
    <main>
      <header>
        <span class="title">Da chi è composto il gruppo?</span>
      </header>

      <div class="list">
        <div class="cards">
          {personeList().map((p, index) => (
            <PersonaCard
              key={index}
              persona={p}
              index={index}
              toggleExpanded={toggleExpanded}
              onEdit={handleEditPersona} // Passa la funzione handleEditPersona
            />
          ))}
          <a href="javascript:void(0)" class="add-card" onClick={() => setShowPopup(true)}>
            <i class="fa-solid fa-plus"></i>
            <span>Aggiungi membro</span>
          </a>
        </div>
      </div>

      <AddPersonaPopup show={showPopup} setShow={setShowPopup} onAdd={handleAddPersona} />

      
      <Show when={hasChanges()}>
        <button class="apply-button" onClick={applyChanges}>
        <i class="fa-solid fa-floppy-disk"></i> Applica modifiche
        </button>
      </Show>
    </main>
  );
}
