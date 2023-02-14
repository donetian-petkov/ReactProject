import {NewsBox} from "./NewsBox";
import {Title} from "../Title";
import {useEffect, useState} from "react";
import * as newsService from "../../../services/newsService";


export const NewsSection = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {


        newsService.getNews('Movie')
            .then(result => {
                setNews(result.data);
            });

    },[]);

    return (
        <div id="news">
            <Title title="Latest News" criteria='news'/>
            {news.slice(0,3).map(x => <NewsBox key={x._id} news={x}/>)}
        </div>
    );
}
