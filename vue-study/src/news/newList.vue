<template>
    <div>
      <h3>这是新闻资讯界面</h3>
      <comment-box></comment-box>
    </div>
</template>

<script>
  import comment from './comment'
    export default {
        name: "newList",
        data(){
        return {
          newLists:[]
        }
      },
      components:{
          'commentBox':comment
      }
      // 获取新闻列表数据
      // created(){
      //   this.getNews();
      // },
      // methods:{
      //     getNews(){
      //       this.$http.get('...').then(function(data){
      //         if(data.body.status==0){
      //           this.newLists=data.body.message;
      //         } else{
      //           Toast('获取新闻列表失败！')
      //         }
      //       })
      //     }
      // }
    }
</script>

<style scoped>

</style>
