<!--  -->
<template>
    <div  class="termianl">
      <cascad :menus='menus'>
        <template slot="left-item" slot-scope="item"><span>{{item.item.name}}</span></template>
      </cascad>
    </div>
</template>

<script>
export default {
    data () {
      return {
        menus:[
          {name:'item1' , data:[{name:'item1'},{name:'item1'},{name:'item1'},{name:'item1'},{name:'item1'},{name:'item1'},{name:'item1'},{name:'item1'},{name:'item1'},]},
          {name:'item2' , data:[{name:'item2'},{name:'item2'},{name:'item2'},{name:'item2'},{name:'item2'},{name:'item2'},{name:'item2'},{name:'item2'},{name:'item2'},]},
          {name:'item3' , data:[{name:'item3'},{name:'item3'},{name:'item3'},{name:'item3'},{name:'item3'},{name:'item3'},{name:'item3'},{name:'item3'},{name:'item3'},]},
          {name:'item4' , data:[{name:'item4'},{name:'item4'},{name:'item4'},{name:'item4'},{name:'item4'},{name:'item4'},{name:'item4'},{name:'item4'},{name:'item4'},]},
          {name:'item5' , data:[{name:'item5'},{name:'item5'},{name:'item5'},{name:'item5'},{name:'item5'},{name:'item5'},{name:'item5'},{name:'item5'},{name:'item5'},]},
          {name:'item6' , data:[{name:'item6'},{name:'item6'},{name:'item6'},{name:'item6'},{name:'item6'},{name:'item6'},{name:'item6'},{name:'item6'},{name:'item6'},]},
          {name:'item7' , data:[{name:'item7'},{name:'item7'},{name:'item7'},{name:'item7'},{name:'item7'},{name:'item7'},{name:'item7'},{name:'item7'},{name:'item7'},]},
          {name:'item8' , data:[{name:'item8'},{name:'item8'},{name:'item8'},{name:'item8'},{name:'item8'},{name:'item8'},{name:'item8'},{name:'item8'},{name:'item8'},]},
          {name:'item9' , data:[{name:'item9'},{name:'item9'},{name:'item9'},{name:'item9'},{name:'item9'},{name:'item9'},{name:'item9'},{name:'item9'},{name:'item9'},]},
          ]
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
    }
}
</script>
<style scoped>
  .termianl {
    height: 100vh;
    padding-bottom: r_px(50)
  }
</style>