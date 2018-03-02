Vue.filter('currency',function(val,unit){
	//val为price传的值
	//unit参数为单位
	val=val||0;
	unit=unit||'元'
	return val+unit;
})
new Vue({
	el:'.demo',
	data:{
		price:''
	}
})