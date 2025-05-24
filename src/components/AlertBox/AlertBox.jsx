import { createSignal, onCleanup } from 'solid-js';
import './AlertBox.css';

export default function AlertBox(props) {
  const [isVisible, setIsVisible] = createSignal(false);
  let alertBox;

  const show = () => {
    setIsVisible(true);
    // Aggiungi l'animazione di fade-in
    setTimeout(() => alertBox.classList.add('show'), 10);
  };

  const hide = () => {
    alertBox.classList.remove('show');
    setTimeout(() => {
      setIsVisible(false);
      if (props.onClose) props.onClose();
    }, 300);
  };

  // Mostra l'alert quando il componente viene montato
  show();

  // Pulisci gli event listener quando il componente viene smontato
  onCleanup(() => {
    if (alertBox) {
      alertBox.remove();
    }
  });

  return (
    <div 
      class="custom-alert" 
      ref={alertBox}
      style={{ display: isVisible() ? 'flex' : 'none' }}
    >
      <div class="alert-content">
        <i class={`fa-solid ${props.icon || 'fa-circle-info'}`}></i>
        {props.title && <h3>{props.title}</h3>}
        {props.message && <p>{props.message}</p>}
        {props.subMessage && <p class="sub-message">{props.subMessage}</p>}
        <button class="alert-button" onClick={hide}>
          {props.buttonText || 'OK'}
        </button>
      </div>
    </div>
  );
} 