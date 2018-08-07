let defaultCity = '成都'

//使用localStorage进行本地数据存储时最好加上try-catch，防止浏览器不支持（隐身模式或关闭了本地存储）报错
try{
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
}catch(e){

}

export default{
	city:defaultCity
}