---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/guide/equipmentOrientation
scraped_at: 2025-07-31T17:02:05.429816
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 设备朝向

### 1. 引入包名
```javascript
import 'package:flutter_bmflocation/bdmap_location_flutter_plugin.dart';
```
### 2. 初始化定位插件类
```javascript
final LocationFlutterPlugin _myLocPlugin = LocationFlutterPlugin();
```
### 3. 设置设备朝向回调，获取结果
```javascript
_myLocPlugin.updateHeadingCallback(callback: (BaiduHeading result) {
  /// to do something
});
```
### 4. 开启设备朝向监听
```javascript
_suc = await _myLocPlugin.startUpdatingHeading();
```
### 5. 停止设备朝向监听
```javascript
_suc = await _myLocPlugin.stopUpdatingHeading();
```