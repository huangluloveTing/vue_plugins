<!--  -->
<template>
    <page showHeader>
      <!-- 头部 -->
      <div slot="header-left" class="shop-name">银犁商城</div>
      <div slot="rightActions" class="right-items">
        <i class="icon iconfont icon-dingbutubiaoxinxihuise" @click="toMessage"></i>
        <i class="icon iconfont icon-dingbutubiaosousuo" v-show="showSearchIcon" @click="toSearch"></i>
      </div>

      <!-- 首页内容 -->
      <div slot="body" class="home-body">
        <!-- 搜索条 -->
        <div class="search-bar" ref="search">
          <div class="search-center">
            <i class="icon iconfont icon-dingbutubiaosousuo"></i>
            <span>请输入商品名称</span>
          </div>
        </div>
        <!-- 分割线 -->
        <zline :height=1 :bgColor='lineColor'></zline>
        <!-- banner -->
        <div class="home-banner">
          <mt-swipe :auto="2000">
            <mt-swipe-item v-for=" (ads , index) in bannerInfo.advertisementList" :key="index + ''" @click.native="clickBanner(index)">
              <img v-lazy="ads.imageUrl" alt="banner" width="100%" height="100%" >
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!-- 分类 -->
        <div class="cate-container">
          <div v-for="(cate , index) in bannerInfo.categoryList" :key="index+''" class="cate-item" @click="tapCateItem(index)">
            <img :src="cate.icon" alt="分类">
            <span>{{cate.categoryName}}</span>
          </div>
        </div>
        <!-- 中奖信息 -->
        <div class="reward">
          <i class="icon iconfont icon-tongzhi reward-tip"></i>
          <span class="reward-tip">最近中奖用户</span>
          <swiper :options="swiperOption" ref="mySwiper" class="swiper-wraper">
            <!-- slides -->
            <swiper-slide v-for="(item ,index) in bannerInfo.rewardRecords" :key="index+''">
              <span>{{item.customerName | ellipsis}}</span>
              <span>{{item.siteName}}</span>
            </swiper-slide>
          </swiper>
          <div class="reward-more">
            <span>更多</span>
            <i class="icon iconfont icon-right" />
          </div>
        </div>
        <!-- 分割线 -->
        <zline :height=1 :bgColor='lineColor'></zline>
        <!-- 秒杀 -->
        <div class="seckill" v-if="homeComs.secKillCommodity">
            <div class="seckill-info">
              <div class="info-top">
                <span>限时抢购</span>
                <span>16点场</span>
              </div>
              <div class="info-bottom">
                <span> 本场结束还剩 </span>
                <div class="time">
                  <span>01</span><span>14</span><span>56</span>
                </div>
              </div>
            </div>
            <div class="sec-seperate"/>
            <div class="seckill-comms">
              <div class="sec-comm-item" v-for="(item , index) in seckillComms" :key="index">
                <img src="http://test.image.ylfood.com/2018/12/17/dd550d2332f8cdc5e9523e40874a03aa..png?imageView2/2/w/120/h/120" alt="" />
                <span class="price">16.00</span>
                <span class="delte-price">￥20.00</span>
              </div>
            </div>
        </div>
        <!-- 当季精选 -->
        <div class="season-choice">
          <div class="season-container">
            <div class="season-item" v-for="(item , index) in homeComs.seasonalCommodityList" :key="index+''">
              <img :src="item.imageUrl" alt="">
              <span class="comm-name">{{item.commodityName}}</span>
              <div class="price-buy">
                <span class="price">{{item.commoditySalesPrice}}</span>
                <span class="buy-now"> 立即购 </span>
              </div>
            </div>
          </div>
        </div>
        <!-- 专题活动标题 -->
        <div class="activity-header">
          <span>更多</span>
          <i class="icon iconfont icon-zhuantitiaozhuan"></i>
        </div>
        <!-- 专题 -->
        <template v-for="(item , index) in homeComs.multiSpecialCommodityList">
          <zline :height='10' :color='lineColor' v-if="index != '0'" :key="index+'line'"/>
          <div class="activity-item"  :key="index">
            <div class="activity-top-header">
              <img :src="item.imageUrl" alt="">
            </div>
            <div class="activity-coms">
              <div class="activity-com-item" v-for="(com , index) in item.commodityList" :key="index+'i'">
                <img :src="com.imageUrl" alt="">
                <span class="comm-name">{{com.commodityName}}</span>
                <div class="price-buy">
                  <span class="price">{{com.commoditySalesPrice}}</span>
                  <i class="icon iconfont icon-shangchengpx1"></i>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- 猜你喜欢 -->
        <template v-if="homeComs.guessYouLikeCommodityList && homeComs.guessYouLikeCommodityList.length > 0">
          <div class="guess-like-hot-header">
            <img src="../assets/images/hot_dot_left.png" alt="">
            <span>热销商品</span>
            <img src="../assets/images/hot_dot_right.png" alt="">
          </div>
          <div class="hot-comm">
            <template v-for="(item , index) in homeComs.guessYouLikeCommodityList">
              <div class="hot-comm-item" :key="index+''">
                <img :src="item.imageUrl" alt="">
                <span>{{item.commodityName}}</span>
                <div class="price-buy">
                  <span class="price">{{item.commoditySalesPrice}}</span>
                  <i class="icon iconfont icon-shangchengpx1"></i>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </page>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data () {
      return {
        lineColor:'#eeeeee',
        bannerInfo:{},
        homeComs:{},
        seckillComms:[1,2,3],
        swiperOption: {
          direction: 'vertical',
          loop:true,
          //每张播放时长3秒，自动播放
          autoplay:true,
          //滑动速度
          speed:1000
        },
        showSearchIcon:false
      };
    },

    filters:{
      ellipsis(value) {
        if (typeof value == 'undefined' || value == null) {
          return '***'
        }
        if (typeof value == 'string' || typeof value == 'number') {
          value = value + ''
          return (value[0] || '*') + '*' + (value[value.length - 1] || '')
        }
        return 'object'
      }
    },

    components: {
      swiper,
      swiperSlide
    },

    created(){
      // 监听window的变化，使搜索按钮可见
      this.$nextTick(() => {
        window.addEventListener('scroll' , () => {
          let bundingRect = this.$refs.search.getBoundingClientRect()
          if ((bundingRect.top || bundingRect.y) < 0) {
            this.showSearchIcon = true
          } else {
            this.showSearchIcon = false;
          }
        })
      })
    },

    mounted() {
      this.getBannerInfo()
      console.log(this.$refs.search)
      window.search = this.$refs.search
    },

    methods: {
      // 去消息中心
      toMessage(){

      },
      // 去搜索页面
      toSearch() {

      },
      async getBannerInfo() {
        this.$loading.show('ok')
        try {
         let result = await this.$api.getHomePageInfo()
         let commoms = await this.$api.getHomeCommodity()
          this.bannerInfo = result.result
          this.homeComs = commoms.result
          this.$loading.hidden()
          this.$toast.success('ok' , 1500);
        } catch (error) {
          this.$loading.hidden()
         this.$toast.fail(error.message)
        }
      },
      // 点击banner
      clickBanner(index) {
        console.log('banner index click ' + index)
      },
      // 点击分类菜单
      tapCateItem(index) {console.log('click cate index : ' + index)}
    },
    beforeRouteEnter:(to, from, next) => {
      next(vm => {
        // vm.getBannerInfo();
      })
    }
}
</script>
<style lang="scss">
  .swiper-wraper {
    flex: 1;
    height: r_px(20);
    font-size: r_px(10);
    .swiper-slide {
      height: r_px(20);
      line-height: r_px(20);
      color: #000;
      text-align: start;
    }
    & span {
      margin-left: 5px;
      &:nth-of-type(1) {
        font-size: r_px(17);
      }
      &:nth-of-type(2) {
        font-size: r_px(13);
        @include lineText();
      }
    }
  }
