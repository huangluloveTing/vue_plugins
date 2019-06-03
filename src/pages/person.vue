<!--  -->
<template>
  <page class="person-bg">
    <div slot="body" class="person-header">
        <div class="info-container">
          <div class="headerIcons">
            <i class="icon iconfont icon-mendiangerenzhongxinxinxi"></i>
            <i class="icon iconfont icon-mendiangerenzhongxinshezhi"></i>
          </div>
          <div class="user-info">
            <img src="../assets/images/loading.gif" alt="" class="avator">
            <div class="infos">
              <span class="name">咦咦咦的小公主</span>
              <span> 180 **** 9987 <span>250积分</span></span>
            </div>
          </div>
        </div>
        <!-- 我的订单 -->
        <div class="person-list-item one-top">
          <div class="order-item-top" @click="toOrderList">
            <span class="myorder-name">我的订单</span>
            <span class="top-center">全部订单</span>
            <i class="icon iconfont icon-right "></i>
          </div>
          <zline :height='1'/>
          <div class="item-list">
            <div v-for="(item ,index) in orderStatus" :key="index" class="item">
              <i class='icon iconfont status-color' :class="item.icon"></i>
              <span>{{item.status}}</span>
              <span class="badge">2</span>
            </div>
          </div>
        </div>
        <!-- 常用清单 -->
        <div class="person-list-item">
          <div class="order-item-top left">
            <span class="myorder-name">常用清单</span>
          </div>
          <zline />
          <div class="item-list">
            <div v-for="(item ,index) in useList" :key="index" class="item">
              <i class='icon iconfont' :class="item.icon"></i>
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
        <!-- 服务 -->
        <div class="person-list-item">
          <div class="order-item-top left">
            <span class="myorder-name">常用清单</span>
          </div>
          <zline />
          <div class="item-list">
            <div v-for="(item ,index) in serviceList" :key="index" class="item">
              <i class='icon iconfont' :class="item.icon"></i>
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
        <!-- 猜你喜欢 -->
    </div>
  </page>
</template>

<script>
export default {
    data () {
      return {
        lists:['','','','','','','','','','','',''],
        orderStatus:[
          {icon:'icon-unpaid2',status:'待付款'},{icon:'icon-delevery',status:'配送中'},
          {icon:'icon-arayacak',status:'待收货'},{icon:'icon-gerenzhongxin-pingjia',status:'待评价'}],
        useList:[
          {icon:'icon-card1 yl_c',title:'银犁卡'},{icon:'icon-chit voucher_c',title:'代金券'},
          {icon:'icon-integaril jf_c',title:'积分商城'},{icon:'icon-gerenzhongxin-wodeguanzhu gz_c',title:'我的关注'},
          {icon:'icon-comment1 comment_c',title:'我的评价'},{icon:'icon-gerenzhongxin-dizhiguanli address_c' , title:'地址管理'}
        ],
        serviceList:[
          {icon:'icon-gerenzhongxin-kehudianhua kf_c',title:'客服电话'},{icon:'icon-wechat wx_c',title:'微信公众号'},
          {icon:'icon-gerenzhongxin-guanyuyinli about_c',title:'关于银犁'}
        ]
      };
    },

    components: {
    },

    created () {
      console.log('person created')
    },

    methods: {
      toOrderList() {
        this.$router.push('/orderlist')
      }
    },
    activated(){
      console.log('person activat');
    },
    deactivated(){
      console.log('person deactivated');
    },
    beforeRouteEnter(to, from, next) {
      next()
    }
}
</script>
<style lang='scss' scoped>
  .yl_c {color: #ff9421;}
  .voucher_c {color: #EF5AC0}
  .jf_c {color: #FF756E}
  .gz_c {color: #9F95FD}
  .comment_c {columns: rgb(145, 105, 103);}
  .address_c {color: #6ACBD1;}
  .kf_c {color: #FF756E}
  .wx_c {color: #A0CB3E}
  .about_c {color: #FF9421}
  .person-header {
    padding-top: r_px(20);
    background:$c_primary_bg2 url('../assets/images/center_bg.png') no-repeat;
    background-size: 100% r_px(150);
    background-attachment: scroll;
    background-position: 0 0;
    width: 100%;
    min-height: 100vh;
    .info-container {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      color: #fff;
      margin-bottom: r_px(20);
      .headerIcons {
        align-self: flex-end;
        i {
          margin-right: 10px;
          font-size: r_px(22);
        }
      }
      .user-info {
        margin: 0 10px;
        display: flex;
        flex-flow: row;
        justify-content: start;
        align-items: center;

        .avator {
          width: r_px(52);
          height: r_px(52);
          border: solid #fff 1px;
          border-radius: r_px(26);
        }
        .infos {
          text-align: start;
          margin-left: 8px;
          & > span {
            display: block;
            font-size: r_px(14);
          }
          .name {
            font-size: r_px(18);
            font-weight: bold;
          }
        }
      }
    }
    .person-list-item {
      display: flex;
      box-shadow: 0 1px 4px rgba(00, 00, 00, 0.06);
      border-radius: 3px;
      flex-flow: column;
      align-items: stretch;
      background: #fff;
      padding: 8px;
    }
    .person-list-item {
      margin: 10px 10px;
      .order-item-top {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        font-size: r_px(15);
        color: $c_primary_main_text;
        padding-bottom: 8px;
        .left {
          justify-content: flex-start;
        }
        .top-center {
          flex:1;
          color: #999999;
          font-size: r_px(13);
          text-align: end;
          & + i {
            font-size: r_px(13);
            color: #999999;
          }
        }
      }
      .item-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: r_px(10);
        .item {
          width: 25%;
          margin-top: r_px(18);
          display: flex;
          flex-flow: column;
          align-items: center;
          font-size: r_px(13);
          color: $c_primary_title_text;
          position: relative;
          & > span {
            margin-top: r_px(12);
          }
          i {
            font-size: r_px(23);
          }
          .status-color {
            font-size: r_px(23);
            @include textGradinet();
          }
          .badge {
            position:absolute;
            top:-2px;left: 50%;
            height: r_px(14);
            line-height: r_px(14);
            min-width: r_px(14);
            border: $c_primary2 solid 1px;
            border-radius: r_px(7);
            background: #fff;
            color: $c_primary2;
            font-size: r_px(10);
            text-align: center;
          }
        }
      }
    }
  }
</style>