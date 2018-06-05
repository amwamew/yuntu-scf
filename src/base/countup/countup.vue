/*
 * FileName: 数字滚动动画
 * countup.js DOC:https://github.com/inorganik/CountUp.js
 * Project: yuntu-scf-vue
 * File Created: Tuesday, 15th May 2018 1:49:22 pm
 * Author: LiuBing
 */

<template>
  <span class="countup" ref='countup'></span>
</template>

<script>
import CountUp from 'countup.js'
export default {
  props: {
    startVal: {
      //开始值
      type: String | Number,
      default: 0
    },
    endVal: {
      //结束值
      type: String | Number,
      default: 0
    },
    decimals: {
      //小数位置
      type: String | Number,
      default: 0
    },
    duration: {
      //动画延迟秒数
      type: String | Number,
      default: 2
    }
  },
  data() {
    return {
      numAnim: null
    }
  },
  mounted() {
    this.initCountUp()
  },
  methods: {
    initCountUp() {
      this.numAnim = new CountUp(
        this.$refs.countup,
        this.startVal,
        this.endVal,
        this.decimals,
        this.duration
      )
      this._start()
    },
    _start() {
      //动画开始
      this.numAnim.start(() => {
        this.$emit('complate') //动画完成后回调
      })
    },
    _pauseResume() {
      //切换动画切换暂停/恢复
      this.numAnim.pauseResume()
    },
    _reset() {
      //动画重置
      this.numAnim.reset()
    },
    _reStart() {
      //重新开始动画
      this._reset()
      this._start()
    }
  }
}
</script>