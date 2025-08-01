---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/dynamicTrajectory
scraped_at: 2025-07-31T17:10:00.589190
description: loc
keywords: flutter
---

# 绘制动态轨迹

## 简介

Since 3.5.0 动态轨迹支持渐变色绘制和.gltf+.bin模型加载，并支持动画播放。

示例代码如下：
```javascript
/// 构造动态轨迹动画参数
BMFTraceOverlayAnimateOption traceOverlayAnimateOption = 
    BMFTraceOverlayAnimateOption(
  animate: true,
  delay: 0.0,
  duration: 8,
  fromValue: 0.0,
  toValue: 1.0,
  easingCurve: BMFTraceOverlayAnimationEasingCurve.Linear,
  trackMove: false,
  isPointMove: true,
  isRotateWhenTrack: true,
  modelOption: BMFTrace3DModelOption(
      modelName: "scenes",
      modelPath: 'resoures/Model3D',
      yawAxis: BMFTraceOverlay3DModelYawAxis.YawAxisX,
      scale: 3.0,
      zoomFixed: true,
      animationIsEnable: true,
      animationIndex: 1,
      type: BMF3DModelType.BMF3DModelTypeGLTF),
);

/// 构造动态轨迹
_traceOverlay = BMFTraceOverlay(
    coordinates: coords,
    traceOverlayAnimateOption: traceOverlayAnimateOption,
    isThined: true,
    isTrackBloom: true,
    isGradientColor: true,
    bloomSpeed: 5.0,
    isCornerSmooth: false,
    strokeColors: colors);
await myMapController.addTraceOverlay(_traceOverlay);
```
显示效果如图：

![动态轨迹效果](//mapopen-website-webapi.bj.bcebos.com/images/flutter/map/trajectory_demo_1.mp4)