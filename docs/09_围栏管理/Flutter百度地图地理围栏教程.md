---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/guide/addressFence
scraped_at: 2025-07-31T17:05:50.013065
description: loc
keywords: flutter
---

# 地理围栏

## 1. 引入包名
```javascript
import 'package:flutter_bmflocation/bdmap_location_flutter_plugin.dart';
```
## 2. 初始化地理围栏插件
```javascript
final GeofenceFlutterPlugin _myGeofencePlugin = GeofenceFlutterPlugin();
```
## 3. 添加地理围栏

### 圆形地理围栏
```javascript
LocationCircleGeofenceOption option = LocationCircleGeofenceOption(
    // 半径,单位：米(必选)
    radius: '2000',
    // 围栏中心点（必选）
    centerCoordinate: BMFLocCoordinate(39.928617, 116.40329),
    // 坐标系
    coordType: BMFLocationCoordType.bd09ll,
    // 围栏监听通知类型
    activateAction: GeofenceActivateAction.geofenceAll,
    // 自定义围栏id
    customId: 'circleGeofence_id',
    // 定位是否会被系统自动暂停。(Andorid设置无效)
    pausesLocationUpdatesAutomatically: false,
    // 是否允许后台定位。(Andorid设置无效)
    allowsBackgroundLocationUpdates: true
);

// 添加地理围栏
_myGeofencePlugin.addCircleRegion(option.toMap());

// 地理围栏创建回调
_myGeofencePlugin.geofenceFinishCallback(
    callback: (BMFGeofence? geofence) {
        if (geofence != null) {
            // 处理回调
        }
    }
);
```
### 多边形地理围栏
```javascript
List<BMFLocCoordinate> _coordinateList = [];
_coordinateList.add(BMFLocCoordinate(40.065, 116.224));
_coordinateList.add(BMFLocCoordinate(40.125, 116.404));
_coordinateList.add(BMFLocCoordinate(40.125, 116.404));

LocationPolygonGeofenceOption option = LocationPolygonGeofenceOption(
    // 坐标点，必须大于等于3个
    coordinateList: _coordinateList,
    // 坐标系
    coordType: BMFLocationCoordType.bd09ll,
    // 围栏监听通知类型
    activateAction: GeofenceActivateAction.geofenceAll,
    // 自定义围栏id
    customId: 'polyGeofence_id',
    // 定位是否会被系统自动暂停。(Andorid设置无效)
    pausesLocationUpdatesAutomatically: false,
    // 是否允许后台定位。(Andorid设置无效)
    allowsBackgroundLocationUpdates: true
);

// 添加地理围栏
_myGeofencePlugin.addPolygonRegion(option.toMap());

// 地理围栏创建回调
_myGeofencePlugin.geofenceFinishCallback(
    callback: (BMFGeofence? geofence) {
        // 处理回调
    }
);
```
## 4. 监听地理围栏
```javascript
/**
* 监听围栏状态发生改变时回调
* geoFenceRegionStatus:
* 1:进入围栏  2:围栏内停留超过10分钟  3:离开围栏
*/
_myGeofencePlugin.didGeoFencesStatusChangedCallback(
    callback: (Map geofenceResult) {
      if (geofenceResult.isNotEmpty) {
        setState(() {
          Map map = geofenceResult['result'];
          int status = map['geoFenceRegionStatus'] as int;
          switch (status) {
            case 1:
              resultText = '进入地理围栏';
              break;
            case 2:
              resultText = '在围栏内停留超过10分钟';
              break;
            case 3:
              resultText = '在地理围栏之外';
              break;
            case 0:
              resultText = '定位失败';
              break;
            default:
          }
        });
      }
    }
);
```