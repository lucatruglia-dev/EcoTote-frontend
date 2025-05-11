import './BigCard.css'

export default function BigCard(props) {
    const tags = props.tags   
    console.log(tags);
    return(
        <div className="big-card" style={{background: props.color}} onclick={() => {window.location.href = "/lista_specifica/d" + props.id}}>
        <div className="top">
          <div className="left">
            <div className="icon"></div>
          </div>
          <div className="right">
            <span className="title">{props.title}</span>
            <span className="subtitle">{props.subtitle}</span>
          </div>
        </div>
        <div className="content">
          <span className="name">{props.name}</span>
          <span className="description">{props.description}</span>
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <a href="#" className="tag" key={index}>{tag.trim()}</a>
          ))}
        </div>
      </div>
    );
}