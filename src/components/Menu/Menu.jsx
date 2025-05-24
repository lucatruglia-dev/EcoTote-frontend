// src/components/Menu/Menu.jsx
import { A, useLocation } from '@solidjs/router';
import { createEffect, createSignal, Show } from 'solid-js';
import AlertBox from '../AlertBox/AlertBox';
import './menu.css';

export default function Menu() {
  const location = useLocation();
  const [showAlert, setShowAlert] = createSignal(false);
  
  const items = [
    { path: '/user_home', icon: 'fa-house', name: 'Home' },
    { path: '/list', icon: 'fa-file-lines', regular: true, name: 'Docs' },
    { path: '/consigli', icon: 'fa-utensils', name: 'Consigli' },
    { path: '/people', icon: 'fa-users', name: 'People' }
  ];

  const [sel, setSel] = createSignal(location.pathname);

  createEffect(() => {
    setSel(location.pathname);
  });

  const handleConsigliClick = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <>
      <div class="menu">
        {items.map(({ path, icon, regular, name }) => (
          <A
            href={path}
            classList={{ sel: sel() === path }}
            onClick={name === 'Consigli' ? handleConsigliClick : () => setSel(path)}
          >
            <i class={`${regular ? 'fa-regular' : 'fa-solid'} ${icon}`}></i>
          </A>
        ))}
        <button class="add" onClick={() => window.location.href="./new_list"}>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

      <Show when={showAlert()}>
        <AlertBox
          icon="fa-circle-info"
          message="La funzione Consigli alimentari non è al momento disponibile."
          subMessage="Stiamo lavorando per implementarla al più presto!"
          onClose={() => setShowAlert(false)}
        />
      </Show>
    </>
  );
}