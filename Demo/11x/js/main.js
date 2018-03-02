Vue.component('alert',{
	template:"<button @click='onClick'>哈哈哈</button>",
	props:['message'],
	methods:{
		onClick:function(){
			alert(this.message);
		}
	}
})
new Vue({
	el:'.demo',
})