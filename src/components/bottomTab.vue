<!--  -->
<template>
    <div class="bottom-container">
         <mt-tabbar v-model="selected" slot="bottom" :fixed='false'>
          <mt-tab-item v-for="(item ,index) in tabItems" :key="index+''" :id="item.id">
            <i slot="icon" class="icon iconfont" :class="item.icon"  />
            {{item.title}}
          </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data () {
      return {
          tabItems:[
              {title:'门店' , icon:'icon-shangchangdibudian' , id:'1'},
              {title:'首页' , icon:'icon-dibulanshouyeSVG1' , id:'2'},
              {title:'购物车' , icon:'icon-dibulangouwucheSVG1' , id: '3'},
              {title:'个人中心' , icon:'icon-dibulangerenzhongxinSVG1' , id: '4'}
          ],
          selected:'1'
      };
    },

    props:{
    },

    components: {
    },

    created () {
    },

    computed: {
        
    },
    watch:{
        selected: {
            handler(newl){
                this.$emit('bottomClick' , newl)
            }
        }
    },

    mounted() {
    },

    methods: {
    }
}
</script>
<style lang="scss">
    .bottom-container {
        position: fixed;
        bottom: 0;left: 0;right: 0;
        z-index: 1000;
    }
    .item-container {
        width: 25%;
        height: r_px(50);
    }
    .mint-tabbar > .mint-tab-item.is-selected {
        background: inherit;
        @include textGradinet()
    }
    .mint-tab-item {
        color: #AAAAAA;
    }
    .mint-tab-item-icon {
        height: r_px(22);
        width: r_px(22);
        i {
            font-size: r_px(22);
        }
    }
</style>
