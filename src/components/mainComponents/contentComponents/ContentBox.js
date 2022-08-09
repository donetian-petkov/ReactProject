import {Link} from "react-router-dom";
import {Rating, styled} from "@mui/material";
import {useState} from "react";


export const ContentBox = (props) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500`;

    const [value, setValue] = useState(props.movie?.vote_average);

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#faaf00',
        },
        '& .MuiRating-iconHover': {
            color: '#ffe500',
        },
    });

    return (
        <div className={props.className ? "movie last" : "movie"}>
            <div className="movie-image">
                <span className="play">
                    <span className="name">{props.movie?.original_title}
                    </span></span>
                <Link to={`/movie/${props.movie?.id}`}>
                    {
                        props.movie?.poster_path
                            ? <img src={`${imageUrl}/${props.movie?.poster_path}`} alt=""/>
                            : ''
                    }
                </Link>
            </div>

            <StyledRating
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                max={10}
            />
        </div>
    )

}
