import ProdottoCard from '../../components/ProdottoCard/ProdottoCard';
import { useParams } from '@solidjs/router';
import './main.css'
import getListAPI from '../list/api';
import { createSignal, onMount } from 'solid-js';

export default function ListaSpecifica() {
    const params = useParams();
    const name = params.name;
    const tipologies = ["altro", "bibite", "carne", "cereali", "dolci", "frutta", "legumi", "pane", "pasta", "verdura"];

    const [lista, setLista] = createSignal({});
    const [alimenti, setAlimenti] = createSignal([]);
    onMount(async () => {
        const result = await getListAPI();
        for(let list of result){
            if (list.id == name){
                setLista(list);
                setAlimenti(list.Aliments);
                break;
            }
            
        }

        

        
    });

    return (
        <main>
            <h1 className="title"><i className="fa-solid fa-arrow-left" onclick={() => window.location.href = '/list'}></i> {lista().nome}</h1>
            {alimenti().map((aliment) => (
                <ProdottoCard 
                    nome={aliment.nome}
                    quantita={aliment.ListAliment.qt}
                    categoria={tipologies.find(t => t === aliment.tipologia) ? aliment.tipologia : "altro"}
                />
            ))}
            
        </main>
    )
}