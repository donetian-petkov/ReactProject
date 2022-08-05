import {NewsBox} from "./NewsBox";
import {Title} from "../Title";
import {useEffect, useState} from "react";
import * as movieService from "../../../services/movieService";

export const NewsSection = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {

        movieService.getNews()
            .then(result => {
                setNews(result);
            });

    },[]);

    return (
        <div id="news">
            <Title title="Latest News"/>
            {news.slice(0,3).map(x => <NewsBox key={x.url} news={x}/>)}
        </div>
    );
}
