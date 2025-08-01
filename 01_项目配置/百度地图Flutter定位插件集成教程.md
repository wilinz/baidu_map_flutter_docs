---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/guide/create
scraped_at: 2025-07-31T16:55:08.498208
description: loc
keywords: flutter
---

# 集成定位Flutter插件

## 第一步：打开/创建一个flutter application工程

根据开发者的实际使用情况，打开一个已有的flutter application工程，或新建一个flutter application工程。这里以新建一个flutter application工程为例介绍。

## 第二步：分别申请Android端和iOS端AK

您可以在[控制台应用管理](https://lbsyun.baidu.com/apiconsole/key)中分别创建Android端和iOS端AK，具体步骤可参照[Android SDK创建AK说明](https://lbsyun.baidu.com/faq/api?title=android-locsdk/guide/create-project/key)及[iOS SDK创建AK说明](https://lbsyun.baidu.com/faq/api?title=ios-locsdk/guide/create-project/key)。

温馨提示：申请iOS端AK时，需填写Bundle Identifier。打开一个iOS工程代码文件，点击Android Studio右上角Open iOS module in Xcode，用Xcode打开iOS工程，方便查看Bundle Identifier。

![create-2.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/loc/create-2.png)

## 第三步：设置Android端及iOS端AK

1. 设置Android端AK

   在Android目录清单文件的application节点中设置Android端AK，添加如下代码：

   ```xml
   <meta-data
       android:name="com.baidu.lbsapi.API_KEY"
       android:value="开发者申请的AK" />
   ```
2. 设置iOS端AK

   在dart文件中，通过对外接口setApiKey设置iOS端AK，可参考百度定位Flutter插件Demo。代码如下:

   ```dart
   LocationFlutterPlugin myLocPlugin = LocationFlutterPlugin();
   /// 动态申请定位权限
   requestPermission();
   // 设置是否隐私政策
   myLocPlugin.setAgreePrivacy(true);
   BMFMapSDK.setAgreePrivacy(true);
   if (Platform.isIOS) {
     /// 设置ios端ak, android端ak可以直接在清单文件中配置
     myLocPlugin.authAK('请 输 入 您 的 AK');
   }
   ```
## 第四步：集成百度地图定位Flutter插件

1. 在工程pubspec.yaml文件添加如下代码

   ```yaml
   dependencies:
       flutter_bmflocation: ^3.8.0
   ```
2. 点击右上角package get按钮，完成插件的集成。

![create-4-4.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/loc/create-4-4.png)

## 第五步：导入dart类，使用对外接口

在需要获取定位信息的位置导入如下dart类文件：
```dart
import 'package:flutter_bmflocation/flutter_bmflocation.dart';
```
对外接口的使用方法，可参照百度定位Flutter插件Demo中lib目录的main.dart类。