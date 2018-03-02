var app=new Vue({
	el:'#app',
	data:{
		english:140,
		math:130,
		physics:80,
	},
	computed:{
		sum:function(){
			return this.english+this.math+this.physics;
		},
		average:function(){
			return Math.round(this.sum/3);
		}
	}
})