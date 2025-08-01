---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-map/offlinemap
scraped_at: 2025-07-31T17:07:59.635021
description: loc
keywords: flutter
---

# 离线地图

## 使用离线地图

使用离线地图，可满足在无网络环境下查看地图信息的需求，在有离线地图的情况下，地图SDK会优先加载离线地图。

离线地图的基本使用方法如下：

### 初始化离线地图管理类

1. 初始化离线地图管理类
```javascript
// 创建离线地图管理类
OfflineController _offlineController = OfflineController();
// 离线地图管理类初始化
_offlineController.init();
// 离线地图管理类注册回调
_offlineController.onGetOfflineMapStateBack(
    callback: _onGetOfflineMapStateBack
);

// 下载回调
void _onGetOfflineMapStateBack(int state, int cityID) {
    switch (state) {
      case OfflineController.TYPE_DOWNLOAD_UPDATE:
        _setUpdateInfo(cityID);
        // 处理下载进度更新提示
        break;

      case OfflineController.TYPE_NEW_OFFLINE:
        // 有新离线地图安装
        break;

      case OfflineController.TYPE_VER_UPDATE:
        // 版本更新提示
        // MKOLUpdateElement e = mOffline.getUpdateInfo(state);
        break;

      default:
        break;
    }
}
```
### 获取批量城市列表

2. 获取批量城市列表

a. 获取热门城市列表
```javascript
List<BMFOfflineCityRecord> cityList = await _offlineController?.getHotCityList();
```
b. 获取全国城市列表
```javascript
List<BMFOfflineCityRecord> cityList = await _offlineController?.getOfflineCityList();
```
### 开始下载

3. 开始下载
```javascript
await _offlineController?.startOfflineMap(int.parse(_cityID));
```
### 下载状态

4. 下载状态
```javascript
List<BMFUpdateElement> update = await _offlineController?.getAllUpdateInfo();
```
### 暂停下载

5. 暂停下载
```javascript
await _offlineController?.pauseOfflineMap(int.parse(_cityID));
```
### 删除下载

6. 删除下载
```javascript
await _offlineController?.removeOfflineMap(int.parse(_cityID));
```
### 更新下载

7. 更新下载
```javascript
await _offlineController?.updateOfflineMap(int.parse(_cityID));
```
以上介绍了离线地图的基本用法，您在开发过程中如有问题可以参考官方demo。