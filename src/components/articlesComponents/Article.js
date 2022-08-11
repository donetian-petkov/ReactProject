import './Article.css';

export const Article = (props) => {

    const date = new Date(props.article?.publishedAt).toString();

    return (
        <div className="card" style={{"width": "18rem", height: '550px'}}>
            {props.article?.urlToImage ? <img src={props.article?.urlToImage} className="card-img-top" style={{maxHeight: '180px'}} alt="..." /> : ''}
                <div className="card-body">
                    <p style={{'fontSize' : '10px'}}>{date}</p>
                    <h6 className="card-title">{props.article?.title}</h6>
                    <p className="card-text" style={{"maxHeight": "100px", "overflow" : "hidden"}}>{(props.article?.description.length > 140)
                        ? props.article?.description.slice(0, 139) + '...'
                        : props.article?.description }
                   </p>
                </div>

                <div className="card-body">
                    <a href={props.article?.url} className="card-link">Read More</a>
                </div>
        </div>
    )

}