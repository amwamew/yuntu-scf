/*
 * FileName: 合同上传
 * Project: yuntu-scf-vue
 * File Created: Sunday, 20th May 2018 2:37:50 pm
 * Author: LiuBing
 */
<template>
  <div class="upload-contract">
    <ul class="upload-list">
      <li v-for="(item,index) in fileList"
        :key="index">
        <el-upload class="uploader"
          action=""
          :before-upload="beforeUpload"
          :on-change="onChange"
          @click.native="onClick(index)"
          :show-file-list="false"
          :auto-upload="false">
          <img v-if="item.url"
            :src="item.url"
            width="148"
            height="148">
          <i v-else
            class="el-icon-plus"></i>
          <div class="el-upload__tip"
            slot="tip">{{item.name}}</div>
        </el-upload>
      </li>
      <li>
        <el-upload class="uploader"
          action=""
          :before-upload="beforeUpload"
          :on-change="onChange"
          :auto-upload="false">
          <i class="el-icon-plus"></i>
          <div class="el-upload__tip"
            slot="tip">继续添加</div>
        </el-upload>
      </li>
    </ul>
    <ul class="file-list">
      <li v-for="(item,index) in fileList"
        :key="index">
        <span class="file-name">{{item.name}}</span>
        <el-button class="del-file fr"
          type="text"
          icon="el-icon-delete"
          size="small">删除</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: '综合额度授信合同',
          url: ''
        },
        {
          name: '提款申请书',
          url: ''
        },
        {
          name: '应收账款质押合同',
          url: ''
        },
        {
          name: '贷款到期提示通知书',
          url: ''
        },
        {
          name: '贷款资金支付委托书',
          url: ''
        }
      ]
    }
  },
  methods: {
    beforeUpload(file, fileList) {
      // console.log(file)
    },
    onChange(file, list) {
      let indexData = this.fileList[this.index]
      indexData.url = file.url
      this.$set(this.fileList, this.index, indexData)
      console.log(this.fileList)
      console.log(file)
      console.log(list)
      // let reader = new FileReader()

      // reader.onload = () => {
      //   let _base64 = reader.result
      //   console.log(_base64)
      //   // doWhatUWant(_base64) //就可以做你想做的啦！！！
      // }

      // reader.readAsDataURL(file.raw)
    },
    onClick(index) {
      this.index = index
    },
    submit() {
      this.$refs.contract.submit()
    }
  }
}
</script>
<style lang='stylus' scoped>
.upload-list
  overflow: hidden
  border-bottom: 2px solid #CCC
  li
    width: 33.33%
    text-align: center
    float: left
    margin-bottom: 20px
.file-list
  width: 84%
  margin: auto
  margin-top: 20px
  li
    line-height: 32px
</style>