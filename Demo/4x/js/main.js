var app=new Vue({
	el:'#app',
	methods:{
		onClick:function(){
			alert('clicked');
		},
		onEnter:function(){
			console.log('mouseenter');
		},
		onOut:function(){
			console.log('mouseleave');
		},
		onSubmit:function(){
			console.log('提交')
		}
	}
})