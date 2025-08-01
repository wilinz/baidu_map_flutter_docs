---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/threeDimensionalball
scraped_at: 2025-07-31T17:10:46.858815
description: loc
keywords: flutter
---

# 绘制3D棱柱

## 简介

Since3.1.0起地图Flutter插件支持3D棱柱（BMFPrismOverlay）绘制。提供一组多边形有序序列的点，根据序列点和高度生成3D棱柱。

示例代码如下：
```javascript
/// 棱柱围点
List<BMFCoordinate> coords = [
    BMFCoordinate(23.1007972, 113.5056531),
    BMFCoordinate(23.1007758, 113.5056175),
    BMFCoordinate(23.1007452, 113.5056388),
    BMFCoordinate(23.1007892, 113.505714),
    BMFCoordinate(23.1008206, 113.5056922),
    BMFCoordinate(23.1007972, 113.5056531)
];

/// 构造3d棱柱
_prismOverlay = BMFPrismOverlay.colorPrismOverlay(
    coordinates: coords,
    topFaceColor: Colors.green,
    sideFaceColor: Colors.green,
    height: 20
);
myMapController.addPrismOverlay(_prismOverlay);
```
显示效果如图：

![polyline8.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/polyline8.png)