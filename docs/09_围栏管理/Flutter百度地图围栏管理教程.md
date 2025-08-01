---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/fenceManager
scraped_at: 2025-07-31T17:06:26.992929
description: loc
keywords: flutter
---

# 围栏管理

## 简介

参考：[iOS原生SDK](https://lbsyun.baidu.com/faq/api?title=ios-yingyan/guide/geo-fencing) / [Android原生SDK](https://lbsyun.baidu.com/faq/api?title=android-yingyan/guide/geo-fencing)

## 添加围栏
```javascript
/// 客户端围栏参数
// CreateFenceOption createFenceOption =
// CreateFenceOption.buildLocalCircleOption(
// tag: 1, // 请求标识 必填
// serviceId: serviceID, // 鹰眼服务ID 必填
// center: LatLng(38, 116.0), // 圆心坐标 （必填）
// radius: 500, // 半径(单位:米）（必填）
// fenceName: 'haha', // 围栏名称
// monitoredPerson: entityName_test // 监控对象（必填）
// );

/// 服务端circle围栏参数
CreateFenceOption createFenceOption = 
  CreateFenceOption.buildServerCircleFenceOption(
    tag: 1, // 请求标识 必填
    serviceId: serviceID, // 鹰眼服务ID 必
    center: LatLng(38, 116.0), // 圆心坐标 （必填）
    radius: 500, // 半径(单位:米）（必填
    fenceName: 'haha', // 围栏名称
    monitoredPerson: entityName_test // 监控对象（必填）
  );

/// 发起创建围栏服务
bool flag = await TraceController.shareInstance.createFence(
  createFenceOption: createFenceOption,
  fenceCallback: FenceCallback(
    onCreateFenceCallback: (CreateFenceResult result) {
      print('-- 创建围栏回调 result = ${result?.toMap()}');
    }
  )
);

print('-- 创建围栏 flag = $flag');
```
## 删除围栏
```javascript
/// 删除服务端围栏
DeleteFenceOption deleteFenceOption = 
  DeleteFenceOption.deleteServerFenceOption(
    tag: 1,
    serviceId: serviceID,
    fenceIds: [13, 17] // 要删除的地理围栏的ID数组，若为null或空数组则删除监控对象上的所有地理围栏（必传）
  );

/// 发起删除fence
bool flag = await TraceController.shareInstance.deleteFence(
  deleteFenceOption: deleteFenceOption,
  fenceCallback: FenceCallback(
    onDeleteFenceCallback: (DeleteFenceResult result) {
      print('-- 删除fence回调 result = ${result?.toMap()}');
    }
  )
);

print('-- 删除fence flag = $flag');
```
## 更新围栏
```javascript
/// 服务端circle围栏更新
UpdateFenceOption updateFenceOption = 
  UpdateFenceOption.buildServerCircleFenceOption(
    tag: 1,
    serviceId: serviceID,
    fenceId: 15,
    center: LatLng(38.0, 116.0),
    radius: 500
  );

/// 发起更新fence
bool flag = await TraceController.shareInstance.updateFence(
  updateFenceOption: updateFenceOption,
  fenceCallback: FenceCallback(
    onUpdateFenceCallback: (UpdateFenceResult result) {
      print('-- 更新fence回调 result = ${result?.toMap()}');
    }
  )
);

print('-- 更新fence flag = $flag');
```
## 查询围栏

### 查询围栏列表
```javascript
/// 构造服务端围栏查询参数
QueryFenceListOption queryFenceListOption = 
  QueryFenceListOption(
    tag: 1, // 请求标识 必填
    serviceId: serviceID, // 鹰眼服务ID 必填
    monitoredPerson: entityName_test, // 监控对象 必填
    fenceType: FenceType.server, // 围栏类型（本地围栏、服务端围栏）必填
    fenceIds: [0, 1] // 围栏编号列表 
  );

/// 发起围栏查询检索
bool flag = await TraceController.shareInstance.queryFenceList(
  queryFenceListOption: queryFenceListOption,
  fenceCallback: FenceCallback(
    onQueryFenceListCallback: (QueryFenceListResult result) {
      print('-- 查询fence回调 result = ${result?.toMap()}');
    }
  )
);

print('-- 查询fence flag = $flag');
```
### 查询监控对象
```javascript
/// 构造查询监控对象状态请求参数 (服务端)
QueryMonitoredStatusOption queryMonitoredStatusOption = 
  QueryMonitoredStatusOption(
    tag: 1, // 请求标识 必填
    serviceId: serviceID, // 鹰眼服务ID 必填
    monitoredPerson: entityName_test, // 监控对象 必填
    fenceType: FenceType.server, // 围栏类型（本地围栏、服务端围栏）必填
    fenceIds: [0, 1] // 围栏编号列表
  );

/// 发起检索
bool flag = await TraceController.shareInstance.queryMonitoredStatus(
  queryMonitoredStatusOption: queryMonitoredStatusOption,
  fenceCallback: FenceCallback(
    onQueryMonitoredStatusCallback: (QueryMonitoredStatusResult result) {
      print('-- 查询监控对象回调 result = ${result?.toMap()}');
    }
  )
);

print('-- 查询监控对象 flag = $flag');
```
### 查询监控对象与围栏关系
```javascript
/// 构造参数
/// 查询被监控对象，在指定的坐标时，和地理围栏的位置关系(服务端)
QueryMonitoredStatusByLocationOption queryMonitoredStatusByLocationOption = 
  QueryMonitoredStatusByLocationOption(
    tag: 1, // 请求标识 必填
    serviceId: serviceID, // 鹰眼服务ID 必填
    monitoredPerson: entityName_test, // 监控对象 必填
    fenceType: FenceType.server, // 围栏类型（本地围栏、服务端围栏）必填
    latLng: LatLng(38.0, 116.0), // 指定位置坐标 必填
    fenceIds: [0, 1] // 围栏编号列表
  );

/// 发起检索
bool flag = await TraceController.shareInstance.queryMonitoredStatusByLocation(
  queryMonitoredStatusByLocationOption: queryMonitoredStatusByLocationOption,
  fenceCallback: FenceCallback(
    onQueryMonitoredStatusByLocationCallback: (QueryMonitoredStatusByLocationResult result) {
      print('-- 查询被监控对象，在指定的坐标时，和地理围栏的位置关系回调 result = ${result?.toMap()}');
    }
  )
);

print('-- 查询被监控对象，在指定的坐标时，和地理围栏的位置关系 flag = $flag');
```
### 查询监控对象历史报警
```javascript
/// 构造参数
/// 查询指定监控对象的地理围栏历史报警信息（服务端）
QueryHistoryAlarmOption queryHistoryAlarmOption = 
  QueryHistoryAlarmOption(
    tag: 1, // 请求标识 必填
    serviceId: serviceID, // 鹰眼服务ID 必填
    monitoredPerson: entityName_test, // 监控对象 必填
    fenceType: FenceType.server, // 围栏类型（本地围栏、服务端围栏）必填
    fenceIds: [0, 1] // 围栏编号列表
  );

/// 发起检索
bool flag = await TraceController.shareInstance.queryHistoryAlarm(
  queryHistoryAlarmOption: queryHistoryAlarmOption,
  fenceCallback: FenceCallback(
    onQueryHistoryAlarmCallback: (QueryHistoryAlarmResult result) {
      print('-- 查询指定监控对象的地理围栏历史报警信息回调 result = ${result?.toMap()}');
    }
  )
);

print('-- 查询指定监控对象的地理围栏历史报警信息 flag = $flag');
```