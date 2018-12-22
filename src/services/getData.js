import axios from 'axios';

export const Login = (params) => {
    return new Promise((resolve, reject) => {
        axios.get('/login').then(response => {
            if (response.code == 200) {
                resolve(response);
            }
            reject(response);
        }).catch(err=>{
            reject(err);
        });
    });
};