<!--  -->
<template>
    <div> this is home page 
        <h1> {{ input }} </h1>
      <div style="background:#ff0;width:20vw;height:10vw" @click="toDetail"> detail </div>
      <div style="background:#f0f;width:20vw;height:10vw" @click="postInfo"> post </div>
      <div style="background:#f3f;width:20vw;height:10vw" @click="toOrderList"> orderlist </div>
      <div style="background:#f5f;width:20vw;height:10vw" @click="toSetting"> setting </div>
      <div style="background:#f7f;width:20vw;height:10vw" @click="confirm"> confirm </div>
      <div style="background:#f6f;width:20vw;height:10vw" @click="alert"> alert </div>
      <div style="background:#f6f;width:20vw;height:10vw" @click="loading"> loading </div>
      <!-- <loading /> -->
    </div>
</template>

<script>

import api from '../api/api.js'

export default {
    data () {
      return {
        input:''
      };
    },

    components: {
      
    },

    created () {
    },

    computed: {
    },

    mounted() {
    },

    methods: {
      toDetail() {
        this.$router.push('/detail')
      },
      postInfo() {
        this.input = 'loading'
        api.Post('/commit' , {name:'huanglu' ,age:45}).then(res => {
          console.log(res)
          this.input = JSON.stringify(res) + ' / '+ this.input
        }).catch(error => {
          this.input = JSON.stringify(error)
        })
      },
      toOrderList() {
        this.$router.push('/orderList')
      },
      toSetting() {
        this.$router.push('/setting')
      },
      confirm() {
        this.$dialog.confirm('tisp' , 'sfahfa')
      },
      alert() {
        this.$dialog.alert('tisp' , 'sfahfa')
      },
      loading() {
          this.$loading.show('拼命加载中...')
          setTimeout(() => {
              this.$loading.hidden()
              this.$dialog.alert('提示' , '加载完毕！')
          }, 1000);
      }
    }
}
</script>
<style scoped>

</style>