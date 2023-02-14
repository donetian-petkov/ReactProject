import * as request from "./requester";

const newsUrl = 'http://api.mediastack.com/v1/news';
const apiKey = '381e482d909a019084c91c5eccc19ae7'

export const getNews = (criteria) => request.get(`${newsUrl}?access_key=${apiKey}&search=${criteria}&countries=us&keywords=${criteria}`,'', {});
