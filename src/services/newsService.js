import * as request from "./requester";

const newsUrl = 'https://api.newscatcherapi.com/v2/search';

const newsHeaders = {
    'x-api-key': 'm0oO_mBRbfqG-31-CdnAfFXQpYu4UC2NMLtkyN5FO8w'
}


export const getNews = (criteria) => request.get(`${newsUrl}?q=${criteria}`,'', newsHeaders);
