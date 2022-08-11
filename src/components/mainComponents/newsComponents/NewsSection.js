import {NewsBox} from "./NewsBox";
import {Title} from "../Title";
import {useEffect, useState} from "react";
import * as movieService from "../../../services/movieService";

export const NewsSection = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {


        movieService.getArticles('Movie')
            .then(result => {
                setNews(result.articles);
            });

    },[]);

    return (
        <div id="news">
            <Title title="Latest News" criteria='news'/>
            {news.slice(0,3).map(x => <NewsBox key={x.url} news={x}/>)}
        </div>
    );
}
