<!--  -->
<template>
    <div> this is page person 
      <ol>
        <li v-for="(list , index) in lists" :key="index+''">
          发哈开了房哈哈发卡量合法孔令辉发了客户反馈啦回复卡拉话费卡后方可拉横幅拉客户发拉客户分类卡号发啦发啦发啦和
        </li>
      </ol>
    </div>
</template>

<script>
export default {
    data () {
      return {
        lists:['','','','','','','','','','','','']
      };
    },

    components: {
    },

    created () {
      console.log('person created')
    },

    computed: {
    },

    mounted() {
    },

    methods: {
    },

    beforeRouteEnter(to, from, next) {
      console.log('person enter')
      next('orderList')
    }
}
</script>
<style scoped>

</style>