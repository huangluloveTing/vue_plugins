<!--  -->
<template>
    <div> this is detail page 
      <h1> cart length : {{cartLength}}</h1>
      <div style="background:#f0f;width:20vw;height:10vw" @click="changeCart"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data () {
      return {
      };
    },

    components: {
    },

    created () {
      console.log(this.$store)
    },

    computed: {
      ...mapGetters({
        cartLength:'cartLength'
      })
    },
    watch:{
      '$store.state.cart.carts'() {
        console.log('carts change')
      }
    },

    mounted() {
    },

    methods: {
      changeCart() {
        this.$store.commit('addCart' , {name:'sfs'})
      }
    }
}
</script>
<style scoped>

</style>