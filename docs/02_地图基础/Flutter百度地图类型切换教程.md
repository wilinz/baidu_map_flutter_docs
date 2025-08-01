---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-map/maptype
scraped_at: 2025-07-31T17:05:08.731786
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 切换地图类型

百度地图Flutter插件提供了三种预置的地图类型:普通地图，卫星地图，空白地图。下面主要介绍如何切换这三种地图类型。

### 地图类型

百度地图Flutter插件为您提供了3种类型的地图资源（普通矢量地图、卫星图和空白地图），`BMFMapType` 类提供图层类型常量，详细如下：

开发者可以在地图组件创建的时候，通过设置`BMFMapOptions`的`mapType`的值，或者动态通过`BMFMapController`的接口`updateMapOptions`(设置`mapType`)设置地图类型。

### 卫星图

显示卫星照片数据。

设置卫星地图的代码如下：
```javascript
myMapController?.updateMapOptions(BMFMapOptions(mapType: BMFMapType.Satellite));
```
现实的效果如下：

![weixingtu.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/weixingtu.png)

### 普通地图

基础的道路地图。 显示道路、建筑物、绿地以及河流等重要的自然特征。

设置普通地图的代码如下：
```javascript
myMapController?.updateMapOptions(BMFMapOptions(mapType: BMFMapType.Standard));
```
显示的效果如下：

![cjdt.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/cjdt.jpg)

### 空白地图

无地图瓦片,地图将渲染为空白地图。不加载任何图块，将不会使用流量下载基础地图瓦片图层。支持叠加任何覆盖物。

适用场景:与瓦片图层（`BMFTile`）一起使用，节省流量，提升自定义瓦片图下载速度。参考自[定义瓦片图](https://lbsyun.baidu.com/faq/api?title=androidsdk/guide/render-map/overlay)相应部分的使用介绍。

设置空白地图的代码如下：
```javascript
myMapController?.updateMapOptions(BMFMapOptions(mapType: BMFMapType.None));
```
显示的效果如下：

![kbdt.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/kbdt.jpg)

### 路况图

全实时路况图全国范围内已支持绝大部分城市实时路况查询，路况图依据实时路况数据渲染。普通地图和卫星地图，均支持叠加实时路况图。

设置路况图的代码如下：
```javascript
myMapController?.updateMapOptions(BMFMapOptions(trafficEnabled: _trafficEnabled));
```
显示的效果如下：

![lukuangtushili.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/lukuangtushili.jpg)