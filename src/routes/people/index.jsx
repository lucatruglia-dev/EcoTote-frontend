// People.jsx
import { createSignal, onMount, Show } from 'solid-js';
import PersonaCard from '../../components/PersonaCard/PersonaCard'; // Importa il componente PersonaCard
import AddPersonaPopup from '../../components/AddPersonaPopup/AddPersonaPopup'; // Importa il componente AddPersonaPopup
import ChooseAvatar from '../../components/ChooseAvatar/ChooseAvatar';
import AlertBox from '../../components/AlertBox/AlertBox';
import './main.css';
import getMembers, { addMembersAPI, updateMembersAPI } from './api';


export default function People() {
  const [personeList, setPersoneList] = createSignal([]);
  const [modifiedUsers, setModifiedUsers] = createSignal([]);
  const [addedUsers, setAddedUsers] = createSignal([]);
  const [showAlert, setShowAlert] = createSignal(false);
  const [alertConfig, setAlertConfig] = createSignal({
    icon: "",
    message: "",
    subMessage: ""
  });

  onMount(async () => {
    const members = await getMembers();
    let result =  []
    console.log(members);
    members.forEach(member => {
      result.push({
        id: member.id,
        nickname: member.nickname,
        avatar: member.icona,
        nome: member.nome,
        cognome: member.cognome,
        eta: member.eta,
        peso: member.peso ,
        altezza: member.altezza,
        sesso: member.sesso,
        dieta: String(member.tipo_dieta).toLowerCase(),
        altro: member.altro,
        expanded: false,
      })
    });
    setPersoneList(result);
  });

  const [showPopup, setShowPopup] = createSignal(false);
  const [hasChanges, setHasChanges] = createSignal(false);

  const toggleExpanded = (index) => {
    setPersoneList(personeList().map((p, i) =>
      i === index ? { ...p, expanded: !p.expanded } : p
    ));
  };

  const validateNewMember = (member) => {
    // Validazione nome e cognome (solo lettere e spazi, minimo 2 caratteri)
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
    if (!nameRegex.test(member.nome)) {
      return {
        valid: false,
        message: "Nome non valido",
        subMessage: "Il nome deve contenere solo lettere e avere almeno 2 caratteri"
      };
    }
    if (!nameRegex.test(member.cognome)) {
      return {
        valid: false,
        message: "Cognome non valido",
        subMessage: "Il cognome deve contenere solo lettere e avere almeno 2 caratteri"
      };
    }

    // Validazione nickname (almeno 3 caratteri, può contenere lettere, numeri e underscore)
    const nicknameRegex = /^[a-zA-Z0-9_]{3,}$/;
    if (!nicknameRegex.test(member.nickname)) {
      return {
        valid: false,
        message: "Nickname non valido",
        subMessage: "Il nickname deve avere almeno 3 caratteri e può contenere solo lettere, numeri e underscore"
      };
    }

    // Validazione età (tra 1 e 120)
    if (!member.eta || member.eta < 1 || member.eta > 120) {
      return {
        valid: false,
        message: "Età non valida",
        subMessage: "L'età deve essere compresa tra 1 e 120 anni"
      };
    }

    // Validazione peso (tra 1 e 300 kg)
    if (!member.peso || member.peso < 1 || member.peso > 300) {
      return {
        valid: false,
        message: "Peso non valido",
        subMessage: "Il peso deve essere compreso tra 1 e 300 kg"
      };
    }

    // Validazione altezza (tra 30 e 250 cm)
    if (!member.altezza || member.altezza < 30 || member.altezza > 250) {
      return {
        valid: false,
        message: "Altezza non valida",
        subMessage: "L'altezza deve essere compresa tra 30 e 250 cm"
      };
    }

    // Validazione sesso
    if (!member.sesso || !['M', 'F'].includes(member.sesso)) {
      return {
        valid: false,
        message: "Sesso non valido",
        subMessage: "Il sesso deve essere 'M' o 'F'"
      };
    }

    // Validazione dieta
    if (!member.dieta || !['onnivoro', 'vegetariano', 'vegano', 'altro'].includes(member.dieta.toLowerCase())) {
      return {
        valid: false,
        message: "Dieta non valida",
        subMessage: "Seleziona un tipo di dieta valido"
      };
    }

    // Validazione avatar
    if (!member.avatar) {
      return {
        valid: false,
        message: "Avatar mancante",
        subMessage: "Seleziona un avatar per il membro"
      };
    }

    return { valid: true };
  };

  const showValidationAlert = (icon, message, subMessage) => {
    setAlertConfig({ icon, message, subMessage });
    setShowAlert(true);
  };

  const handleAddPersona = (nuovaPersona) => {
    const validation = validateNewMember(nuovaPersona);
    if (!validation.valid) {
      showValidationAlert(
        "fa-exclamation-circle",
        validation.message,
        validation.subMessage
      );
      return false;
    }

    // Add expanded property only for the UI list
    const personaWithExpanded = { ...nuovaPersona, expanded: false };
    setPersoneList([...personeList(), personaWithExpanded]);
    
    // Don't include expanded in the addedUsers array
    const { expanded, ...personaForAPI } = nuovaPersona;
    setAddedUsers([...addedUsers(), personaForAPI]);
    setHasChanges(true);
    return true;
  };

  const handleEditPersona = (index, updatedPersona) => {
    const originalPersona = personeList()[index];
    // Keep expanded state from original persona
    const updatedPersonaWithExpanded = {
      ...updatedPersona,
      expanded: originalPersona.expanded
    };
    
    setPersoneList(personeList().map((p, i) => (i === index ? updatedPersonaWithExpanded : p)));
    
    // Don't include expanded in the arrays
    const { expanded, ...personaForAPI } = updatedPersona;
    const updatedPersonaWithId = {
      ...personaForAPI,
      id: originalPersona.id
    };

    // Check if this user is in addedUsers
    const isNewUser = addedUsers().some(u => u.nickname === originalPersona.nickname);
    
    if (isNewUser) {
      // If it's a new user, update it in addedUsers instead of modifiedUsers
      setAddedUsers(addedUsers().map(u => 
        u.nickname === originalPersona.nickname ? updatedPersonaWithId : u
      ));
    } else {
      // If it's an existing user, handle it in modifiedUsers
      const existingModifiedIndex = modifiedUsers().findIndex(u => u.id === originalPersona.id);
      if (existingModifiedIndex === -1) {
        setModifiedUsers([...modifiedUsers(), updatedPersonaWithId]);
      } else {
        setModifiedUsers(modifiedUsers().map((u, i) => i === existingModifiedIndex ? updatedPersonaWithId : u));
      }
    }
    
    setHasChanges(true);
  };

  const applyChanges = async () => {
    try {
      if (modifiedUsers().length > 0) {
        console.log("Utenti modificati:", modifiedUsers());
        await updateMembersAPI(modifiedUsers());
      }

      if (addedUsers().length > 0) {
        console.log("Utenti aggiunti:", addedUsers());
        await addMembersAPI(addedUsers());
      }

      setHasChanges(false);
      setModifiedUsers([]);
      setAddedUsers([]);

    } catch (error) {
      console.error("Errore durante il salvataggio:", error);
      showValidationAlert(
        "fa-exclamation-circle",
        "Errore durante il salvataggio",
        "Si è verificato un errore durante il salvataggio delle modifiche. Riprova più tardi."
      );
    }
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
              onEdit={handleEditPersona}
            />
          ))}
          <a href="javascript:void(0)" class="add-card" onClick={() => setShowPopup(true)}>
            <i class="fa-solid fa-plus"></i>
            <span>Aggiungi membro</span>
          </a>
        </div>
      </div>

      <AddPersonaPopup 
        show={showPopup} 
        setShow={setShowPopup} 
        onAdd={handleAddPersona} 
      />

      
      <Show when={hasChanges()}>
        <button class="apply-button" onClick={applyChanges}>
        <i class="fa-solid fa-floppy-disk"></i> Applica modifiche
        </button>
      </Show>

      <Show when={showAlert()}>
        <AlertBox
          icon={alertConfig().icon}
          message={alertConfig().message}
          subMessage={alertConfig().subMessage}
          onClose={() => setShowAlert(false)}
        />
      </Show>
    </main>
  );
}
