<!--  -->
<template>
    <div v-cmodel='title' class="page"> 
      <cascad-menu class="menu-cart" :menus='menus'/>
       <!-- <cascad-menu class="menu-cart"/> -->
    </div>
</template>

<script>
export default {
    data () {
      return {
        title:'',
        data:'hello',
        menus:[
          {name:'name2' , data:[{name:'conten2'},{name:'conten2'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten2'},{name:'conten2'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'},{name:'conten2'}]},
          {name:'name1' , data:[{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'},{name:'conten1'}]},
          {name:'name3' , data:[{name:'conten3'},{name:'conten1'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten3'}]},
          {name:'name4' , data:[{name:'conten4'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten3'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'},{name:'conten4'}]},
          {name:'name5' , data:[{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'},{name:'conten5'}]},
          {name:'name6' , data:[{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'},{name:'conten6'}]}
              ],
      };
    },

    components: {
    },

    created () {
      console.log('cart created')
    },

    computed: {
    },

    mounted() {
    },

    methods: {
    }
}
</script>
<style lang="scss">
  .page {
    height: 100vh;
    padding-bottom: r_px(50)
  }
  .menu-cart {
    height: 50%;
  }
</style>