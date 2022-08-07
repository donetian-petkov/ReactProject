export const NewsBox = (props) => {

    const date = new Date(props.news.publishedAt).toString();

    return (
        <div className="content">
            <p className="date">{date}</p>
            <h5 style={{"color": "#faaf00"}}>{props.news.title}</h5>
            <p>&quot;{props.news.description}</p>
            <a href={props.news.url}>Read more</a>
        </div>
    )

}
