# fetch
  咸鱼康基于原生fetch的一点小小的封装
### 使用方法:
	fetch({  
		url: "",  
		method: "get/post/put/delete",  
		data: {},   //非get方法  
		params: {}, //仅限get方法  
	}).then( res => {  
		console.log('successful')  
	}).catch( res => {  
		console.log('error')
	})
  
### 设置公共参数:
  fetch.setUrlHeader('https://www.52xx.site') //设置默认域名  
  fetch.setHeaders(json)  //设置头部信息
