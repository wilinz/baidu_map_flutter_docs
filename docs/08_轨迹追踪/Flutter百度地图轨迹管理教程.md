---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/trackManager
scraped_at: 2025-07-31T17:09:38.853074
description: loc
keywords: flutter
---

# 轨迹管理

## 简介

参考：[iOS原生SDK](https://lbsyun.baidu.com/faq/api?title=ios-yingyan/guide/cache) / [Android原生SDK](https://lbsyun.baidu.com/faq/api?title=android-yingyan/guide/cache)

## 上传自定义轨迹
```javascript
AddCustomTrackPointOption addCustomTrackPointOption = 
    AddCustomTrackPointOption(
        tag: 1,
        serviceId: serviceID,
        customTrackPoint: CustomTrackPoint(
            point: Point(
              location: LatLng(38, 116),
              height: 1,
              speed: 1,
              coordType: CoordType.BD09LL,
              radius: 10,
              locTime: DateTime.now().millisecondsSinceEpoch ~/ 1000,
              direction: 300,
            ),
            customData: {},
            entityName: entityName_test)
    );

/// 发起上传某个开发者自定义的轨迹点服务
bool flag = await TraceController.shareInstance.addCustomPoint(
    addCustomTrackPointOption: addCustomTrackPointOption,
    trackCallBack: TrackCallBack(onAddCustomTrackPointCallBack:
        (AddCustomTrackPointResult result) {
      print('-- 上传某个开发者自定义的轨迹点回调 result = ${result?.toMap()}');
    })
);

print('-- 上传某个开发者自定义的轨迹点 flag = $flag');
```
## 批量上传自定义轨迹
```javascript
AddCustomTrackPointsOption addCustomTrackPointsOption = 
    AddCustomTrackPointsOption(
        tag: 1,
        serviceId: serviceID,
        customTrackPoints: {
      entityName_test: [
        TrackPoint(
          location: LatLng(38, 116),
          locTime: DateTime.now().millisecondsSinceEpoch ~/ 1000,
        ),
        TrackPoint(
          location: LatLng(38, 117),
          locTime: DateTime.now().millisecondsSinceEpoch ~/ 1000,
        ),
        TrackPoint(
            location: LatLng(38, 118),
            locTime: DateTime.now().millisecondsSinceEpoch ~/ 1000)
      ]
    });

/// 发起批量上传若干个开发者自定义的轨迹点
bool flag = await TraceController.shareInstance.AddCustomPoints(
    addCustomTrackPointsOption: addCustomTrackPointsOption,
    trackCallBack: TrackCallBack(onAddCustomTrackPointsCallBack:
        (AddCustomTrackPointsResult result) {
      print('-- 批量上传若干个开发者自定义的轨迹点回调 result = ${result?.toMap()}');
    })
);

print('-- 批量上传若干个开发者自定义的轨迹点 flag = $flag');
```
## 查询某终端实体实时位置
```javascript
/// 查询某终端实体的实时位置请求类
QueryTrackLatestPointOption queryTrackLatestPointOption = 
    QueryTrackLatestPointOption(
        tag: 1,
        serviceId: serviceID,
        entityName: entityName_test,
        processOption: QueryTrackProcessOption(
            denoise: true,
            vacuate: true,
            mapMatch: true,
            radiusThreshold: 100,
            transportMode: TrackProcessOptionTransportMode.AUTO),
        outputCoordType: CoordType.BD09LL);

/// 发起查询某终端实体的实时位置
bool flag = await TraceController.shareInstance
    .queryTrackLatestPoint(
        queryTrackLatestPointOption: queryTrackLatestPointOption,
        trackCallBack: TrackCallBack(
            onQueryTrackLatestPointCallBack:
                (QueryTrackLatestPointResult result) {
          print('-- 查询某终端实体的实时位置回调 result = ${result?.toMap()}');
        })
    );

print('-- 查询某终端实体的实时位置 flag = $flag');
```
## 查询某终端实体在一段时间内的里程
```javascript
QueryTrackDistanceOption queryTrackDistanceOption = 
    QueryTrackDistanceOption(
        tag: 1,
        serviceId: serviceID,
        entityName: entityName_test,
        startTime: DateTime.now().millisecondsSinceEpoch ~/ 1000 - 
            60 * 60 * 24,
        endTime: DateTime.now().millisecondsSinceEpoch ~/ 1000,
        isProcessed: true,
        processOption: QueryTrackProcessOption(
            denoise: true,
            vacuate: true,
            mapMatch: true,
            radiusThreshold: 100,
            transportMode: TrackProcessOptionTransportMode.AUTO),
        supplementMode: TrackProcessOptionSupplementMode.NO_SUPPLEMENT,
        lowSpeedThreshold: 20);

bool flag = await TraceController.shareInstance.queryTrackDistance(
    queryTrackDistanceOption: queryTrackDistanceOption,
    trackCallBack: TrackCallBack(onQueryTrackDistanceCallBack:
        (QueryTrackDistanceResult result) {
      print('-- 查询某终端实体在一段时间内的里程回调 result = ${result?.toMap()}');
    })
);

print('-- 查询某终端实体在一段时间内的里程 flag = $flag');
```
## 查询客户端缓存轨迹
```javascript
QueryTrackCacheInfoOption queryTrackCacheInfoOption = 
    QueryTrackCacheInfoOption(
    tag: 1,
    serviceId: serviceID,
    entityNames: [entityName_test],
    startTime: null,
    endTime: null,
    needDistance: false,
    distanceFilter: 200);

bool flag = await TraceController.shareInstance.queryTrackCacheInfo(
    queryTrackCacheInfoOption: queryTrackCacheInfoOption,
    trackCallBack: TrackCallBack(onQueryTrackCacheInfoCallBack:
    (QueryTrackCacheInfoResult result) {
      print('-- 查询客户端缓存的轨迹信息回调 result = ${result?.toMap()}');
    })
);

print('-- 查询客户端缓存的轨迹信息 flag = $flag');
```
## 清空客户端缓存轨迹
```javascript
ClearTrackCacheOption clearTrackCacheOption = ClearTrackCacheOption(
    tag: 1,
    serviceId: serviceID,
    trackCacheOptions: [
      TrackCacheOption(
          entityName: entityName_test,
          startTime: null,
          endTime: null,
          total: null),
      TrackCacheOption(
          entityName: 'Mark',
          startTime: null,
          endTime: null,
          total: null),
    ],
    entityNames: []);

bool flag = await TraceController.shareInstance.clearTrackCache(
    clearTrackCacheOption: clearTrackCacheOption,
    trackCallBack: TrackCallBack(
        onClearTrackCacheCallBack: (ClearTrackCacheResult result) {
      print('--  清空客户端缓存的轨迹信息回调 result = ${result?.toMap()}');
    })
);

print('--  清空客户端缓存的轨迹信息 flag = $flag');
```