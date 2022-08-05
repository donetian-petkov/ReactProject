export const MovieDetails = (props) => {

    const imageUrl = '';

    return (
        <div className='movie'>
            <div className="movie-image"><span className="play"><span className="name">{props.movie?.original_title}</span></span> <a
                href="#"><img src={`${imageUrl}/${props.movie?.poster_path}`} alt=""/></a></div>
            <div className="rating">
                <p>RATING</p>
                <div className="stars">
                    <div className="stars-in"></div>
                </div>
                <span className="comments">12</span></div>
        </div>
    )

}