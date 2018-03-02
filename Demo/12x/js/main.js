Vue.component('balance',{//父组件
	template:`
		<div>
			<show @showBalance='show_balance'></show>
			<div v-if='show'>您的余额为77元</div>
		</div>
	`,
	methods:{
		show_balance:function(data){
			this.show=true;
			console.log(data)
		}
	},
	//方法可以承载更多的逻辑
	data:function(){
		return{
			show:false,
		}
	}
});

Vue.component('show',{//子组件
	template:"<button @click='onClick'>显示余额</button>",
	methods:{
		onClick(){
			this.$emit('showBalance',{a:1,b:2})
			//类似于jquery中的trigger用于触发一个事件
			//子组件触发一个事件 也可以传递数据
		}
	}
});

new Vue({
	el:'.demo',
})