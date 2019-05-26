<template>
    <div class="container">
        <div class="title-items">
            <ul>
                <li v-for="(title , index) in titles" :key="index+''" @click="tapItem(index)">
                    <span class="title" :class="index == currentIndex ? 'select-item': 'normal-item'"> {{title}} </span>
                </li>
            </ul>
        </div>
        <i class="bottom-line"></i>
        <div class="bottom" :style="currentBottomStyle"><i class="bottom-sperate"></i></div>
    </div>
</template>

<script>
export default {
    data () {
      return {
          width: 0,
          currentIndex: 0
      };
    },

    props: {
        titles:{
            type:Array
        },
        showBottom:{
            type:Boolean,
            default:true
        }
    },

    components: {
    },

    created () {
    },

    computed: {
        currentBottomStyle() {
            let width = 100.0 / this.titles.length ;
            let bottomStyle = `width:${width}%;left:${this.currentIndex * width}%;`
            return bottomStyle;
        }
    },

    mounted() {
    },

    methods: {
        selectClass(index) {
            if (index == this.currentIndex) {
                return 'select-item'
            }
            return 'normal-item'
        },
        tapItem(index) {
            this.currentIndex = index
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: column;
        .title-items {
            width: 100%;
            ul {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-flow: row;
                padding: 0px;
                margin: r_px(10) 0;
                li {
                    list-style: none;
                    margin: 0 auto;
                    width: 20%;
                }
            }
            .title {
                font-size: r_px(14);
            }
        }
        .bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0 auto;
            transition: all 0.25s;
            height: r_px(2);
            .bottom-sperate {
                display: block;
                background: #ff9421;
                margin: 0 auto;
                width: 50%;
                height: 100%;
            }
        }
    }
    .normal-item {
        color: #666666;
    }
    .select-item {
        color: #ff9421;
    }
    .bottom-line {
        position: absolute;
        bottom: 0;left: 0;width: 100%;
        height: 1px;
        background: $c_primary_seprate;
    }
</style>
