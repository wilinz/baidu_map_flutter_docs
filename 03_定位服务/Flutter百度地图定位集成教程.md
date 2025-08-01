---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-map/location
scraped_at: 2025-07-31T17:05:27.284398
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 坐标系说明

Android定位SDK产品，支持全球定位，能够精准的获取经纬度信息。根据开发者的设置，在国内获得的坐标系类型可以是：国测局坐标、百度墨卡托坐标 和 百度经纬度坐标。在海外地区，只能获得WGS84坐标。请开发者在使用过程中注意坐标选择。定位SDK默认输出GCJ02坐标，地图SDK默认输出BD09ll坐标。

## 显示定位

通过如下几步您便可以在自己的地图中展示当前所在位置的定位点。

### 1. 开启地图的定位图层
```javascript
myMapController?.showUserLocation(true);
```
### 2. 更新位置

这里的位置信息的经纬度属性coordinate是固定的，如果要获取当前位置真实的经纬度信息，可以参考定位Flutter插件文档集成定位Flutter插件，并获取当前位置的真实经纬度。
```javascript
BMFCoordinate coordinate = BMFCoordinate(39.965, 116.404);

BMFLocation location = BMFLocation(
        coordinate: coordinate,
        altitude: 0,
        horizontalAccuracy: 5,
        verticalAccuracy: -1.0,
        speed: -1.0,
        course: -1.0);

BMFUserLocation userLocation = BMFUserLocation(
      location: location);

myMapController?.updateLocationData(userLocation);
```
### 3. 更新定位图层样式
```javascript
BMFUserlocationDisplayParam displayParam = BMFUserlocationDisplayParam(
            locationViewOffsetX: 0,
            locationViewOffsetY: 0,
            accuracyCircleFillColor: Colors.red,
            accuracyCircleStrokeColor: Colors.blue,
            isAccuracyCircleShow: true,
            locationViewImage: 'resoures/animation_red.png',
            locationViewHierarchy: BMFLocationViewHierarchy.LOCATION_VIEW_HIERARCHY_BOTTOM);

myMapController?.updateLocationViewWithParam(displayParam);
```
完成以上步骤，即可在您的地图应用中显示当前位置的点，如下图中的红色点标记：

![location_view.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/location_view.jpg)

上图为18级缩放下的显示效果。

## 自定义内容

通过BMFUserlocationDisplayParam类来构造包括定位模式、设置自定义定位图标、精度圈填充颜色以及精度圈边框颜色等属性。

另外有两个属性不可以通过上述方法设置，说明如下：

### 定位精度圈大小

定位精度圈大小 ，是根据当前定位精度自动控制的，无法手动控制大小。精度圈越小，代表当前定位精度越高；反之圈越大，代表当前定位精度越低。

### 定位指针方向

定位指针朝向，是通过获取手机系统陀螺仪数据，控制定位指针的方向，需要开发者自己实现，并不在地图实现范畴。

## 定位的频次自定义

开发者可以自行设置获取定位的时间间隔，详细的设置方法可以参考定位Flutter插件。