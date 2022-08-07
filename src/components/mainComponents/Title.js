import {Link} from "react-router-dom";

export const Title = (props) => {

    return (
        <div className="head">
            <h3>{props.title}</h3>
            <p className="text-right"><Link to={`${props.criteria}`}>See all</Link></p>
        </div>
    )

}
