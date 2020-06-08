import axios from 'axios';
import {
    API_URL
} from '../../api-config';
import store from '../store';
// import { useHistory } from 'react-router-dom';

export const register = async (user) => {
    await axios.post(API_URL + '/users/register', user);
}
export const login = async (credentials) => {
    const res = await axios.post(API_URL + '/users/login', credentials);
    localStorage.setItem('authToken', res.data.token);
    store.dispatch({
        type: 'LOGIN',
        payload: res.data.user
    });
}
export const getUserInfo = async (user) => {
    const res = await axios.get(API_URL + '/users/info', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
    store.dispatch({
        type: 'SET_USER',
        payload: res.data
    })
}
export const logout = async () => {
    // const history = useHistory();
    const res = await axios.get(API_URL + '/users/logout', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT',
        payload: ''
    })
    // history.push('/')
    return res;
}
export const update = async (user) => {
    const res = await axios.post(API_URL + '/users', user, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
    store.dispatch({
        type: 'SET_USER',
        payload: res.data
    });
}
export const uploadImage = async (user) => {
    const res = await axios.put(API_URL + '/users', user, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
}