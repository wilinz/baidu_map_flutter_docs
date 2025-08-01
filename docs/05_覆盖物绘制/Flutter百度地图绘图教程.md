---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/ploygon
scraped_at: 2025-07-31T17:07:35.263752
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 绘制弧线和面

本章节将对绘制弧线、绘制圆以及多边形进行说明。

### 绘制弧线

弧线由Arc类定义，一条弧线由起点、中点和终点三个点确定位置。

示例代码如下：
```javascript
/// 坐标点
List<BMFCoordinate> coordinates = List(3);
coordinates[0] = BMFCoordinate(40.065, 116.224);
coordinates[1] = BMFCoordinate(40.125, 116.404);
coordinates[2] = BMFCoordinate(40.065, 116.504);

/// 构造ArcLine
BMFArcline arcline = BMFArcline(
        coordinates: coordinates,
        lineDashType: BMFLineDashType.LineDashTypeNone,
        width: 6,
        color: Colors.blue);

/// 添加arcLine
myMapController?.addArcline(arcline);
```
绘制效果如图：

![huxian.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/huxian.jpg)

### 绘制圆

圆由BMFCircle类定义，开发者可以通过BMFCircle类设置圆心位置、半径(米)、边框以及填充颜色。

示例代码如下：
```javascript
/// 构造圆
BMFCircle circle = BMFCircle(
        center: BMFCoordinate(40.048, 116.404),
        radius: 5000,
        width: 6,
        strokeColor: Colors.green,
        fillColor: Colors.amber,
        lineDashType: BMFLineDashType.LineDashTypeSquare);

/// 添加圆
myMapController?.addCircle(circle);
```
绘制效果如图：

![circle.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/circle.jpg)

实例代码如下：
```javascript
// 多边形镂空图形：
List<BMFHollowShape> hollowShapes = [];
// 图形数据模型 
List<BMFCoordinate> coordinates = List(4); // 经纬度数据 

coordinates[0] = BMFCoordinate(40.055056, 116.309102); 
coordinates[1] = BMFCoordinate(40.055056, 116.307102); 
coordinates[2] = BMFCoordinate(40.057056, 116.307102); 
coordinates[3] = BMFCoordinate(40.057056, 116.309102); 

BMFHollowShape polygonHollowShape = 
    BMFHollowShape.polygon(coordinates: coordinates); 
hollowShapes.add(polygonHollowShape); 

_circle0.updateHollowShapes(hollowShapes);

// 圆形镂空图形
List<BMFHollowShape> hollowShapes = [];
BMFHollowShape circleHollowShape = 
    BMFHollowShape.circle(center: _circle0.center, radius: 100); 
hollowShapes.add(circleHollowShape); 
_circle0.updateHollowShapes(hollowShapes);
```
显示的效果如下：

![circleyuanloukong.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/circleyuanloukong.jpg)

### 绘制多边形

多边形由BMFPolygon类定义。开发者可以通过BMFPolygon来设置多边形的位置、边框和填充颜色。一个多边形是一组Latlng点按照传入顺序连接而成的封闭图形。

示例代码如下：
```javascript
/// 坐标点
List<BMFCoordinate> coordinates = List(5);
coordinates[0] = BMFCoordinate(39.965, 116.204);
coordinates[1] = BMFCoordinate(39.865, 116.204);
coordinates[2] = BMFCoordinate(39.865, 116.304);
coordinates[3] = BMFCoordinate(39.905, 116.254);
coordinates[4] = BMFCoordinate(39.965, 116.304);

/// 构造Polygon
BMFPolygon polygon = BMFPolygon(
        coordinates: coordinates,
        strokeColor: Colors.blue,
        width: 4,
        fillColor: Colors.brown);

/// 添加polygon
myMapController?.addPolygon(polygon);
```
绘制效果如图：

![polygon.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/polygon.jpg)

示例代码如下：
```javascript
// 多边形镂空图形：
List<BMFHollowShape> hollowShapes1 = [];
// 图形数据模型 
List<BMFCoordinate> coordinates1 = List(5); 
coordinates1[0] = BMFCoordinate(39.925, 116.525); 
coordinates1[1] = BMFCoordinate(39.885, 116.525); 
coordinates1[2] = BMFCoordinate(39.885, 116.575); 
coordinates1[3] = BMFCoordinate(39.925, 116.575); 
coordinates1[4] = BMFCoordinate(39.945, 116.550); 

BMFHollowShape polygonHollowShape1 = 
    BMFHollowShape.polygon(coordinates: coordinates1); 
hollowShapes1.add(polygonHollowShape1); 

_polygon1.updateHollowShapes(hollowShapes1);

///圆形镂空图形： 
BMFCoordinate center1 = BMFCoordinate(39.920, 116.550); // 中心点坐标 
BMFHollowShape circleHollowShape1 = 
    BMFHollowShape.circle(center: center1, radius: 1500); 
hollowShapes1.add(circleHollowShape1); 
_polygon1.updateHollowShapes(hollowShapes1);
```
显示的效果如下：

![polygonyuanloukong.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/polygonyuanloukong.jpg)