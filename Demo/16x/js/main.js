var base={//vue中可以定义一个方法对象
	methods:{
		show:function(){
			this.visible=true;
		},
		hide:function(){
			this.visible=false;
		},
		toggle:function(){
			this.visible=!this.visible
		}
	},
	data:function(){
		return{
			visible:false,
		}
	},
}

Vue.component('tip',{
	template:`
	<div>
		<button @mouseenter='show' @mouseleave='hide'>提示</button>
		<div class="popup tip" v-if='visible'>
			<h4>title</h4>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi numquam nemo culpa fuga expedita nihil, accusamus at est veniam quod, quos! Ipsa amet neque consequuntur natus iste consectetur eaque, assumenda.
			</div>
		</div>
	</div>
	`,
	mixins:[base],//vue会合并这个组件和对象
	//在任何组件里可重复使用mixins的内容
	//在当前组件里明确指定的东西会覆盖掉mixins的内容
})

Vue.component('popup',{
	template:`
	<div>
		<button @click='toggle'>popup</button>
		<div class='popup' v-if='visible'>
			<h4>title</h4>
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aspernatur dolores, est minus dolore minima sapiente eius molestias! Iure harum ullam tenetur molestiae, quasi similique deserunt id qui? Soluta, dolores!
			</div>
		</div>
	</div>
	`,
	mixins:[base],
})
new Vue({
	el:'.demo',

})