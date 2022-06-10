const Lev21Props = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.imgAlt} className="imgShop" />
            <p className="titleItem">{props.title}</p>
            <p className="titleItem">{props.price}</p>
            <button className="buttonShop">Buy now</button>
        </div>
    );
}

export default Lev21Props;