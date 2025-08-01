---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/manyMarker
scraped_at: 2025-07-31T17:06:14.910025
description: loc
keywords: flutter
---

# 绘制海量点

## 简介

Since 3.1.0 起地图Flutter插件支持海量点图层（BMFMultiPointOverlay）绘制，用于批量展现坐标点数据。

示例代码如下：
```javascript
/// 读取海量点
String coordinateString = await rootBundle.loadString('resoures/10w.txt');
// print('coordinateString = ${coordinateString}');

/// string -> list
List<String> coordStringList = coordinateString.split('\n');

/// 海量点
List<BMFMultiPointItem> items = [];
for (var i = 0; i < 100000; i++) {
    List<String> itemString = coordStringList[i].split(',');
    BMFCoordinate coordinate = BMFCoordinate(
        double.parse(itemString[1]), double.parse(itemString[0]));
    BMFMultiPointItem item = BMFMultiPointItem(
        coordinate: coordinate, title: '${i}');
    items.add(item);
}

/// 构造海量点overlay
_multiPointOverlay = BMFMultiPointOverlay(
    items: items, icon: 'resoures/marker_blue.png');
await myMapController.addMultiPointOverlay(_multiPointOverlay);
```
显示效果如图：

![polyline9.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/polyline9.png)