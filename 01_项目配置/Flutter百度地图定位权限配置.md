---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/access
scraped_at: 2025-07-31T17:06:47.971008
description: loc
keywords: flutter
---

# 定位权限申请

## iOS

在iOS工程info.plist文件中添加如下配置：
```xml
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>鹰眼DEMO需要后台定位</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>鹰眼DEMO需要后台定位</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>鹰眼DEMO需要前台定位</string>
<key>UIBackgroundModes</key>
<array>
    <string>location</string>
</array>
<key>NSLocationTemporaryUsageDescriptionDictionary</key>
<dict>
    <key>WantsToTrace</key>
    <string>鹰眼DEMO需要精确定位</string>
</dict>
```
## Android

1. 在Application标签中声明service组件,每个APP拥有自己独立的鹰眼追踪service
```xml
<service
    android:name="com.baidu.trace.LBSTraceService"
    android:enabled="true"
    android:process=":remote">
</service>
```
2. 声明使用权限:。注意：在Android 6.0系统及以上，需要动态申请应用权限。
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