function SobreMim(props) {
    return (
        <div>
        <h2>{props.titulo}</h2>
        <img src={props.imagem}/>
        <p>{props.paragrafo}</p>
    </div>
    )
}
export default SobreMim