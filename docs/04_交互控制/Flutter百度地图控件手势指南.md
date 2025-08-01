---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/interaction/gesture
scraped_at: 2025-07-31T17:01:01.547156
description: loc
keywords: flutter
---

# Flutter | 百度地图API SDK

## 控件和手势

### 地图控件

#### 地图Logo

默认在左下角显示，不可以移除。

通过以下方法，使用枚举类型控制显示的位置，共支持6个显示位置(左下，中下，右下，左上，中上，右上)。

通过`updateMapOptions`接口来更新logo位置。
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(logoPosition: BMFLogoPosition.LeftTop)
);
```
地图Logo不允许遮挡，可通过以下方法可以设置地图边界区域，来避免UI遮挡。设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(mapPadding: BMFEdgeInsets(left: 30, top: 0, right: 30, bottom: 0))
);
```
其中参数`left`, `top`, `right`, `bottom`参数表示距离屏幕边框的左、上、右、下边距的距离，单位为屏幕坐标的像素密度。

注意：根据[百度地图API使用条款](http://lbsyun.baidu.com/index.php?title=open/law)您的应用不得删除或覆盖百度地图logo或版权声明。地图内边距允许您在必要时重新定位这些元素，若您需要在地图布局顶底部显示自定义UI，请设置内边距以保证百度地图logo和版权声明始终可见。

#### 指南针

自定义指南位置，`BMFPoint`单位为屏幕坐标的像素密度，设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(compassPosition: BMFPoint(0, 0))
);
```
#### 比例尺

比例尺默认为开启状态，如设置`false`可以关闭显示。设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(showMapScaleBar: false)
);
```
设置地图最大缩放级别，示例代码中最大缩放级别是15级，设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(maxZoomLevel: 15)
);
```
设置地图最小缩放级别，示例代码中最小缩放级别是8级，设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(minZoomLevel: 8)
);
```
### 地图手势

#### 地图平移

控制是否启用或禁用平移的功能，默认开启。如果设置`false`，则用户不可以平移地图。设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(scrollEnabled: true)
);
```
#### 地图缩放

控制是否启用或禁用缩放手势，默认开启。如果设置`false`，则用户不可以双指点击或缩放地图视图。设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(zoomEnabled: true)
);
```
#### 地图俯视

控制是否启用或禁用俯视功能，默认开启。如果设置`false`，则用户不可使用双指向下或向上滑动到俯视图。设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(overlookEnabled: true)
);
```
#### 地图旋转

控制是否启用或禁用地图旋转功能，默认开启。如果设置`false`，则用户不可使用双指旋转来旋转地图。设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(rotateEnabled: true)
);
```
#### 禁止所有手势

控制是否一并禁止所有手势，默认不禁止。如果设置`false`，所有手势都将被禁用。设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(gesturesEnabled: true)
);
```
#### 双击地图是否按中心点放大

控制是否设置双击地图按照当前地图中心点放大。默认：`true` 即按照双击位置放大地图，如果设置`false`，以当前地图的中心点为中心进行放大。设置方法如下：
```javascript
myMapController.updateMapOptions(
    BMFMapOptions(changeCenterWithDoubleTouchPointEnabled: true)
);
```