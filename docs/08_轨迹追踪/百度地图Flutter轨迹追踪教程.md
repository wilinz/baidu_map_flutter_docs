---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/trace
scraped_at: 2025-07-31T17:05:58.781505
description: loc
keywords: flutter
---

# 轨迹追踪

## 简介

鹰眼轨迹Flutter插件可以根据开发者自定义的定位周期和上传周期，自动地采集设备的位置信息，回传到鹰眼服务端，形成连续的轨迹。开发者可以为每个轨迹点添加附加信息，也可以对定位选项、采集周期与上传周期、缓存容量等进行自定义设置。鹰眼轨迹Flutter插件支持后台运行，断网时自动缓存，网络恢复后自动重连上传。

SDK与服务端采用TCP长连接与HTTPS通信，所有数据经过压缩和加密，保障数据安全，省电省流量。轨迹追踪是鹰眼轨迹Flutter插件中最基础、最核心的功能。通过类TraceController中相应的接口，控制轨迹服务与轨迹采集的开启和停止，操作结果通过相应的方法回调给开发者。下面首先对涉及到的基本概念进行介绍，之后会对各功能进行阐述。

**注意：**  
开发者在百度地图鹰眼自行上传数据与百度地图开放平台无关，开发者应对上传数据的合法性负责，并确保不侵犯他人合法权益。若上传数据包含用户隐私信息，包括但不限于用户名、手机号、身份ID等，请开发者确保已获取用户的授权同意并由开发者自行加密以保障用户隐私安全，百度地图开放平台不对开发者自行上传的用户数据进行校验和加密。

## 基础概念

### 轨迹服务与轨迹采集

1. **轨迹服务的含义：** 轨迹服务负责和服务端建立并保持长连接，接收服务端的推送消息，并将客户端的轨迹数据尽快地上传到服务端。
2. **轨迹采集的含义：** 获取当前设备的位置信息。
3. **服务与采集的关系：** 与采集相比，服务是一个更广的概念。虽然采集的开启与结束和服务的开启与结束是独立控制的，但他们的调用顺序也有一定的要求：调用`startGather`和`stopGather`之前必须先调用`startTraceService`，并且调用`stopTraceService`时，插件会自动`stopGather`。一个典型的使用场景是：

   ```
   startTraceService -> startGather -> stopGather -> startGather -> stopGather -> … -> stopTraceService
   ```
   也就是开启服务之后，在需要采集轨迹的时候就调用`startGather`，不需要采集轨迹的时候就调用`stopGather`，最后停止服务。

### 采集周期与上传周期

插件以采集周期为间隔，周期性地采集当前设备的位置信息；以上传周期为间隔，周期性地将若干轨迹点上传至鹰眼服务端。

### 后台保活

当APP切换至后台，且期望尽量保持存活并持续定位追踪轨迹时，开发者需参照[配置工程--> plist文件设置](https://lbsyun.baidu.com/faq/api?title=ios-yingyan/guide/buildproject)，在APP在声明定位权限时选择“同时需要前台和后台定位”，并且在最终用户授权时将APP定位权限设为“始终”，此时不论APP在前台还是后台，APP被杀死概率较低。

APP可定期检测用户定位授权状态，当检测到APP定位权限设不为“始终”时，可在适当的时机提示用户设置权限。以上操作均需严格遵守[《百度地图开放平台产品和服务隐私政策》](https://lbsyun.baidu.com/index.php?title=open/privacy)。

## 服务初始化（仅iOS）
```javascript
/// 鹰眼配置
ServiceOption serviceOption = ServiceOption(
    ak: ak, // 填写你在API控制台申请的iOS类型的AK
    mcode: mcode, // 填写你在API控制台申请的iOS类型的AK
    serviceId: serviceID, // 填写你在鹰眼轨迹管理台创建的鹰眼服务对应的ID
    keepAlive: false, // 是否保活
);

/// 设置SDK运行所需的基础信息，调用任何方法之前都需要先调用此方法
/// true代表设置成功，false代表设置失败
bool flag = await TraceController.shareInstance.configServerInfo(serviceOption);
print('--百度鹰眼服务配置 flag = $flag');
```
## 轨迹服务控制

### 开启鹰眼服务

通过`TraceController`类的 `Future<bool> startTraceService({@required Trace trace, TraceCallback traceCallback})` 方法开启轨迹服务，操作结果通过 `TraceCallback` 方法回调给开发者。 开启服务时需要指定`Trace` 类型的配置信息，目前`Trace` 类中只有`entityName`一个属性。该`entityName`在插件的运行过程中有举足轻重的作用：

1. 开启轨迹服务之后，插件会以此`entityName`的身份登录到服务端
2. 在轨迹服务运行期间，收到的地理围栏报警信息都来自于被监控对象为此`entityName`的地理围栏
3. 在轨迹服务运行期间，采集到的轨迹数据也隶属于此`entityName`名下
4. 开启轨迹服务之后，如果有之前遗留的缓存数据，也会将其全部上传至服务端（所有entity的缓存数据都会上传）

以下代码片段表示，开启轨迹服务：
```javascript
/// 开启轨迹服务
/// entityName 终端实体的名称
bool flag = await TraceController.shareInstance.startTraceService(
    trace: Trace(serviceId: serviceID, entityName: entityName_test),
    traceCallback: TraceCallback(
        onStartTraceServiceCallBack: (TraceResult result) {
      print('--开启鹰眼服务回调 result = ${result?.toMap()}');
    })
);
print('--开启鹰眼服务 flag = $flag');
```
### 停止服务

停止轨迹服务时，鹰眼Flutter插件会和服务端断开连接。在此之前，如果当前登录的entity有断网缓存的数据，则将其上传至服务端。以上操作均要求网络畅通，否则只是停止轨迹服务，缓存数据会由鹰眼Flutter插件持久化保存，待下次开启轨迹服务后，网络畅通的情况下，由SDK自动继续上传。

以下代码片段表示，停止轨迹服务：
```javascript
/// 停止轨迹服务回调
bool flag = await TraceController.shareInstance.stopTraceService(
    trace: Trace(serviceId: serviceID, entityName: entityName_test),
    traceCallback: TraceCallback(
        onStopTraceServiceCallBack: (TraceResult result) {
      print('--停止鹰眼服务回调 result = ${result?.toMap()}');
    })
);
print('--停止鹰眼服务 flag = $flag');
```
## 轨迹采集控制

轨迹采集的控制分为开启采集(`startGather`)和结束采集(`stopGather`)两个接口。开启采集和结束采集都必须在开启轨迹服务之后才可以调用。开启采集之后，插件会在每个采集周期获取当前设备的位置信息，停止采集之后，插件不再获取当前设备的位置信息。

### 开始采集

以下代码片段表示，开始采集：
```javascript
bool flag = await TraceController.shareInstance.startGather(
    traceCallback: TraceCallback(onStartGatherCallBack: (GatherResult result) {
  print('--开始采集回调 result = ${result?.toMap()}');
}));
print('--开始采集 flag = $flag');
```
### 停止采集

以下代码片段表示，停止采集：
```javascript
bool flag = await TraceController.shareInstance.stopGather(
    traceCallback: TraceCallback(onStopGatherCallBack: (GatherResult result) {
  print('--停止采集回调 result = ${result?.toMap()}');
}));
print('--停止采集 flag = $flag');
```