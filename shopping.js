var app=new Vue({
	el:'#app',
	data:{
		list:[
			{
				id:1,
				name:"small",
				price:1000,
				count:2
			},
			{
				id:2,
				name:"middle",
				price:2000,
				count:2
			},
			{
				id:3,
				name:"large",
				price:3000,
				count:2
			}
		]
	},
	computed:{
		total:function(){
			var all=0;
			for(var i=0;i<this.list.length;i++){
				var item=this.list[i];
				all+=item.price*item.count;
			}
			return all;
		}
	},
	methods:{
		subject:function(index){
			if(this.list[index].count===1)return;
			this.list[index].count--;
		},
		add:function(index){
			this.list[index].count++;
		},
		remove:function(index){
			this.list[index].splice(index,1);
		}
	}
});
