---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-map/indoormap
scraped_at: 2025-07-31T16:55:29.288905
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 室内地图

### 室内地图简介

辅助开发者实现全新的地理位置服务体验，室内地图与百度地图App同步更新。支持的公众建筑包含购物商场、机场和火车站等交通枢纽，医院等，截至2020年6月覆盖全国约5000+个大型购物中心，覆盖类型和城市还在持续增加中。

本章节将对显示室内图、获取室内图信息、楼层切换进行介绍。

### 显示室内地图

开启室内地图后，如果可见区域内包含室内地图覆盖区域（如：王府井等知名商场），且缩放达到一定级别，便可直接在地图上看到精细室内地图效果。室内图最大支持22级地图缩放。

打开室内图的代码如下：
```javascript
myMapController?.showBaseIndoorMap(true)
```
显示效果如图：

![shinei1.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/shinei1.jpg)

**注意：**

1. 因路况图和城市热力图最大缩放级别为21、卫星图支持最大缩放级别为20，当室内地图放大到22级时，打开路况、卫星图或城市热力图，无相应数据显示。
2. 室内图默认是关闭的。

### 获取室内图信息以及实现楼层切换

需要对室内图进行更多的操作，包括获取室内图信息以及实现楼层切换，您可以采用如下方式：

#### 监听进出室内图

设置监听事件来监听进入和移出室内图：
```javascript
myMapController?.setMapInOrOutBaseIndoorMapCallback(
    callback: (bool flag, BMFBaseIndoorMapInfo baseIndoorMapInfo) {
      setState(() {
        _indoorMapInfo = baseIndoorMapInfo;
      });
      print(`地图View进入/移出室内图会调用此方法flag=$flag + MapInfo=${baseIndoorMapInfo.toMap()}`);
    }
);
```
#### 楼层间地图切换

实现楼层间地图切换,展示不同楼层的室内图：
```javascript
/// 切换楼层信息
/// floorId, indoorId通过 getFocusedBaseIndoorMapInfo()方法获得
Future<BMFSwitchIndoorFloorError> switchFloorError = myMapController?.switchBaseIndoorMapFloor(floorId, indoorId);
```
上面代码中，`floorId`表示室内图楼层,格式为“F1”（地上一层）,“B1”（地下一层）。`indoorId` 表示室内图ID；返回值`switchFloorError` 用于标识楼层切换错误信息。

详情参考`flutter_bmfmap` example中的`ShowIndoorMapPage`。