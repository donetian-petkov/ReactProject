import * as request from "./requester";

const newsUrl = 'https://api.newscatcherapi.com/v2/search';

const newsHeaders = {
    'x-api-key': 'yeAdze4674VZbYOCb88ii4c43IS6pHPMqOQWEQOGJWo'
}


export const getNews = (criteria) => request.get(`${newsUrl}?q=${criteria}`,'', newsHeaders);
