import { Title } from "@solidjs/meta";
import { createSignal, Show, onMount } from "solid-js";
import AlertBox from "../../components/AlertBox/AlertBox";
import './main.css'
import getMembers from "../people/api";
import { generateListAPI } from "./api";


export default function NewList() {
    const [showPopup, setShowPopup] = createSignal(false);
    const [selectedPeople, setSelectedPeople] = createSignal([]);
    const [result, setResult] = createSignal({
        nome: "",
        durata: "",
        persone: [],
        altro: "",
        icona: ""
    });
    const [isLoading, setIsLoading] = createSignal(false);
    const [showAlert, setShowAlert] = createSignal(false);
    const [alertConfig, setAlertConfig] = createSignal({
        icon: "",
        message: "",
        subMessage: ""
    });
    const [listGenerated, setListGenerated] = createSignal(false);
    const [generatedListId, setGeneratedListId] = createSignal(null);

    const [people, setPeople] = createSignal([]);

    onMount(async () => {
        const members = await getMembers();
        console.log(members);
        setPeople(members);
    });
    

   


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setResult({ ...result(), [name]: value });
    };

    const handlePersonSelect = (person) => {
        const isSelected = selectedPeople().includes(person.id);
        if (isSelected) {
            setSelectedPeople(selectedPeople().filter(id => id !== person.id));
        } else {
            setSelectedPeople([...selectedPeople(), person.id]);
        }
    };

    const showValidationAlert = (icon, message, subMessage) => {
        setAlertConfig({ icon, message, subMessage });
        setShowAlert(true);
    };

    const validateInputs = () => {
        const { nome, durata } = result();
        
        // Validazione nome lista
        if (!nome) {
            showValidationAlert(
            "fa-exclamation-circle",
            "Nome lista mancante",
            "Inserisci un nome per la lista"
            );
            return false;
        }

        if (nome.length > 25) {
            showValidationAlert(
            "fa-exclamation-circle",
            "Nome lista troppo lungo",
            "Il nome della lista non può superare i 25 caratteri"
            );
            return false;
        }

        if (!/^[a-zA-Z][a-zA-Z0-9 ]*$/.test(nome)) {
            showValidationAlert(
            "fa-exclamation-circle",
            "Nome lista non valido",
            "Il nome deve iniziare con una lettera e contenere solo lettere, numeri e spazi"
            );
            return false;
        }

        // Validazione durata
        if (!durata) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Durata mancante",
                "Inserisci la durata della lista in giorni"
            );
            return false;
        }

        const duration = parseInt(durata);
        if (isNaN(duration)) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Durata non valida",
                "La durata deve essere un numero"
            );
            return false;
        }

        if (duration < 1 || duration > 30) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Durata non valida",
                "La durata deve essere un numero tra 0 e 30 giorni"
            );
            return false;
        }

        // Validazione persone
        if (selectedPeople().length === 0) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Nessuna persona selezionata",
                "Seleziona almeno una persona prima di generare la lista"
            );
            return false;
        }

        return true;
    };

    const handleSave = () => {
        setResult({ ...result(), persone: selectedPeople() });
        
        setShowPopup(false);
    };

    const handleGenerateList = async () => {
        if (!validateInputs()) {
            return;
        }

        setIsLoading(true);
        try {
            const response = await generateListAPI(result());
            setGeneratedListId(response.id);
            setListGenerated(true);
        } catch (error) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Errore nella generazione",
                "Si è verificato un errore durante la generazione della lista"
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handlePopupClick = (e) => {
        if (e.target.className === 'popup') {
            setShowPopup(false);
        }
    };

    return (
        <>
            <header>
                <div className="side left">
                    <a href="../user_home">
                        <img src="assets/icons/arrow.svg" className="icon" />
                    </a>
                </div>
                <div className="center">
                    <img src="assets/icons/carrot.svg" className="icon" />
                </div>
                <div className="side right"></div>
            </header>

            <main>
                <div className="new-list-box">
                    <span className="title">Nuova Lista</span>
                    <input type="text" name="nome" placeholder="Nome della lista della spesa" onChange={handleInputChange} />
                    <input type="text" name="durata" placeholder="Durata della spesa (in giorni)" onChange={handleInputChange} />
                    <textarea name="altro" placeholder="Altro... (aggiungi preferenze, allergie, etc.)" onChange={handleInputChange}></textarea>
                    <button className="btn btn-green" onClick={() => setShowPopup(true)}>
                        <i className="fa-solid fa-users"></i> Seleziona Persone
                    </button>
                    <button className="btn btn-green save-button" onClick={handleGenerateList}>
                        <i className="fa-solid fa-rotate"></i> GENERA LISTA
                    </button>
                </div>

                {showPopup() && (
                    <div className="popup" onClick={handlePopupClick}>
                        <div className="popup-content">
                            <span className="title">Seleziona Persone</span>
                            {people().map(person => (
                                <div className="person-card" key={person.id}>
                                    <input
                                        type="checkbox"
                                        checked={selectedPeople().includes(person.id)}
                                        onChange={() => handlePersonSelect(person)}
                                    />
                                    <span>{person.nickname} - {person.eta} anni <br /> {person.tipo_dieta}</span>
                                    <img src={"assets/avatars/"+ person.icona +".webp"} class="avatar" />
                                    </div>
                            ))}
                            <button className="btn btn-green" onClick={handleSave}>
                                Conferma
                            </button>
                        </div>
                    </div>
                )}

                {isLoading() && (
                    <div className="loading-overlay">
                        <i className="fa-solid fa-rotate fa-spin"></i>
                    </div>
                )}

                {listGenerated() && (
                    <div className="success-message">
                        <span>LISTA GENERATA!</span>
                        <a href={`/lista_specifica/${generatedListId()}`} className="btn btn-green">
                            CLICCA QUI
                        </a>
                    </div>
                )}

                <Show when={showAlert()}>
                    <AlertBox
                        icon={alertConfig().icon}
                        message={alertConfig().message}
                        subMessage={alertConfig().subMessage}
                        onClose={() => setShowAlert(false)}
                    />
                </Show>
            </main>
        </>
    );
}