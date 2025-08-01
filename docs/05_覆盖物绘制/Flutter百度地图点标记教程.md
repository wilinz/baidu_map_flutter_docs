---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/point
scraped_at: 2025-07-31T17:10:26.278158
description: loc
keywords: flutter
---

# 绘制点标记

本章节将对点标记、添加Marker、绘制自定义Marker、Marker点击和拖拽操作、POI底图标注等做进一步说明。

### 点标记

点标记用来在地图上标记任何位置，例如用户位置、车辆位置、店铺位置等一切带有位置属性的事物。

地图 SDK 提供的点标记功能包含两大部分，一部分是点（Marker）同时，SDK 对 Marker 封装了大量的触发事件，例如点击事件、长按事件、拖拽事件。

由于内容丰富，以下只能展示一些基础功能的使用，详细内容可参考类参考文档。

### 添加Marker

开发者可以根据自己实际的业务需求，利用标注覆盖物，在地图指定的位置上添加标注信息。开发者通过BMFMarker类来设置Marker的属性。

绘制Marker的代码如下：
```javascript
/// 创建BMFMarker
BMFMarker marker = BMFMarker(
        position: BMFCoordinate(39.928617, 116.40329),
        title: 'flutterMaker',
        identifier: 'flutter_marker',
        icon: 'resoures/icon_end.png');

/// 添加Marker
myMapController?.addMarker(marker);
```
![dbj.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/dbj.jpg)

BMFMarker包含多种可供设置的属性。常用属性如下：

### 可触发的Marker事件

#### Marker点击事件

点击Marker时会回调BaiduMap.OnMarkerClickListener，监听器的实现方式示例如下：
```javascript
/// 地图marker点击回调
myMapController?.setMapClickedMarkerCallback(
    callback: (BMFMarker marker) {
    });
```
#### Marker拖拽事件

在拖拽Marker时会回调BaiduMap.OnMarkerDragListener，监听器的实现方式如下(要在构造MarkerOptions时开启draggable):
```javascript
/// 拖拽marker点击回调
myMapController?.setMapDragMarkerCallback(
    callback: (BMFMarker marker) {
    });
```
### Marker更新接口

（此处省略具体接口内容）