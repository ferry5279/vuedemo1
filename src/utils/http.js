import axios from 'axios';
import qs from 'qs';

/** **** 创建axios实例 ******/

const service = axios.create({
    baseURL: '', //将请求路径相同的前缀统一提取到baseURL属性内
    timeout: 100000 // 请求超时时间
})

/** **** request拦截器==>对请求参数做处理 ******/

service.interceptors.request.use(config => {
    for (const key in config.data) {
        if (config.data[key] === 'all') {
            delete config.data[key]
        }
    }
    config.data = (config.data instanceof FormData) ? config.data : qs.stringify(config.data)
    return config;
}, error => { //请求错误处理
    return Promise.reject(error)
})

/****** respone拦截器==>对响应做处理 ******/

service.interceptors.response.use(response => {
        return response.status === 200 ? response.data : response;
    },
    error => { //响应错误处理
        return Promise.reject(error)
    }
);
export default service;