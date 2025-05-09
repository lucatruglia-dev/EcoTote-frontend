import { createSignal, onMount, Show } from 'solid-js';
import './AddPersonaPopup.css';
import ChooseAvatar from '../ChooseAvatar/ChooseAvatar';

export default function AddPersonaPopup(props) {
  const [nome, setNome] = createSignal('');
  const [cognome, setCognome] = createSignal('');
  const [nickname, setNickname] = createSignal('');
  const [eta, setEta] = createSignal('');
  const [peso, setPeso] = createSignal('');
  const [altezza, setAltezza] = createSignal('');
  const [sesso, setSesso] = createSignal('M');
  const [dieta, setDieta] = createSignal('null');
  const [altro, setAltro] = createSignal('');
  const [avatar, setAvatar] = createSignal('default');
  const [showAvatarPicker, setShowAvatarPicker] = createSignal(false);

  const resetForm = () => {
    setNome('');
    setCognome('');
    setNickname('');
    setEta('');
    setPeso('');
    setAltezza('');
    setSesso('M');
    setDieta('null');
    setAltro('');
    setAvatar('default');
  };

  onMount(() => {
    if (props.initialData) {
      const { nome, cognome, nickname, eta, peso, altezza, sesso, dieta, altro, avatar } = props.initialData;
      setNome(nome || '');
      setCognome(cognome || '');
      setNickname(nickname || '');
      setEta(eta || '');
      setPeso(peso || '');
      setAltezza(altezza || '');
      setSesso(sesso || 'M');
      setDieta(dieta || 'null');
      setAltro(altro || '');
      setAvatar(avatar || 'default');
    } else {
      resetForm();
    }
  });

  // Reset form when popup is opened for a new user
  const handleShowChange = (newShow) => {
    if (newShow && !props.initialData) {
      resetForm();
    }
    props.setShow(newShow);
  };

  function salva() {
    const nuovaPersona = {
      nome: nome(),
      cognome: cognome(),
      nickname: nickname(),
      eta: eta(),
      peso: peso(),
      altezza: altezza(),
      sesso: sesso(),
      dieta: dieta(),
      altro: altro(),
      avatar: avatar(),
      expanded: false,
    };
    
    const success = props.onAdd(nuovaPersona);
    if (success) {
      resetForm();
      handleShowChange(false);
    }
  }

  return (
    <Show when={props.show()}>
      <div class="popup-container">
        <div class="popup">
          <span class="title">{props.initialData ? 'Modifica membro' : 'Aggiungi membro'}</span>

          <div class="line double">
            <input type="text" placeholder="Nome" value={nome()} onInput={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="Cognome" value={cognome()} onInput={(e) => setCognome(e.target.value)} />
          </div>

          <div class="line">
            <input type="text" placeholder="Nickname" value={nickname()} onInput={(e) => setNickname(e.target.value)} />
          </div>

          <div class="line">
            <input type="number" placeholder="Età" value={eta()} onInput={(e) => setEta(e.target.value)} />
          </div>

          <div class="line double">
            <input type="text" placeholder="Peso (kg)" value={peso()} onInput={(e) => setPeso(e.target.value)} />
            <input type="text" placeholder="Altezza (cm)" value={altezza()} onInput={(e) => setAltezza(e.target.value)} />
          </div>

          <div class="avatar-picker" onClick={() => setShowAvatarPicker(true)}>
            <img src={`../assets/avatars/${avatar()}.webp`} alt="Avatar" class="avatar-icon" />
            <span>Scegli un avatar</span>
          </div>

          <Show when={showAvatarPicker()}>
            <ChooseAvatar
              onSelect={(selectedAvatar) => {
                setAvatar(selectedAvatar);
                setShowAvatarPicker(false);
              }}
              onClose={() => setShowAvatarPicker(false)}
            />
          </Show>

          <div class="options">
            <span class="label">Sesso:</span>
            <div class="buttons">
              <button class={sesso() === 'M' ? 'sel' : ''} onClick={() => setSesso('M')}>Maschio</button>
              <button class={sesso() === 'F' ? 'sel' : ''} onClick={() => setSesso('F')}>Femmina</button>
            </div>
          </div>

          <select class="select" value={dieta()} onChange={(e) => setDieta(e.target.value)}>
            <option value="null">Tipo di dieta</option>
            <option value="onnivoro">Onnivoro</option>
            <option value="vegetariano">Vegetariano</option>
            <option value="vegano">Vegano</option>
            <option value="altro">Altro</option>
          </select>

          <textarea placeholder="Altro... (aggiungi preferenze, allergie, etc.)" value={altro()} onInput={(e) => setAltro(e.target.value)}></textarea>

          <div class="save-buttons">
            <button onClick={() => handleShowChange(false)}>Annulla</button>
            <button onClick={salva}>Salva</button>
          </div>
        </div>
      </div>
    </Show>
  );
}