</style>

<style lang='scss' scoped>
  .home-body {padding-bottom: 55px;background: inherit}
  .shop-name {
    font-size: r_px(18);
    font-weight: bold;
    color: $c_primary_item_text;
  }
  .right-items i {font-size: r_px(25);color: $c_primary_title_text}
  .search-bar {
    padding: 8px 6px;
    background: #fff;
    .search-center {
      margin: 0 auto;
      height: r_px(30);
      border-radius: r_px(15);
      background: $c_primary_bg2;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      & i , & span {
        font-size: r_px(15);
        color: #999;
      }
    }
  }
  .home-banner {
    background: #fff;
    padding: 12px 8px 0;
    height: r_px(180);
  }
  .cate-container {
    padding: 10px 8px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    background: #fff;
    .cate-item {
      width: 20%;
      display: flex;
      flex-flow: column;
      align-items: center;
      text-align: center;
      font-size: r_px(12);
      padding-bottom: 6px;
      color: $c_primary_title_text;
      img {
        width: r_px(46);height: r_px(46);
        margin: 5px 0;
      }
    }
  }
  .reward {
    display: flex;flex-flow: row;align-items: center;justify-content: space-between;
    padding: 8px;
    background: #fff;
    margin-top: 8px;
    & > span {
      margin-left: 5px;
    }
    .reward-tip {
      color: $c_primary1;
      font-size: r_px(12);
      font-weight: bold;
    }
    .reward-more {
      color: #999;
      font-size: r_px(12);
      i {
        font-size: inherit;
      }
    }
  }
  .seckill {
    background: #fff;
    display: flex;
    flex-flow: row;
    align-items: stretch;
    padding: 8px;
    .seckill-info {
      padding-right: 8px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      .info-top , .info-bottom {
        display: flex;
        flex-flow: column;
        align-items: center;
        color: $c_primary1;
        font-size: r_px(13);
      }
      .info-top {
        color: $c_primary1;
        font-size: r_px(13);
        align-items: flex-start;
        & span:first-child {
          color: $c_primary_main_text;
          font-size: r_px(17);
          font-weight: bold;
          padding-bottom: 5px;
        }
      }
      .info-bottom {
        color: #999;font-size: r_px(10);
        .time {
          color: #fff;
          font-size: r_px(12);
          margin-top: 5px;
          margin-left: 8px;
          span {
            background: $c_primary2;
            border-radius: 2px;
            padding: 1px;
            margin-right: 8px;
          }
          &:nth-last-child() {
            margin-right: 0px;
          }
        }
      }
    }
    .sec-seperate {width: 1px;background: #eeeeee}
    .seckill-comms {
      flex: 1;
      display: flex;
      flex-flow: row;
      padding-left: 8px;
      justify-content: space-between;
      .sec-comm-item {
        display: flex;
        flex-flow: column;
        width: 30%;
        align-items: center;
        img {
          width: 100%;
          margin: r_px(2)
        }
        .delte-price {
          font-size: r_px(10);
          color: #999;
          text-decoration: line-through;
        }
      }
    }
  }
  .season-choice {
    background: url('../assets/images/season_bg.jpg') no-repeat;
    background-position: 0 0;
    background-size: 100%;
    background-clip: padding-box;
    width: 100%;
    margin-top: 10px;
    padding-top: r_px(50);
    .season-container {
      overflow-x: scroll;
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      -webkit-overflow-scrolling:touch;
      .season-item {
        background: #fff;
        display: flex;
        flex-flow: column;
        margin-right: 10px;
        width: r_px(138);
        align-items: stretch;
        text-align: start;
        padding-bottom: 8px;
        &:nth-of-type(1) {
          margin-left: 10px;
        }
        img {
          width: r_px(138);
          height: r_px(138);
        }
        span {
          margin: 6px 1px 0;
        }
        .comm-name {
          @include lineText();
          flex:1;font-size: r_px(13)
        }
      }
    }
  }
  .price-buy {
    padding: 4px 4px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: stretch;
    .buy-now {
      background: $c_primary1;
      font-size: r_px(8);
      align-self: center;
      padding: 3px;
      color: #fff;
      vertical-align: baseline;
      border-radius: 3px;
    }
  }
  .activity-header {
    margin-top: 10px;
    height: r_px(50);
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;align-items: center;
    background: url('../assets/images/theme-title.png') no-repeat;
    background-size: r_px(200);
    background-position: center;
    line-height: r_px(50);
    & span , & i {
      margin-right: 10px;
      color: $c_primary_title_text;
      font-size: r_px(13)
    }
    & i {
      color: $c_primary1;
    }
  }
  .activity-item {
    width: 100%;
    background: #fff;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    padding: 8px;
    .activity-top-header {
      img {
        width: calc(100%);
        border-radius: 5px;
      }
    }
    .activity-coms {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: stretch;
      .activity-com-item {
        width: 30%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        text-align: start;
        font-size: r_px(13);
        .comm-name {
          flex: 1;
        }
        img {
          width: 100%;
        }
        .price-buy {
          color: $c_primary1;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
        }
        span {
          @include textLineNumber(2);
          flex:1;
        }
      }
    }
  }
  .guess-like-hot-header {
    color: $c_primary2;
    font-size: r_px(16);
    margin: 10px auto;
    font-weight: bold;
    display: flex;flex-flow: row nowrap;align-items: center;justify-content: center;
    img {
      height: r_px(8);
      &:nth-of-type(1) {
        margin-right: 5px;
      }
      &:nth-of-type(2) {
        margin-left: 5px;
      }
    }
  }
  .hot-comm {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-between;
    align-items: stretch;
    .hot-comm-item {
      width: calc(50% - 4px);
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: stretch;
      background: #fff;
      margin-bottom: 8px;
      text-align: start;
      font-size: r_px(12);
      color: $c_primary_title_text;
      &>span {
        @include textLineNumber(2);
      }
      img {
        width: 100%;
      }
      i {
        font-size: r_px(20);
        color: $c_primary1;
      }
    }
  }
  .price {
    color: $c_primary2;
    font-size: r_px(16);
    margin-left: 0px;
    font-weight: bold;
    &::before {
      position: relative;
      content: '￥';
      vertical-align: baseline;
      right: 0px;
      font-size: r_px(7);
      font-weight: lighter;
    }
  }
</style>