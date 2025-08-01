---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/interaction/event
scraped_at: 2025-07-31T17:01:53.211211
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 事件交互

本章节将对地图监听事件做介绍，地图事件监听（地图状态改变、各种手势、截屏）等。

### 地图事件监听

SDK定义了各种地图相关事件的监听，提供相应的事件监听方法，包括地图状态的改变、手势事件、地图渲染、地图截屏事件等。如下所示：

#### 地图加载完成

设置地图加载完成回调：
```javascript
/// 地图加载回调
myMapController?.setMapDidLoadCallback(callback: () {
});
```
#### 地图渲染完成

设置地图渲染完成回调：
```javascript
/// 地图渲染完成回调
myMapController?.setMapDidFinishedRenderCallback(callback: (bool success) {
});
```
#### 地图渲染帧

设置地图渲染每一帧画面过程中，以及每次需要重绘地图时（例如添加覆盖物）回调接口：
```javascript
/// 地图渲染每一帧画面过程中，以及每次需要重绘地图时（例如添加覆盖物）都会调用此接口
myMapController?.setMapOnDrawMapFrameCallback(callback: (BMFMapStatus mapStatus) {
});
```
#### 地图区域即将改变

设置地图区域即将改变时会调用此接口：
```javascript
/// 地图区域即将改变时会调用此接口
/// mapStatus 地图状态信息
myMapController?.setMapRegionWillChangeCallback(callback: (BMFMapStatus mapStatus) {
});
```
#### 地图区域改变完成

设置地图区域改变完成后会调用接口：
```javascript
/// 地图区域改变完成后会调用此接口
/// mapStatus 地图状态信息
myMapController?.setMapRegionDidChangeCallback(callback: (BMFMapStatus mapStatus) {
});
```
#### 区域即将改变(reason)

设置地图区域即将改变时会调用接口，带有reason返回值：
```javascript
/// 地图区域即将改变时会调用此接口
/// mapStatus 地图状态信息
/// regionChangeReason 地图改变原因
myMapController?.setMapRegionWillChangeWithReasonCallback(callback: (BMFMapStatus mapStatus, BMFRegionChangeReason regionChangeReason) {
});
```
#### 区域改变完成(reason)

设置地图区域改变完成后会调用接口，带有reason返回值：
```javascript
/// 地图区域改变完成后会调用此接口
/// mapStatus 地图状态信息
/// regionChangeReason 地图改变原因
myMapController?.setMapRegionDidChangeWithReasonCallback(callback: (BMFMapStatus mapStatus, BMFRegionChangeReason regionChangeReason) {
});
```
#### 点击底图空白处

设置点击底图空白处会回调接口：
```javascript
/// 点中底图空白处会回调此接口
/// coordinate 经纬度
myMapController?.setMapOnClickedMapBlankCallback(callback: (BMFCoordinate coordinate) {
});
```
#### 点中底图标注后

设置点中底图标注后会回调接口：
```javascript
/// 点中底图标注后会回调此接口
myMapController?.setMapOnClickedMapPoiCallback(callback: (BMFMapPoi mapPoi) {
});
```
#### 双击地图

双击地图时会回调此接口：
```javascript
/// 双击地图时会回调此接口
/// coordinate 经纬度
myMapController?.setMapOnDoubleClickCallback(callback: (BMFCoordinate coordinate) {
});
```
#### 长按地图

设置长按地图时会回调接口：
```javascript
/// 长按地图时会回调此接口
myMapController?.setMapOnLongClickCallback(callback: (BMFCoordinate coordinate) {
});
```
#### 3DTouch 点击地图

3DTouch 点击地图时会回调此接口：

注：目前ios支持，Android不支持
```javascript
/// 3DTouch 按地图时会回调此接口
///（仅在支持3D Touch，且fouchTouchEnabled属性为true时，会回调此接口）
/// coordinate 触摸点的经纬度
/// force 触摸该点的力度(参考UITouch的force属性)
/// maximumPossibleForce 当前输入机制下的最大可能力度(参考UITouch的maximumPossibleForce属性)
myMapController?.setMapOnForceTouchCallback(callback: (BMFCoordinate coordinate, double force, double maximumPossibleForce) {
});
```
#### 地图状态改变完成

设置地图状态改变完成后回调接口：
```javascript
/// 设置地图状态改变完成后回调接口
myMapController?.setMapStatusDidChangedCallback(callback: () {
});
```
#### 进入移出室内地图

设置地图View进入/移出室内地图回调接口：
```javascript
/// 地图View进入/移出室内图会调用此方法
/// flag YES:进入室内图，false：移出室内图
/// baseIndoorMapInfo 室内图信息
myMapController?.setMapInOrOutBaseIndoorMapCallback(callback: (bool flag, BMFBaseIndoorMapInfo baseIndoorMapInfo) {
});
```
### 地图截屏

地图截屏接口：
```javascript
void takeSnapshort() async {
  Uint8List image = await myMapController?.takeSnapshot();
}
```