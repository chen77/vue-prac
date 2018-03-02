var Event=new Vue();//事件调度器
Vue.component('chen',{
	template:`
		<div>
			我说:
			<input type="text" v-model='iSaid' @keyup='onChange'/>
		</div>
	`,
	methods:{
		onChange:function(){
			Event.$emit('iSaid-sth',this.iSaid)
		}
	},
	data:function(){
		return{
			iSaid:'',
		}
	}
})

Vue.component('qi',{
	template:`
		<div>她说{{sheSaid}}</div>
	`,
	data:function(){
		return{
			sheSaid:'',
		}
	},
	mounted:function(){//生命周期的钩子，在初始化完成的瞬间执行
		var me=this;
		Event.$on('iSaid-sth',function(data){//调度器监听
			me.sheSaid=data;
		})//监听事件
	}
})
new Vue({
	el:'.demo',
})