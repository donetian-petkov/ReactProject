import {useEffect, useState} from "react";
import * as movieService from "../../services/movieService";
import * as newsService from "../../services/newsService";

import {Article} from "./Article";
import './NewsPage.css';

export const NewsPage = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        newsService.getNews('Movie')
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