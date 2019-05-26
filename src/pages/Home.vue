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
let Alert = () => import('../plugins/alert/alert')
let loading = () => import('../plugins/toast/toast')

export default {
    data () {
      return {
        input:''
      };
    },

    components: {
      Alert,
      loading
    },

    created () {
    },

    computed: {
    },

    mounted() {
      // api.Get('info').then(res => {
      //   console.log('======== info ========')
      //   console.log(res)
      // }).catch(error => {
      //   console.log('get error occure')
      //   for(let key in error) {
      //     console.log('error key ' , key)
      //     console.log(error[key])
      //   }
      // })
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
        this.$alert.confirm('tisp' , 'sfahfa')
      },
      alert() {
        this.$alert.alert('tisp' , 'sfahfa')
      },
      loading() {
          this.$loading.show('拼命加载中...')
          setTimeout(() => {
              this.$loading.hidden()
          }, 1000);
      }
    }
}
</script>
<style scoped>

</style>