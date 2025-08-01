---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/guide/solocationMany
scraped_at: 2025-07-31T17:03:00.499223
description: loc
keywords: flutter
---

# 连续定位

在鉴权成功且同意隐私政策的情况下使用定位步骤如下：

## 1. 引入包名
```javascript
import 'package:flutter_bmflocation/bdmap_location_flutter_plugin.dart';
```
## 2. 初始化定位插件类
```javascript
final LocationFlutterPlugin _myLocPlugin = LocationFlutterPlugin();
```
## 3. 设置定位回调获取定位结果，[定位接口说明](https://lbsyun.baidu.com/faq/api?title=flutter/loc/guide/interface)
```javascript
/* 接受定位回调 */
_myLocPlugin.seriesLocationCallback(callback: (BaiduLocation result) {
    setState(() {
        _loationResult = result;
        _locationFinish();
    });
});
```
## 4. 设置定位参数

### Android端
```javascript
BaiduLocationAndroidOption initAndroidOptions() {
    BaiduLocationAndroidOption options = BaiduLocationAndroidOption(
        // 定位模式，可选的模式有高精度、仅设备、仅网络。默认为高精度模式
        locationMode: BMFLocationMode.hightAccuracy,
        // 是否需要返回地址信息
        isNeedAddress: true,
        // 是否需要返回海拔高度信息
        isNeedAltitude: true,
        // 是否需要返回周边poi信息
        isNeedLocationPoiList: true,
        // 是否需要返回新版本rgc信息
        isNeedNewVersionRgc: true,
        // 是否需要返回位置描述信息
        isNeedLocationDescribe: true,
        // 是否使用gps
        openGps: true,
        // 可选，设置场景定位参数，包括签到场景、运动场景、出行场景
        locationPurpose: BMFLocationPurpose.sport,
        // 坐标系
        coordType: BMFLocationCoordType.bd09ll,
        // 设置发起定位请求的间隔，int类型，单位ms
        // 如果设置为0，则代表单次定位，即仅定位一次，默认为0
        scanspan: 4000
    );
    return options;
}
```
### iOS端
```javascript
BaiduLocationIOSOption initIOSOptions() {
    BaiduLocationIOSOption options = BaiduLocationIOSOption(
        // 坐标系
        coordType: BMFLocationCoordType.bd09ll,
        // 位置获取超时时间
        locationTimeout: 10,
        // 获取地址信息超时时间
        reGeocodeTimeout: 10,
        // 应用位置类型 默认为automotiveNavigation
        activityType: BMFActivityType.automotiveNavigation,
        // 设置预期精度参数 默认为best
        desiredAccuracy: BMFDesiredAccuracy.best,
        // 是否需要最新版本rgc数据
        isNeedNewVersionRgc: true,
        // 指定定位是否会被系统自动暂停
        pausesLocationUpdatesAutomatically: false,
        // 指定是否允许后台定位,
        // 允许的话是可以进行后台定位的，但需要项目 
        // 配置允许后台定位，否则会报错，具体参考开发文档
        allowsBackgroundLocationUpdates: true,
        // 设定定位的最小更新距离
        distanceFilter: 10,
    );
    return options;
}
```
### 设置定位参数：
```javascript
Map iosMap = initIOSOptions().getMap();
Map androidMap = initAndroidOptions().getMap();

_suc = await _myLocPlugin.prepareLoc(androidMap, iosMap);
```
## 5. 开启定位
```javascript
_suc = await _myLocPlugin.startLocation();
```
## 6. 停止定位
```javascript
_suc = await _myLocPlugin.stopLocation();
```