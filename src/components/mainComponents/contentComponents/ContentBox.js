import {Link} from "react-router-dom";

export const ContentBox = (props) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500`;

    return (
        <div className={props.className ? "movie last" : "movie"}>
            <div className="movie-image">
                <span className="play">
                    <span className="name">{props.movie?.original_title}
                    </span></span>
                <Link to={`/movie/${props.movie?.id}`}><img src={`${imageUrl}/${props.movie?.poster_path}`} alt=""/></Link>
            </div>
            <div className="rating">
                <p>RATING</p>
                <div className="stars">
                    <div className="stars-in"></div>
                </div>
                <span className="comments">12</span></div>
        </div>
    )

}
