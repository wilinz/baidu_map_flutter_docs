---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/create-project/configure
scraped_at: 2025-07-31T17:07:23.432122
description: loc
keywords: flutter
---

# Flutter开发环境配置

请参考[Flutter官方网站](https://flutter.dev/)或者[Flutter中文网](https://flutter.cn/)。

## 创建Flutter项目

1. 推荐使用Android Studio直接创建Flutter Project。
2. 推荐使用Visual Studio Code作为Flutter工程主要开发和调试工具，涉及到Native代码的调试和改动，请分别使用Android Studio和XCode做双端调试。

## 在项目中集成百度鹰眼Flutter插件

目前百度鹰眼Flutter插件（flutter_baidu_yingyan_trace）已发布到Flutter Pub仓库。需要在您Flutter项目中的yaml文件里配置对百度鹰眼Flutter插件包的依赖，才可使用，具体如下：

1. 添加依赖：

   ```yaml
   dependencies:
     flutter_baidu_yingyan_trace: ^2.2.0
   ```
2. Flutter 依赖拉取

   需要在当前项目位置的Terminal(终端)里使用`flutter pub get`拉取依赖项目，才能正常进行开发和编译。

## Flutter工程配置

1. Android工程配置:

   1. Flutter SDK路径配置

      需要在Android工程的`local.properties`里配置

      ```javascript
      flutter.sdk="本地Flutter SDK目录"
      ```
   2. 工程配置

      打开flutter工程下的Android module工程：

      ![android-loc-sdk_map1.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/yingyan/android-loc-sdk_map1.png)

      在`AndroidManifest.xml`文件中声明该Service：

      ```xml
      <service
          android:name="com.baidu.trace.LBSTraceService"
          android:enabled="true"
          android:process=":remote">
      </service>
      ```
      在`AndroidManifest.xml`文件中声明使用权限：

      ```xml
      <!-- 以下是鹰眼SDK基础权限 -->
      
      <!-- 这个权限用于进行网络定位-->
      <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
      
      <!-- 这个权限用于访问GPS定位-->
      <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
      
      <!-- 用于访问wifi网络信息，wifi信息会用于进行网络定位-->
      <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
      
      <!-- 获取运营商信息，用于支持提供运营商信息相关的接口-->
      <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
      
      <!-- 这个权限用于获取wifi的获取权限，wifi信息会用来进行网络定位-->
      <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
      
      <!-- 写入扩展存储，向扩展卡写入数据，用于写入对象存储BOS数据-->
      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
      
      <!-- 访问网络，网络定位需要上网-->
      <uses-permission android:name="android.permission.INTERNET"/>
      
      <!-- Android O之后开启前台服务需要申请该权限 -->
      <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
      
      <!-- Android Q之后，后台定位需要申请该权限 -->
      <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>
      
      <!-- 以下不是鹰眼SDK需要的基础权限，可选 -->
      
      <!-- 用于加快GPS首次定位，可选权限，非必须-->
      <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS"/>
      
      <!-- 用于Android M及以上系统，申请加入忽略电池优化白名单，可选权限，非必须-->
      <uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS"/>
      ```
## AK配置

在`main.dart`的`main`函数中添加如下代码：
```javascript
// 设置鹰眼SDK的基础信息
// 每次调用startService开启轨迹服务之前，可以重新设置这些信息。
if (Platform.isIOS) {
  /// iOS端初始化鹰眼sdk发起鉴权 since 2.2.0
  bool suc = await TraceSDK.setApiKey("请输入您的AK");
  if (suc) {
    // print("ios-鹰眼启动引擎成功");
  }

  /// 鹰眼配置
  ServiceOption serviceOption = ServiceOption(
    ak: "请输入您的AK",
    mcode: "请输入您的Bundle Identifier",
    serviceId: "请输入您的鹰眼服务对应的ID",
    keepAlive: false,
  );

  /// 设置SDK运行所需的基础信息，调用任何方法之前都需要先调用此方法
  /// true代表设置成功，false代表设置失败
  /// ios 独有
  bool flag = await TraceController.shareInstance.configServerInfo(serviceOption);
  print('--百度鹰眼服务配置 flag = $flag');

  /// 百度地图sdk初始化鉴权
  BMFMapSDK.setApiKeyAndCoordType("请输入您的AK", BMF_COORD_TYPE.BD09LL);
} else if (Platform.isAndroid) {
  /// Android 目前不支持接口设置Apikey,
  /// 请在主工程的Manifest文件里设置，详细配置方法请参考官网(https://lbsyun.baidu.com/)demo
  BMFMapSDK.setCoordType(BMF_COORD_TYPE.BD09LL);
}
```
Android平台需要在`AndroidManifest.xml`文件里设置AK:
```xml
<application>
    <meta-data
        android:name="com.baidu.lbsapi.API_KEY"
        android:value="请输入百度开放平台申请的Android端API KEY"/>
</application>
```
若您还不曾申请开发密钥，[点此申请](http://lbsyun.baidu.com/apiconsole/key#/home)。