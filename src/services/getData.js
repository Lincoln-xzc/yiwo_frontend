import axios from 'axios';

export const Login = (params) => {
    return new Promise((resolve, reject) => {
        axios.post('/signIn', params).then(response => {
            if (response.code == 200) {
                resolve(response);
            }
            reject(response);
        }).catch(err=>{
            reject(err);
        });
    });
};

export const Register = (data)=>{
    return new Promise((resolve, reject)=>{
        axios.post('/signUp', data).then(response=>{
            if(response.code == 200){
                resolve(response);
            }
            reject(response);
        }).catch(err=>{
            reject(err);
        });
    });
};

export const Logout = ()=>{
    return new Promise((resolve, reject)=>{
        axios.get('/logout').then(response=>{
            if(response.code == 200){
                resolve(response);
            }
            reject(response);
        }).catch(err=>{
            reject(err);
        });
    });
};

export const GetUserInfo = (query)=>{
    return new Promise((resolve, reject)=>{
        axios.get('/userInfo').then(response=>{
            if(response.code == 200){
                resolve(response);
            }
            reject(response);
        }).catch(err=>{
            reject(err);
        });
    });
};

export const GetUsers = (query)=>{
    return new Promise((resolve, reject)=>{
        axios.get('/users',{params:query}).then(response=>{
            if(response.code == 200){
                resolve(response);
            }
            reject(response);
        }).catch(err=>{
            reject(err);
        });
    });
};