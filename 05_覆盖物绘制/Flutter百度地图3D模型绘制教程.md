---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/threeDimensionalModel
scraped_at: 2025-07-31T16:56:38.494764
description: loc
keywords: flutter
---

# 绘制3D模型

## 简介

Since 3.1.0 起地图Flutter插件支持3D模型（BMF3DModelOverlay）绘制，用于在地图上展示3D模型，目前支持obj+mtl文件格式模型加载。

示例代码如下：
```javascript
BMF3DModelOption option = BMF3DModelOption(
    modelPath: 'resoures/Model3D',
    modelName: 'among_us',
    scale: 5);

_modelOverlay = BMF3DModelOverlay(
    center: BMFCoordinate(39.915119, 116.403963),
    option: option);

myMapController.add3dModelOverlay(_modelOverlay);
```
显示效果如图：

![polyline10.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/polyline10.png)