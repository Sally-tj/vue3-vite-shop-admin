<template>
  <div class="notfound-wrapper">
    <el-col :sm="12" :lg="6">
      <el-result
        icon="warning"
        title="Warning Tip"
        sub-title="你的页面走丢了～"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/')"
            >回到首页</el-button
          >
        </template>
      </el-result>
    </el-col>
  </div>
</template>
<style>
.notfound-wrapper {
  width: 1422px;
  height: 773px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
