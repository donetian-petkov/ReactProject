import {useEffect, useState} from "react";
import {Title} from "../mainComponents/Title";
import * as movieService from "../../services/movieService";
import {Article} from "./Article";
import './ArticlePage.css';

export const ArticlePage = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        movieService.getArticles('Movie')
            .then(result => {
                setArticles(result.articles);
            });

    },[]);

    return (
        <div id="news" >
            <div className="articleSection">
                {articles.slice(0,20).map(x => <Article key={x.url} article={x}/>)}
            </div>
        </div>
    )


}