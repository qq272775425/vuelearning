//事例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		// name:"浩男",
		// job:"job",
		// website:"http://haofanmedia.com",
		// websiteTag:"<a href='http://haofanmeida.com'>标签</a>"
		   name:"",
		   age:"",
		   x:0,
		   y:0
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



	logname:function(){
		this.name = this.$refs.name.value;
	},
	logage:function(){
		this.age = this.$refs.age.value;
	}

	}
});


// el:代表元素element 需要获取的元素一定是html中的根容器元素
//data 用以数据的存贮 设置各种数据 data是一个对象 他的key和value的值是自己定义的
// methods 用于存储各种方法
//data-binding:给属性绑定对应的值
//事件修饰符 实现阻止冒泡