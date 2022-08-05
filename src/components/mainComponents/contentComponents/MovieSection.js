import {MovieBox} from "./MovieBox";
import {Title} from "../Title";

export const MovieSection = (props) => {

    return (
        <div className="box">
            <Title title={props.title}/>
            {props.movies?.slice(0,5).map(movie => <MovieBox key={movie.id} movie={movie}/>)}
            <MovieBox movie={props.movies ? props.movies[6] : ''} className="last"/>
            <div className="cl">&nbsp;</div>
        </div>
    )

}
