var Alert={
		template:"<button @click='onClick'>哈哈哈</button>",
		methods:{
			onClick:function(){
				alert('yo.');
			}
		}
	}
// 以上只是进行了封装加载还没进行渲染
// 要给component一个域
new Vue({
	el:'#seg1',
	components:{
	alert:Alert
},
})