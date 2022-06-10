

const Lev13Props = (props) => {
    return (
        <li>
            <img src={props.before} alt={props.beforeAlt} className="img" />
            <p className="p" style={{ textDecoration: props.style }}>{props.text}</p>
            <img src={props.after} alt={props.afterAlt} className="img" />
        </li >
    );
}

export default Lev13Props;