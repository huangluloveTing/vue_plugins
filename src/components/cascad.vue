<template>
    <div class="cascad">
        <div class="left">
            <div class="item" v-for="(item ,index) in menus" :key="index" @click="tapLeft(index)" :class="leftIndex == index? 'active' : ''">
                <!-- 可以使用插槽将数据传递给父组件，然后通过父组件设置每个item -->
                <slot v-bind:item='item' name="left-item"><span>{{item.name}}</span></slot>
            </div>
        </div>
        <div class="right" ref="right_container" @scroll="rightScroll">
            <section ref="rightItems" class="item" v-for="(item ,index) in menus" :key="index+'section'" :id="'section'+index">
                <span class="header">{{item.name}}</span>
                <div class="items" v-for="(s_item , i) in item.data" :key="i">
                    <span>{{s_item.name}}</span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
          listHeights:[],
          leftIndex: 0
      };
    },

    props:{
        menus:{
            type:Array,
            default:[{name:'', data:[{name:''}]}]
        }
    },
    components: {
    },

    created () {
        this.$nextTick(() => {
            this.calcuTotalHeight()
        })
    },

    computed: {
    },

    methods: {
        rightScroll() {
            let container = this.$refs.right_container
            let y = container.scrollTop
            let index = this.listHeights.findIndex((item , index) => {
                return item > y && y >= this.listHeights[index - 1]
            });
            index = index <= 0 ? 0 : index;
            this.leftIndex = index <= 0 ? 0  : index;
        },
        tapLeft(index) {
            document.querySelector('#section'+index).scrollIntoView()
        },
        calcuTotalHeight() {
            let sectionLists = this.$refs.rightItems;
            let height = 0
            let heights = []
            sectionLists.forEach(item => {
                height += item.clientHeight;
                heights.push(height)
            })
            this.listHeights = heights;
        }
    }
}
</script>
<style lang='scss' scoped>
    .cascad {
        height: 100%;
        width: 100%;
        overflow: auto;
        .right {
            float: right;
            width: 70%;
            height: 100%;
            overflow-y: scroll;
            color: #333;
            
            .item {
                padding: 5px;
                text-align: start;
                .header {
                    font-size: r_px(18);
                    display: block;
                }
            }
            .items {
                padding: 10px;
            }
        }
        .left {
            float: left;
            width: 30%;
            height: 100%;
            overflow-y: scroll;
            .item {
                padding: 10px;
                background: #f5f5f5;
            }
            .active {
                background: #ff5b0f;
            }
        }
    }
</style>