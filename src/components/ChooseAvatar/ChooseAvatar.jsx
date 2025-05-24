import { createSignal } from 'solid-js';
import './ChooseAvatar.css';

export default function ChooseAvatar({ onClose, onSelect }) {
    const avatarAmount = 10;
    const [selectedAvatar, setSelectedAvatar] = createSignal(null);

    const handleAvatarClick = (index) => {
        setSelectedAvatar(index + 1); // Salva l'ID dell'avatar (1-based index)
    };

    const handleSaveClick = () => {
        if (selectedAvatar() !== null) {
            onSelect(selectedAvatar()); // Passa l'ID dell'avatar selezionato al genitore
            onClose(); // Chiude il componente
        }
    };

    return (
        <div className="choose-avatar-container">
            <div className="choose-avatar">
                <span className="title">Scegli un avatar</span>
                <div className="avatars">
                    {Array.from({ length: avatarAmount }, (_, i) => (
                        <img
                            src={`../assets/avatars/${i + 1}.webp`}
                            key={i}
                            onClick={() => handleAvatarClick(i)}
                            style={{
                                backgroundColor: selectedAvatar() === i + 1 ? 'black' : 'transparent',
                                opacity: selectedAvatar() === i + 1 ? 1 : 0.75,
                                boxShadow: selectedAvatar() === i + 1 ? '0px 0px 0px 2px inset black' : 'none',
                            }}
                        />
                    ))}
                </div>
                <button className="save-button" onClick={handleSaveClick}>
                    <i className="fa-solid fa-floppy-disk"></i> Salva
                </button>
            </div>
        </div>
    );
}