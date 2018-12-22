import axios from 'axios';
import {MessageBox, Message} from 'element-ui';
axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true; // 跨域默认不带cookie
axios.defaults.baseUrl = process.env.PROTOCOL + "://" + process.env.API_HOST;
axios.interceptors.request.use(
	config => {
	    if(!(config.url.indexOf("http")>-1 || config.url.indexOf("https")>-1)){
            config.url = config.baseUrl + config.url;
        }
		return config;
	}, err => {
		return Promise.reject(err);
	});

axios.interceptors.response.use(
	response => {
	    if (response.data.code == 200) {
			return response.data;
		} else if (response.data.status === 'OK'){
			return response.data;
		}else if(response.status == 200){
	        return response.data;
        }
	},
	error => {
		if (error.response) {
			switch (error.response.status) {
				case 400:
					break;
                case 401:
                    MessageBox.alert('授权码过期，请重新登录', '未授权',{
                        confirmButtonClass:'登录',
                        callback:action => {
                            localStorage.clear();
                            let url = location.href;
                            let res = encodeURI(url);
                            window.location.href = error.response.data.data.redirect_url+'?redirect_uri='+res;
                        }
                    });
					break;
				case 403:
					break;
				case 404:
					break;
				case 422:
					var errorMessage = "";
					let errorData = error.response.data.data;
					if (errorData != "") {
						for (var item in errorData) {
							errorMessage += errorData[item];
						}
						Message.error(errorMessage);
						error.response.message = errorMessage;
					}
					break;
				case 500:
					break;
			}
			//Message.error(error.response.data);
			return Promise.reject(error.response.data);
		} else {
			Message.error(error);
			return Promise.reject(error);
		}
	}
);
export default axios;
