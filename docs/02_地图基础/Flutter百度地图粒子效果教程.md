---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-map/particleffects
scraped_at: 2025-07-31T17:11:03.838136
description: loc
keywords: flutter
---

# 粒子效果

## 简介

Since 3.5.0起地图插件支持在地图上展示粒子效果，目前支持：雪花、雷雨、雾霾、沙尘、烟花、花瓣多种效果展示及自定义。

## 展示粒子效果

示例代码如下：
```java
BMFParticleEffectType _effectType = BMFParticleEffectType.PUnknow;
bool suc = await myMapController.showParticleEffect(_effectType);
if (suc) {
  print('粒子效果设置成功');
} else {
  print('粒子效果设置失败');
}
```
## 关闭粒子效果

示例代码如下：
```java
bool suc = await myMapController.closeParticleEffect(_effectType);
```
## 自定义粒子效果

示例代码如下：
```java
List<String> imgs = [];
imgs.add('resoures/below_s.png');
imgs.add('resoures/driving.png');
BMFParticleEffectOption option = BMFParticleEffectOption(
  location: BMFCoordinate(39.98192, 116.324356), images: imgs);
myMapController.customParticleEffectWithOption(_effectType, option);
bool suc = await myMapController.showParticleEffect(_effectType);
if (suc) {
  print('自定义粒子效果设置成功');
} else {
  print('自定义粒子效果设置失败');
}
```
## 运行程序

效果如下：

![粒子效果视频](//mapopen-website-webapi.bj.bcebos.com/images/flutter/map/particleffectsVideos.MP4)