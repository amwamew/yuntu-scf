/*
 * FileName: 上传报告
 * Project: yuntu-scf-vue
 * File Created: Saturday, 19th May 2018 7:38:55 pm
 * Author: LiuBing
 */
<template>
  <div class="upload-report">
    <upload-drag :limit="1">
      <p>文件大小不超过5M
        <a href="javascript:void(0)">
          <el-button type="text"
            size="small">下载模版</el-button>
        </a>
      </p>
    </upload-drag>
  </div>
</template>

<script>
import UploadDrag from '@/components/common/upload/upload-drag'
export default {
  components: {
    UploadDrag
  }
}
</script>

<style lang="stylus" scoped>
</style>
