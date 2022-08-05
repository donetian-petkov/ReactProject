export const NewsBox = (props) => {

    const date = new Date(props.news.publishedAt).toString();

    return (
        <div className="content">
            <p className="date">{date}</p>
            <h4>{props.news.title}</h4>
            <p>&quot;{props.news.description}</p>
            <a href={props.news.url}>Read more</a>
        </div>
    )

}
