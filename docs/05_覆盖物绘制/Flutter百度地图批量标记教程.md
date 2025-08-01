---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/points
scraped_at: 2025-07-31T16:57:20.177726
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 批量添加

百度地图SDK为开发者提供一次性向地图上添加大批量Overlay的接口。

示例代码（示例代码中一次性添加两个个Marker，更大量Overlay的添加方法同理。）：
```javascript
BMFMarker marker0 = BMFMarker(
          position: BMFCoordinate(39.928617, 116.40329),
          title: '第一个',
          subtitle: 'test',
          identifier: 'flutter_marker',
          icon: 'resoures/icon_ugc_start.png',
          enabled: enable,
          draggable: dragable);

BMFMarker marker1 = BMFMarker(
          position: _startPos,
          title: '第二个',
          subtitle: 'test',
          identifier: 'flutter_marker',
          icon: 'resoures/icon_binding_point.png',
          enabled: enable,
          draggable: dragable);

List<BMFMarker> markers = [];
markers.add(marker0);
markers.add(marker1);
myMapController?.addMarkers(markers);
```
显示效果如图：

![dbj.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/dbj.jpg)

## 批量删除

百度地图SDK提供一次性清除地图上的所有覆盖物（Overlay对象和infoWindow）的接口。

示例代码：
```javascript
/// 清除地图上的所有Marker
myMapController?.removeMarkers(_markers)
```