<template>
    <page title="订单" showHeader showBack>
        <div slot="body" class="list-page">
            <tab :titles='titles' @selectedItem='selectedItem'></tab>
            <div class="list-content" ref="orderWrapper">
                <div v-for="(order , index) in lists" :key="index" class="list-item">
                    <div class="order-item-container">
                        <div class="item-top">
                            <span class="time">2018-01-25 16:54</span>
                            <span v-if="index % 2 == 0"> 
                                <span class="cunt-time">13:45 </span>
                                <span class="cancelTitle">后自动取消/</span> 
                                <span class="status"> {{index%2 == 0 ? '待付款' : '已完成'}}</span> 
                            </span>
                        </div>
                        <!-- 多商品的时候 -->
                        <template v-if="index %2 == 0">
                            <div class="order-comms">
                                <div class="comm-container">
                                    <div v-for="(item , index) in comms" :key="index+''">
                                        <img class="comm-img" src="http://pic34.nipic.com/20131026/9422601_213844930000_2.jpg"/>
                                    </div>
                                </div>
                                <div class="more">
                                    <span>查看全部</span>
                                    <i class="icon iconfont icon-right" />
                                </div>
                            </div>
                        </template>
                        <!-- 一个商品的时候 -->
                        <template v-else>
                            <div class="com-one-container">
                                <img src="http://pic34.nipic.com/20131026/9422601_213844930000_2.jpg" alt="" />
                                <span>清香橘双天口渴干净来买，哈哈哈哈哈哈哈哈哈哈哈哈</span>
                                <div class="price-num">
                                    <div style="display:in"><span class="money"> 26.98 </span></div>
                                    <span class="num">*3</span>
                                </div>
                            </div>
                        </template>
                        <div class="order-info">
                            <span>共<span class="num">6</span>件商品  合计金额：<span class="money">24.00</span></span>
                        </div>
                        <div class="bottom-handles">
                            <i class="icon iconfont icon-dingdanshanchuanniu delete"></i>
                            <div class="handles">
                                <div class="handle" v-for="(title , index) in handles" :key="index">
                                    <span>{{title}}</span>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </page>
</template>

<script>
export default {
    data () {
      return {
          titles:["全部" ,'待付款' ,'配送中' , '待自提'],
          lists : ['','','','','','','','','','','',''],
          comms:['','',''],
          handles:['去评价' , '查看详情' ,'再次购买']
      };
    },

    created () {
    },

    computed: {
    },

    mounted() {
        this.$refs.wra
    },

    methods: {
        selectedItem(index) {
            console.log('tap index ' + index)
        }
    }
}
</script>
<style lang="scss" scoped>
    .list-page {
        display: flex;
        height: 100%;
        flex-flow: column;
    }
    .list-content {
        background: $c_primary_bg2;
        width: 100%;
        flex-grow: 1;
        overflow-y: scroll;
        .list-item{
            margin-top: 10px;
            .order-item-container {
                width: 100%;
                display: flex;
                flex-flow: column;
                align-items: stretch;
                background: #ffffff;
                .item-top {
                    padding: r_px(8) r_px(12);
                    font-size: r_px(13);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .time {
                        color: #666666;
                    }
                }
                .order-comms {
                    padding: 8px;
                    background: $c_primary_bg1;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    justify-content: space-between;
                    .comm-container {
                        display: flex;
                        align-items: center;
                        justify-content: start;
                        img {
                            height: r_px(74);
                            width: r_px(74);
                            margin-right: 10px;
                        }
                    }
                    .more {
                        font-size: r_px(12)
                    }
                }
                .order-info {
                    align-items: flex-end;
                    margin: 10px 10px;
                    text-align: right;
                    color: $c_primary_main_text;
                    font-size: r_px(13);
                    .num {
                        font-size: r_px(15)
                    }
                }
                .bottom-handles {
                    margin: 10px;
                    display: flex;
                    flex-flow: row;
                    justify-content: space-between;
                    align-items: center;
                    .delete {
                        font-size: r_px(18);color: $c_primary_title_text;
                    }
                    .handles {
                        display: flex;
                        align-items: center;
                        flex-flow: row;
                        font-size: r_px(12);
                        .handle {
                            padding-left: r_px(10);
                            padding-right: r_px(10);
                            margin-left: r_px(15);
                            border: currentColor solid 0.5px;
                            height: r_px(26);
                            width: r_px(60);
                            line-height: r_px(26);
                            border-radius: r_px(13);
                        }
                    }
                }
                .com-one-container {
                    display: flex;
                    align-content: flex-start;
                    flex-flow: row nowrap;
                    padding: 8px;
                    background: $c_primary_bg1;
                    color: $c_primary_main_text;
                    font-size: r_px(14);
                    img {
                        height: r_px(74);
                        width: r_px(74);
                        margin-right: 10px;
                    }
                    .price-num {
                        margin-left: r_px(10);
                        display: flex;
                        flex-flow: column;
                        align-items: flex-end;
                    }
                }
            }
        }
    }
    .cunt-time {
        color: $c_primary2;                
    }
    .cancelTitle {
        color: $c_primary_main_text;
    }
    .status {
        color: $c_primary2;
    }
    .money {
        color: $c_primary1;
        font-size: r_px(18);
        font-weight: bold;
        position: relative;
        padding-left: 10px;
        &::after {
            content: '￥';
            font-size: 0.4em;
            position: absolute;
            bottom: 0;left: 0;
            transform: translateY(-15%);
            font-weight: lighter;
        }
    }
    
</style>
