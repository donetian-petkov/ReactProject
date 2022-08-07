import {Link} from "react-router-dom";

export const Footer = () => {

    return (
        <div id="footer">
            <p className="lf">Copyright &copy; 2022 <Link to="/">Movie Hunter</Link> - All Rights Reserved</p>
            <div style={{clear: 'both'}}/>
        </div>
    )

}
