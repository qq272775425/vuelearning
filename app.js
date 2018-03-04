//事例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		// name:"浩男",
		// job:"job",
		// website:"http://haofanmedia.com",
		// websiteTag:"<a href='http://haofanmeida.com'>标签</a>"
		   // name:"",
		   // age:"",
		   // x:0,
		   // y:0


		   // error:false,
		   // success:false


		   characters:["did","嘻嘻","asukdasdjahk"],
		   users:[
		   {name:"asdasdas",age:"23"},
		   {name:"asdasda",age:"23"},
		   {name:"asdaqweqweweqwsdas",age:"23"},
		   {name:"asdaerwrwesdas",age:"23"}


		   ]
	},
	methods:{
		// add:function(inc){
		// 	this.age+=inc;
		// },sbutract:function(dec){
		// 	this.age-=dec;
		// },
		// updateXY:function(event){
			// console.log(event);
			// this.x = event.offsetX;
			// this.y = event.offsetY;

		// }
	// 	greet:function(time){
	// 		return 'good '+time+'!';
	// 	}



	// logname:function(){
	// 	// this.name = this.$refs.name.value;
	// },
	// logage:function(){
	// 	// this.age = this.$refs.age.value;
	// }

	}
});


// el:代表元素element 需要获取的元素一定是html中的根容器元素
//data 用以数据的存贮 设置各种数据 data是一个对象 他的key和value的值是自己定义的
// methods 用于存储各种方法
//data-binding:给属性绑定对应的值
//事件修饰符 实现阻止冒泡
//双向绑定 在html标签中加入 ref="xxx"在app.js中通过refs接过来
//v-model属性添加到html标签中值为data对象中的属性名,此时会将data中的
//计算属性
//动态绑定
//静态绑定: class <h1 v-bind:class="{red:false/true ,blue:false/true}">
//vue 条件语句 v-if
//组件



Vue.component("greeting",{
	template:`
	<p>
		{{name}}:大家好给大家介绍一下我的女神@靳玉婷
		<button v-on:click="chngeName">改名</button>
	</p>
	`,//``这个符号是es6的语法支持字符串换行 是不是很牛逼
	data:function(){
		return{
			name:"york"
		}
	},
	methods:{
		chageName:function(){
			this.name = "jack";
		}
	}
})
//所有的东西都是使用templete动态添加到html中 减少dom结构 在后台渲染减少回流重绘
//component vue调用组件的内置函数