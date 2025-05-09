import React, { useEffect, useState } from 'react';
import { getListAPI } from '../services/api';
import ProdottoCard from '../components/ProdottoCard';

const ListPage = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        onMount();
    }, []);

    const onMount = async () => {
        const result = await getListAPI();
        setLista(result);
        console.log(result);
    };

    return (
        <main>
            <h1 className="title"><i className="fa-solid fa-arrow-left"></i> {lista()[0]?.nome}</h1>
            {lista()[0]?.ListAliment?.map((aliment) => (
                <ProdottoCard 
                    nome={aliment.nome}
                    quantita={aliment.qt}
                    categoria={aliment.tipologia}
                />
            ))}
        </main>
    );
};

export default ListPage; 