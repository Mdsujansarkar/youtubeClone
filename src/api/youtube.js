import axios from 'axios';
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: 'AIzaSyDoRqF-KvgtX1fpi3lMqtW0m6V16HDN3gI'
    }
});


