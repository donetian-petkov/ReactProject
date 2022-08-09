export const Article = (props) => {

    const date = new Date(props.article.publishedAt).toString();

    return (
        <div className="card" style={{"width": "18rem"}}>
            <img src={props.article?.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.article?.title}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{date}</li>
                    </ul>
                    <p className="card-text">{props.article?.description}</p>
                </div>

                <div className="card-body">
                    <a href={props.article?.url} className="card-link">Read More</a>
                </div>
        </div>
    )

}