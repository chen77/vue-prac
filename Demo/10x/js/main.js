Vue.component('like',{
	template:"#component-like",
	data:function(){
		return {
			like_count:10,
			liked:false,
		}
	},
	methods:{
		toggle_like:function(){
			if(!this.liked){
				this.like_count++;
				this.liked=!this.liked;
			}else{
				this.like_count--;
				this.liked=!this.liked
			}
		}
	}
})
//组件的data是一个对象
//组件每用一次就要新实例化一次，就有一个新的数据
new Vue({
	el:'#demo'
})