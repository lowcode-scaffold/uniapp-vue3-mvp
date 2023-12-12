<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ model.title.value }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { usePresenter } from "./presenter";

const presenter = usePresenter();
const { model } = presenter;
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
