import './Article.css';

export const Article = (props) => {

    return (
        <div className="card" style={{"width": "18rem", height: '550px'}}>
            {props.article?.media ? <img src={props.article?.media} className="card-img-top" style={{maxHeight: '180px'}} alt="..." /> : ''}
                <div className="card-body">
                    <p style={{'fontSize' : '10px'}}>{props.article?.published_date}</p>
                    <h6 className="card-title">{props.article?.title}</h6>
                    <p className="card-text" style={{"maxHeight": "100px", "overflow" : "hidden"}}>{(props.article?.excerpt.length > 140)
                        ? props.article?.excerpt.slice(0, 139) + '...'
                        : props.article?.excerpt }
                   </p>
                </div>

                <div className="card-body">
                    <a href={props.article?.link} className="card-link">Read More</a>
                </div>
        </div>
    )

}