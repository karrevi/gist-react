import axios from 'axios';
import {
    API_URL
} from '../../api-config';
import store from '../store';


export const getAllSnnipets = async () => {
    const res = await axios.get(API_URL + '/snnipets')
    store.dispatch({
        type: 'GET_ALL_SNNIPETS',
        payload: res.data
    });
    return res;
}
export const insert = async () => {
    const res = await axios.post(API_URL + '/snnipets')
    store.dispatch({
        type: 'INSERT_SNNIPETS',
        payload: res.data
    });
    return res;
}