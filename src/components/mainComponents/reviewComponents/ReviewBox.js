export const ReviewBox = (props) => {

    const date = new Date(props.reviews.publishedAt).toString();

    return (
        <div className="content">
            <p className="date">{date}</p>
            <h5 style={{"color": "#faaf00"}}>{props.reviews.title}</h5>
            <p>&quot;{props.reviews.description}</p>
            <a href={props.reviews.url}>Read more</a></div>
    )

}
