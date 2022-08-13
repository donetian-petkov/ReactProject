import {Link, useNavigate} from "react-router-dom";
import {Rating, styled} from "@mui/material";
import {useContext, useState} from "react";
import {UserContext} from "../../../contexts/userContext";


export const ContentBox = (props) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500`;
    const [value, setValue] = useState(props.movie?.vote_average);
    const {getIsLoggedIn} = useContext(UserContext);
    const navigate = useNavigate();

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
                    navigate(`/addReview/${props.movie?.id}`)

                }}
                max={10}
                readOnly={!getIsLoggedIn}
                size="small"
            />
        </div>
    )

}
