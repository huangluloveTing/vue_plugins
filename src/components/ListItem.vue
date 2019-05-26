<template>
    <div class="list-item">
        <span class="title">{{title}}</span>
        <div class="rihgt-content">
            <div class="right-content">
                <slot name='right'></slot>
            </div>
            <i v-if="indicator" class="icon iconfont icon-right indicator"/>
        </div>
        <i v-if="bottom == 'show'" class="bottom-line"></i>
    </div>
</template>

<script>
export default {
    props:{
        bottom:{
            type:String,
            default:'show'
        },
        indicator:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default: ''
        },
        tapItem:{
            type:Function,
            default:null
        }
    },
    mounted(){
    }
}
</script>
<style lang='scss' scoped>
    .list-item {
        position: relative;
        background: #fff;
        padding: 15px 10px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .title {
            color: $c_primary_title_text;
            font-size: r_px(14);
            text-align: center;
        }
        .rihgt-content {
            display: flex;
            flex-flow: row;
            align-items: center;
        }
        .bottom-line {
            position: absolute;
            bottom: 0; left: 15px; right: 0; height: 1px;
            background:$c_primary_bg2;
        }
        .right-content {
            margin-right: 10px;
        }
        .indicator {
            color: #999;
            font-size: r_px(11)
        }
    }

</style>