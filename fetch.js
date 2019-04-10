
//let domain = sessionStorage.domain === undefined ? 'http://localhost/' : sessionStorage.domain;
let domain = 'http://localhost/';
let headers = {};

let setUrlHeader = (data) =>  {
  domain = data;
  //sessionStorage.domain = data;
}

let setHeaders = (data) =>  {
  headers = data;
}

let ajax = ({url='',params = '', data, method = 'get', header = headers}) => {
  return new Promise((resolve,reject) => {
    let getData = [];
    
    for(let i in params){
      let str = `${i}=${params[i]}`;
      getData.push(str);
    }
    
    if(method === 'get' && data){
      reject('get请求不能使用data传送参数,请使用params')
      return false;
    }
    
    // eslint-disable-next-line
    if(!/^(http(s)?\:\/\/)([\w\.]*)?(\/)/.test(url)){
      url = domain + url;
      console.log(domain);
    }
    
    
    fetch(`${url}?${getData.join('&')}`,{
      method:method,
      headers:header,
      body:data
    }).then(res => {
      if(res.status === 200){
        return res.json()
      }else if(res.status === 404){
        reject('无此请求api')
      }else if(res.status === 500){
        reject('后端处理错误,或者有必传参数未传')
      }
      
    }).then(res => {
      if(res){
        if(res.status === 200){
          resolve(res)
        }else{
          reject(res)
        }
      }
    })
  })
}
export default {
  ajax:ajax,
  domain:setUrlHeader,
  headers:setHeaders
};