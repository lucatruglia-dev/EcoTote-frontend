import ProdottoCard from '../../components/ProdottoCard/ProdottoCard';
import { useParams } from '@solidjs/router';
import './main.css'

export default function ListaSpecifica() {
    const params = useParams();
    const name = params.name;

    return (
        <main>
            <h1 className="title"><i className="fa-solid fa-arrow-left"></i> {name}</h1>
            <ProdottoCard 
                nome="Spaghetti"
                quantita="500g"
                categoria="pasta"
            />

            <ProdottoCard 
                nome="Carne di manzo"
                quantita="200g"
                categoria="carne"
            />

            <ProdottoCard 
                nome="Banane"
                quantita="500g"
                categoria="frutta"
            />

            <ProdottoCard 
                nome="Pizza"
                quantita="200g"
                categoria="altro"
            />
        </main>
    )
}