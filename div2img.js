let toSVG = function(elem){
	let id = document.getElementById(elem);
	getchild(id);
	return false;
	let divcontent = id.innerHTML;
	this.time = id.ownerDocument.defaultView.getComputedStyle(id,null);//获取class样式进行下一步操作
	let css = getstyle(id);
	let width = id.offsetWidth;
	let height = id.offsetHeight;
	let svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
							<foreignObject width='100%' height='100%' >
							<div xmlns="http://www.w3.org/1999/xhtml" id='svg' style='${css}'>
									${divcontent}
							</div>
							</foreignObject>
							</svg>`
	let img = document.createElement("img");
	
	img.src = "data:image/svg+xml," + svg;//设置图片路径
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext('2d');  //取得画布的2d绘图上下文
	canvas.width = width;
	canvas.height = height;
	img.onload = function(){
		ctx.drawImage(img, 0, 0);
		let data =  canvas.toDataURL("image/png");
		let dowload = document.createElement("a");//找到a标签(该a标签已被我隐藏)
		dowload.href = data;
		dowload.download = 'img-demo';
		dowload.click();
	}
}

let getchild = function(id){
	getchlids(id.children)
}
let getchlids = function(data){
	for(let i of data){
		console.log(i.getAttribute("data-id"),i.style.color)
		let css = i.ownerDocument.defaultView.getComputedStyle(i,null);
		css = getstyle(css)
		i.style = css;
		for(let i of data){
			getchlids(i.children)
		}
	}
	
}

let getstyle = function(data){//获取样式
	let css = '';
	for(let i in data){
		if(isNaN(i)){
			css = css + `${i}:${data[i]};`;
		}
	}
	return css;
}