<template>
  <div class="upload-drag">
    <el-upload :headers="headers"
      :drag="drag"
      :action="action"
      :multiple="multiple"
      :limit="limit"
      :auto-upload="autoUpload">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">
        <slot></slot>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    //上传的地址
    action: {
      type: String,
      default: ''
    },
    //头部信息
    headers: {
      type: Object,
      default: () => {}
    },
    //是否支持拖动
    drag: {
      type: Boolean,
      default: true
    },
    //是否支持多选
    multiple: {
      type: Boolean,
      default: false
    },
    //是否自动上传
    autoUpload: {
      type: Boolean,
      default: false
    },
    //文件上传类型
    fileType: {
      type: Array,
      default: () => []
    },
    //最大上传文件个数
    limit: {
      type: Number
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
