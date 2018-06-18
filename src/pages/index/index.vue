<template>
  <div class="page">
    <div style="width:100%;">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
        <div v-for="item in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" style="width: 100%;"/>
          </swiper-item>
        </div>
      </swiper>
    </div>
    <div>
      <div class="weui-grids">
        <block v-for="item in grids" :key="index">
          <navigator :url="'/pages/me/me'" @click="switchBtn(item)" class="weui-grid" hover-class="weui-grid_active">
            <image class="weui-grid__icon" :src="item.src" />
            <div class="weui-grid__label">{{item.name}}</div>
          </navigator>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      grids: [
        { src: '/static/images/icon_nav_panel.png', name: '代取快递',url:'../dnkd/dnkd' },
        { src: '/static/images/icon_nav_article.png', name: '寄快递',url:'../dnkd/dnkd' },
        { src: '/static/images/icon_nav_actionSheet.png', name: '敬请期待' ,url:'../dnkd/dnkd'}
      ]
    };
  },

  components: {},

  methods: {
    switchBtn:function(item){
      wx.navigateTo({
        url:item.url
      })
    }
  },

  created() { }
};
</script>

<style scoped>


</style>
