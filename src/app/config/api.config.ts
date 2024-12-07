import { environment } from '../../environments/environment';

const REMOTE_SERVER_URL = environment.apiUrl;

export const apiConfig = {
    GET_SEARCH_BY_NAME :   `${REMOTE_SERVER_URL}search.php`,
    GET_DETAILS_COCKTAIL : `${REMOTE_SERVER_URL}lookup.php`,
    GET_RANDOM_COCKTAIL :  `${REMOTE_SERVER_URL}random.php`
};