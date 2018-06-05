/*
 * FileName: tab按钮组
 * Project: yuntu-scf-vue
 * File Created: Sunday, 27th May 2018 4:17:09 pm
 * Author: LiuBing
 */
<template>
  <ul class="tab-button">
    <li class="fl"
      v-for="(item,i) in data"
      :key="i">
      <router-link :to="item.path">
        <el-button type="primary"
          size="small"
          v-if="$route.path === item.path">{{ item.name }}</el-button>
        <el-button plain
          size="small"
          v-else>{{ item.name }}</el-button>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>