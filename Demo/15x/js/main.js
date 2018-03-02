Vue.directive('pin',function(el,binding){
	//el代表指令所在的整个元素
	//binding是指令的值或者基本信息
	//binding.modifiers可获取指令的修饰符，是一个对象可进行迭代
	//binding.arg传给指令的参数
	var pinned=binding.value;
	var position=binding.modifiers;
	var warning=binding.arg;
	if(pinned){
		el.style.position='fixed';
		for(var key in position){//判断key值是否存在
			if(position[key]){
				el.style[key]='10px';
			}
		}
		if(warning==='true'){
			el.style.background='yellow';
		}
	}else{
		el.style.position='static';
		el.style.background="#ccc"
	}
})
new Vue({
	el:'.demo',
	data:{
		card1:{
			pinned:false
		},
		card2:{
			pinned:false
		},
	}
})