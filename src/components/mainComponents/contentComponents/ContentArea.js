import {ContentBox} from "./ContentBox";
import {Title} from "../Title";

export const ContentArea = (props) => {

    return (
        <div className="box">
            <Title title={props.title}/>
            {props.movies?.slice(0,5).map(movie => <ContentBox key={movie.id} movie={movie}/>)}
            <ContentBox movie={props.movies ? props.movies[6] : ''} className="last"/>
            <div className="cl">&nbsp;</div>
        </div>
    )

}
