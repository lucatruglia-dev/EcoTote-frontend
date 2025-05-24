import './ProdottoCard.css';

export default function ProdottoCard(props) {
    return (
        <div class="card">
            <div class="card-top"> {/* Rende cliccabile card-top */}
            <div class="icon">
                <img src={`/assets/categorie/${props.categoria}.png`} alt="Avatar" />
            </div>
            <div class="text">
                <div class="name">{props.nome}</div>
                <span class="distance">{props.quantita} - {props.categoria}</span>
            </div>
                <div class="buttons">
                    
                </div>
            </div>  
        </div>
    );
}