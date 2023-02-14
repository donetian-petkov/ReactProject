import * as request from "./requester";

const newsUrl = 'https://newsapi.org/v2/top-headlines';
const apiKey = '71f6998c2a24498281f3a51494ab3027'


export const getNews = (criteria) => request.get(`${newsUrl}?q=${criteria}&apiKey=${apiKey}`,'', {});
