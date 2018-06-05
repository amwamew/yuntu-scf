<template>
  <div class="simple-info">
    <el-popover placement="bottom"
      trigger="hover">
      <div class="small-info">
        <p class="name"
          v-if="name">
          <i class="icon-user2"></i>
          姓　　名:{{name}}
        </p>
        <p class="mobile"
          v-if="mobile">
          <i class="icon-mobile"></i>
          手机号码:{{mobile}}
        </p>
        <p class="department"
          v-if="department">
          <i class="icon-bank"></i>
          所属支行:{{department}}
        </p>
      </div>
      <el-button slot="reference"
        type="text">{{text}}</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    mobile: {
      type: String,
      default: ''
    },
    department: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
