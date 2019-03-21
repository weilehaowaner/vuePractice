function isNumber(value){
	return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?{1}$)/).test(value+'');
}
Vue.component('input-number',{
	template:'\
			<div class="input-number">\
				<input\
					type="text"\ 
					:value="currentValue"\
					@change="handleChange">\
				<button\
					@click="handleDown"\
					:disabled="currentValue<=min">-</button>\
				<button 
					@click="handleUp"\
					 :disabled="currentValue>=max">+</button>\
			</div>',
	props:{
		max:{
			type:number,
			default:Infinity
		},
		min:{
			type:number,
			default:-Infinity
		},
		value:{
			type:number,
			default:0
		}
	},
	data:function(){
		return{
			currentValue:this.value
		}
	},
//	watch监听
	watch:{
		currentValue:function(val){
			this.$emit('input',val);
			this.$emit('on-change',val);
		},
		value:function(val){
			this.updateValue(this.value);
		}
	},
	methods:{
		updateValue:function(val){
			if(this.max<val)val=this.max;
			if(this.min>val)val=this.min;
			this.currentValue=val;
		},
		handleDown:function(){
			if(this.currentValue<=this.min)return;
			this.currentValue-=1;
		},
		handleUp:function(){
			if(this.currentValue>=this.max)return;
			this.currentValue+=1;
		},
		handleChange:function(event){
			var val=event.target.value.trim();
			var max=this.max;
			var min=this.min;
			if(isNumber(val)){
				val=number(val);
				this.currentValue=val;
				if(val>max){
					this.currentValue=max;
				}else if(val<min){
					this.currentValue=min;
				}
			}else{
					event.target.value=this.currentValue;
			}
		}
	},
	mounted:function(){
		this.updateValue(this.value);
	}
});
var app=new Vue({
	el:'#app',
	data:{
		value:5
	}
})
