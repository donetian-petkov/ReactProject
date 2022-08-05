export const ReviewBox = (props) => {

    const date = new Date(props.reviews.publishedAt).toString();

    return (
        <div className="content">
            <p className="date">{date}</p>
            <h4>{props.reviews.title}</h4>
            <p>&quot;{props.reviews.description}</p>
            <a href={props.reviews.url}>Read more</a></div>
    )

}
