<template>
  <div class="page">

    <div class="weui-cells__title">快递短信</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <textarea class="" placeholder="请复制并粘贴快递短信，可多条复制粘贴至此，非本人姓名、号码的快递请勿下单！非本人快递概不接单" style="height: 5.3em" />
          <div class="weui-textarea-counter"></div>
        </div>
      </div>
    </div>

    <div class="weui-cells__title">基本信息</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">快递件数</div>
        </div>
        <div class="weui-cell__bd">
          <div class="reduce" style="width: 30%;">-</div>
          <input class="weui-input rinputa"  style="width: 40%;text-align:center;" />
          <div class="add" style="width: 30%;">+</div>
        </div>
      </div>
      <div class="weui-cell weui-cell_input weui-cell_vcode">
        <div class="weui-cell__hd">
          <div class="weui-label">代拿金额</div>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" value="3元" placeholder="" disabled/>
        </div>
        <div class="weui-cell__ft">
          <div class="weui-vcode-btn">收费准则</div>
        </div>
      </div>
      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">日期</div>
        </div>
        <div class="weui-cell__bd">
          <picker mode="date" value="date" @change="bindDateChange">
            <div class="weui-input">{{date}}</div>
          </picker>
        </div>
      </div>
      <div class="weui-cell weui-cell_input">
        <div class="weui-cell__hd">
          <div class="weui-label">配送时段</div>
        </div>
        <div class="weui-cell__bd">
          <picker @change="bindTimeChange" :range="times">
            <div class="weui-select">{{times[timesIndex]}}</div>
          </picker>
        </div>
        <div class="weui-cell__ft">
          <div class="weui-vcode-btn" style="border:none;">说明</div>
        </div>
      </div>
    </div>

    <div class="weui-cells__title">特殊情况备注</div>
    <div class="weui-cells weui-cells_after-title">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <textarea class="" placeholder="您有其他情况请在此备注哈~" style="height: 3.3em" />
          <div class="weui-textarea-counter"></div>
        </div>
      </div>
    </div>

    <div class="weui-btn-area">
      <button class="weui-btn" type="primary">提交订单</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        date:'',
        times: ["11:00~13:00", "16:00~20:00"],
        timesIndex:0
      };
    },

    components: {},

    methods: {
      bindDateChange:function(e){
        this.date = e.mp.detail.value;
        console.log(e.mp.detail.value);
      },
      bindTimeChange(e) {
        this.timesIndex = e.mp.detail.value;
      }
    },

    created() { }
  };
</script>

<style scoped>

  .reduce,.add,.rinputa{
    display: flex;
    float: left;
    flex-direction: column;
    align-items: center;
  }

  .reduce,.add{
    font-size: 50rpx;
  }

</style>
