// let domain = 'http://10.2.149.96:8090';//打包服务器地址
// let domain = 'http://10.246.153.22:8080';//最新--打包服务器地址
let domain = process.env.API_HOST;

console.log(process.env.VUE_APP_API_HOST);
// 此文件归类所有请求接口（路径）
const interfaces = {
    login: domain + '/auth',//登陆接口






}

export default interfaces;