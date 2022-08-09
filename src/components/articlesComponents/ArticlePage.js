import {useEffect, useState} from "react";
import {Title} from "../mainComponents/Title";
import {NewsBox} from "../mainComponents/newsComponents/NewsBox";
import * as movieService from "../../services/movieService";
import {Article} from "./Article";

export const ArticlePage = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        movieService.getArticles('Movie')
            .then(result => {
                setArticles(result.articles);
            });

    },[]);

    return (
        <div id="news" className="articles">
            <Title title="Latest News"/>
            {articles.map(x => <Article key={x.url} article={x}/>)}
        </div>
    )


}