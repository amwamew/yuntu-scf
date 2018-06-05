/*
 * FileName: my-dialog.vue
 * Project: yuntu-scf-vue
 * File Created: Saturday, 19th May 2018 2:39:45 pm
 * Author: LiuBing
 */
<template>
  <div class="my-dialog">
    <el-dialog :visible.sync="isShow"
      :width="width"
      :modal="modal"
      :close-on-click-modal="closeOnClickModal"
      :close-on-press-escape="closeOnPressEscape"
      :custom-class="customClass">

      <div class="dialog-title"
        slot="title">
        <span v-if="titleIcon"
          :class="titleIcon"></span>
        <span class="title">{{title}}</span>
      </div>

      <div class="dialog-content">
        <slot></slot>
      </div>

      <div slot="footer"
        class="dialog-footer">
        <el-button v-for="(item,index) in buttons"
          :key="index"
          :type="item.type"
          :class="item.class"
          @click="beClicked(item,index)">
          {{item.text}}
        </el-button>
        <!-- <el-button type="primary"
          @click="dialogVisible = false">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    //弹窗中的数据
    dialogData: {
      type: [String, Number, Array, Object],
      default: null
    },
    //弹框的宽度
    width: {
      type: String,
      default: '50%'
    },
    //是否需要遮罩
    modal: {
      type: Boolean,
      default: true
    },
    //是否显示弹窗
    visible: {
      type: Boolean,
      default: false
    },
    //弹窗标题
    title: {
      type: String,
      default: ''
    },
    //标题icon
    titleIcon: {
      type: String,
      default: ''
    },
    //按钮组
    buttons: {
      type: Array,
      default: () => [
        {
          text: '取消', //按钮文字
          class: '', //按钮的class
          type: '' //按钮的类型
        },
        {
          text: '确定',
          class: '',
          type: 'primary'
        }
      ]
    },
    //dialog自定义class
    customClass: {
      type: String,
      default: ''
    },
    //是否可以通过点击遮罩关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isShow: this.visible,
      myData: this.dialogData,
      closeOnPressEscape: this.closeOnClickModal,
      beforeClose: true
    }
  },
  methods: {
    beClicked(item, index) {
      let length = this.buttons.length
      if (index === length - 1) {
        //确定
        this.close()
      }
      if (index === length - 2) {
        //取消
        this.close()
      }
      this.$emit('onClick', this.dialogData, index)
    },
    setDialogData(data) {
      this.myData = data
    },
    // handleClose(done) {
    //   this.$emit('beforeClose', done)
    // },
    open() {
      this.isShow = true
    },
    close() {
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
