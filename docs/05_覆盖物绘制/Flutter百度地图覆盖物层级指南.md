---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/interaction/order
scraped_at: 2025-07-31T16:56:03.394137
description: loc
keywords: flutter
---

# Flutter | 百度地图API SDK

## 地图元素压盖顺序

所有叠加或覆盖到地图的内容，我们统称为地图覆盖物。如标注、矢量图形元素（包括：折线、多边形和圆等）、定位图标等。覆盖物拥有自己的地理坐标，当您拖动或缩放地图时，它们会相应的移动。

百度地图SDK为广大开发者提供的基础地图和上面的各种覆盖物元素，具有一定的层级压盖关系，具体如下（从上至下的顺序）：

1. 自定义View (`MapView.addView(View);`)
2. 弹出窗图层 (`InfoWindow`)
3. 定位图层 (`BaiduMap.setMyLocationEnabled(true);`)
4. 指南针图层（当地图发生旋转和视角变化时，默认出现在左上角的指南针）
5. 标注图层（`Marker`），文字绘制图层（`Text`）
6. 几何图形图层（点、折线、弧线、圆、多边形）
7. 底图标注（指的是底图上面自带的那些POI元素）
8. 百度城市热力图 (`BaiduMap.setBaiduHeatMapEnabled(true);`)
9. 实时路况图图层 (`BaiduMap.setTrafficEnabled(true);`)
10. 热力图图层 (`HeatMap`)
11. 地形图图层 (`GroundOverlay`)
12. 瓦片图层 (`TileOverlay`)
13. 基础底图（包括底图、底图道路、卫星图、室内图等）