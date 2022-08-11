import {useEffect, useState} from "react";
import * as movieService from "../../services/movieService";
import {Article} from "./Article";
import './ReviewPage.css';

export const ReviewPage = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        movieService.getArticles('Movie+Review')
            .then(result => {
                setArticles(result.articles);
            });

    },[]);

    return (
        <div id="news" >
            <div className="articleSection">
                {articles.slice(0,21).map(x => <Article key={x.url} article={x}/>)}
            </div>
        </div>
    )


}