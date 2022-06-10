

const Lev11Map = (props) => {
    return (<div className="oneMovie">
        <h2 className="title">{props.title}</h2>
        <p className="pMovies">{props.year}</p>
        <p className="pMovies">{props.director}</p>
        <p className="pMovies">{props.duration}</p>
        <p className="pMovies">{props.rate}</p>
        <p className="genre">{props.genre[0]}</p>
        <p className="genre">{props.genre[1]}</p>
        <p className="genre">{props.genre[2]}</p>
        <p className="genre">{props.genre[3]}</p>
        <p className="genre">{props.genre[4]}</p>
        <p className="genre">{props.genre[5]}</p>
    </div>);
}

export default Lev11Map;