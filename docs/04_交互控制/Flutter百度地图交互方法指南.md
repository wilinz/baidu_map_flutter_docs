---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/interaction/method
scraped_at: 2025-07-31T17:03:27.722929
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 方法交互

本章节将对各种地图交互方法的设置做介绍，包括改变地图缩放等级、设置地图操作区域和屏幕的边的距离，设置地图显示范围、改变地图类型和控件显示状态、改变地图手势对的中心点、隐藏地图标注等。

### 改变地图缩放等级

根据场景的不同可以分别通过以下几种方法改变地图缩放级别。示例如下：
```javascript
/// 更新地图缩放级别:(4-21)
/// animateDurationMs 动画更新时间
myMapController.setNewMapStatus(mapStatus: BMFMapStatus(fLevel: 16), animateDurationMs: 1000);

/// map放大一级比例尺
myMapController?.zoomIn();

/// map缩小一级比例尺
myMapController?.zoomOut();

/// 按像素移动地图中心点(IOS不支持该接口)
/// xPixel 水平方向移动像素数
/// yPixel 垂直方向移动像素数
/// animateDurationMs 动画更新时间
myMapController?.setScrollBy(30, 30, animateDurationMs: 1000);

/// 根据给定增量以及给定的屏幕坐标缩放地图级别(IOS不支持该接口)
/// amount 地图缩放级别增量
/// [BMFPoint] focus  地图缩放中心点屏幕坐标, 若为 null 则返回 null
/// animateDurationMs 动画更新时间
myMapController?.setZoomPointBy(10, BMFPoint(100, 199), animateDurationMs: 1000);

/// 设置地图缩放级别
/// zoom 设置地图缩放级别
/// animateDurationMs 动画更新时间
myMapController?.setZoomTo(10.0, animateDurationMs: 1000);

/// 设置地图中心点以及缩放级别(IOS不支持该接口)
/// [BMFCoordinate]coordinate 要设定的地图中心点坐标，用经纬度表示
/// zoom 缩放级别
/// animateDurationMs 动画时间
myMapController?.setNewLatLngZoom(coordinate: BMFCoordinate(36.114633, 116.322387), zoom: 10, animateDurationMs: 1000);
```
此外，上述更新状态中开发者可以通过`animateDurationMs`参数来设置是否需要动画方式更新地图级别。`animateDurationMs`是可选参数，如不需要动画方式更新可不用设置该参数。

> 注意：当设置的地图缩放级别超出SDK支持的最大或最小级别时对应以最大或最小缩放级别显示。

### 设置地图显示范围

可以通过如下两种方法来设置地图显示范围。

1. 设置显示在屏幕中的地图地理范围。示例如下：
```javascript
/// 构建地理范围
BMFCoordinateBounds visibleMapBounds = 
    BMFCoordinateBounds(northeast: BMFCoordinate(39.94001804746338, 116.41224644234747),
        southwest: BMFCoordinate(39.90299859954822, 116.38359947963427));

/// 设置显示在屏幕中的地图地理范围
/// [BMFCoordinateBounds]visibleMapBounds 要设定的地图范围(东北，西南)角坐标
/// animated 是否采用动画效果 (ios)独有
myMapController?.setVisibleMapBounds(visibleMapBounds, false);
```
2. 设置显示在指定相对于MapView的padding中的地图地理范围。示例如下：
```javascript
// 构造Bounds范围
BMFCoordinateBounds visibleMapBounds = 
    BMFCoordinateBounds(northeast: BMFCoordinate(39.94001804746338, 116.41224644234747),
        southwest: BMFCoordinate(39.90299859954822, 116.38359947963427));

// 设置padding边距，单位像素
EdgeInsets insets  = EdgeInsets.only(left: 30, top: 0, right: 30, bottom: 0);

// 设置显示在指定相对于MapView的padding中的地图地理范围
// [BMFCoordinateBounds]visibleMapBounds 要设定的地图范围(东北，西南)角坐标
// [EdgeInsets]insets 指定的四周边界大小
// animated 是否采用动画效果(ios)独有
myMapController?.setVisibleMapRectWithPaddingHandler(visibleMapBounds:visibleMapBounds, insets:insets, animated:false);
```
> 注：更新时动画效果目前ios支持。Android暂不支持。

### 改变地图中心点

地图手势旋转等操作是以地图中心点为标准做旋转的，有两种方式修改地图中心点, 通过如下方法设置地图中心点。

1. 带有动画参数的方式。设置方法为：
```javascript
// 设定地图中心点坐标
// [BMFCoordinate] coordinate 要设定的地图中心点坐标，用经纬度表示
// animated 是否采用动画效果(ios) 支持
// animateDurationMs 动画更新时间(android)支持
// bool 成功返回true 失败false
myMapController?.setCenterCoordinate(BMFCoordinate(39.90, 116.40), true, animateDurationMs: 1000);
```
> 注：因为Android 和ios更新动画更新机制不同，animated 参数是设置ios动画更新方式的，设置true是需要动画，false 是不需要。Android是通过animateDurationMs 设定动画时长来更新的，参数类型是毫秒。Android动画是可选参数，如不需要动画可不设置。

2. 更新地图Options方式更新中心点。 设置方法为：
```javascript
// 经纬度BMFCoordinate构造方法
myMapController.updateMapOptions(BMFMapOptions(center: BMFCoordinate(39.90, 116.40)));
```
### 限制地图的显示范围

地图状态改变时，该范围不会在地图显示范围外。设置成功后，会调整地图显示该范围。设置方法如下：
```javascript
// 构造Bounds范围
BMFCoordinateBounds visibleMapBounds = 
    BMFCoordinateBounds(northeast: BMFCoordinate(39.94001804746338, 116.41224644234747),
    southwest: BMFCoordinate(39.90299859954822, 116.38359947963427));

// 限制地图的显示范围
myMapController.updateMapOptions(BMFMapOptions(limitMapBounds:visibleMapBounds));
```
### 更新地图旋转角度

设置方法如下：
```javascript
myMapController.setNewMapStatus(mapStatus: BMFMapStatus(fRotation: 80));
```
### 更新地图俯仰角

地图俯仰角度设置范围-45~0。设置方法如下：
```javascript
myMapController.setNewMapStatus(mapStatus: BMFMapStatus(fOverlooking: -45));
```