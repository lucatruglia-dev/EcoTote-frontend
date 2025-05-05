import { Title } from "@solidjs/meta";
import { createSignal, Show } from "solid-js";
import AlertBox from "../../components/AlertBox/AlertBox";
import './main.css'

export default function NewList() {
    const [showPopup, setShowPopup] = createSignal(false);
    const [selectedPeople, setSelectedPeople] = createSignal([]);
    const [result, setResult] = createSignal({
        title: "",
        description: "",
        people: []
    });
    const [isLoading, setIsLoading] = createSignal(false);
    const [showAlert, setShowAlert] = createSignal(false);
    const [alertConfig, setAlertConfig] = createSignal({
        icon: "",
        message: "",
        subMessage: ""
    });

    const people = [
        { id: 1, name: "Persona 1" },
        { id: 2, name: "Persona 2" },
        { id: 3, name: "Persona 3" }
    ];

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
        const { title, description } = result();
        
        // Validazione nome lista
        if (!title) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Nome lista mancante",
                "Inserisci un nome per la lista"
            );
            return false;
        }

        if (title.length > 11) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Nome lista troppo lungo",
                "Il nome della lista non può superare gli 11 caratteri"
            );
            return false;
        }

        if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(title)) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Nome lista non valido",
                "Il nome deve iniziare con una lettera e contenere solo lettere e numeri"
            );
            return false;
        }

        // Validazione durata
        if (!description) {
            showValidationAlert(
                "fa-exclamation-circle",
                "Durata mancante",
                "Inserisci la durata della lista in giorni"
            );
            return false;
        }

        const duration = parseInt(description);
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
        setResult({ ...result(), people: selectedPeople() });
        setShowPopup(false);
    };

    const handleGenerateList = () => {
        if (!validateInputs()) {
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simula un caricamento di 2 secondi
    };

    const handlePopupClick = (e) => {
        if (e.target.className === 'popup') {
            setShowPopup(false);
        }
    };

    return (
        <>
            <header>
                <div className="side left" onClick={() => window.location.href = '/list'}>
                    <img src="assets/icons/arrow.svg" className="icon" />
                </div>
                <div className="center">
                    <img src="assets/icons/carrot.svg" className="icon" />
                </div>
                <div className="side right"></div>
            </header>

            <main>
                <div className="new-list-box">
                    <span className="title">Nuova Lista</span>
                    <input type="text" name="title" placeholder="Nome della lista della spesa" onChange={handleInputChange} />
                    <input type="text" name="description" placeholder="Durata della spesa (in giorni)" onChange={handleInputChange} />
                    <textarea name="other" placeholder="Altro... (aggiungi preferenze, allergie, etc.)" onChange={handleInputChange}></textarea>
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
                            {people.map(person => (
                                <div className="person-card" key={person.id}>
                                    <input
                                        type="checkbox"
                                        checked={selectedPeople().includes(person.id)}
                                        onChange={() => handlePersonSelect(person)}
                                    />
                                    <span>{person.name}</span>
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