export const NewsBox = (props) => {

    return (
        <div className="content">
            <p className="date">{props.news?.published_date}</p>
            <h5 style={{"color": "#faaf00"}}>{props.news?.title}</h5>
            <p>&quot;{props.news?.excerpt}</p>
            <a href={props.news?.link}>Read more</a>
        </div>
    )

}
