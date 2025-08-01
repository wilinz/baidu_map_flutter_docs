---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/guide/note
scraped_at: 2025-07-31T17:06:56.882512
description: loc
keywords: flutter
---

# 开发注意事项

## 定位Flutter插件升级3.6.0注意事项

为降低定位插件和地图插件的耦合性，自V3.6.0开始定位插件移除对flutter_baidu_mapapi_base组件的依赖。

- **改动**：新增`flutter_baidu_base_models.dart`文件，增加`BMFLocCoordinate`类代表经纬度；
- **影响面**：多边形地理围栏和圆形地理围栏；
- **适配**：需要将原有围栏中的`BMFCoordinate`转换为`BMFLocCoordinate`；

## 隐私政策接口说明

从定位Flutter插件3.0.0版本起增加隐私合规接口，开发者需要调用接口通知百度定位SDK用户是否已经同意隐私政策。隐私政策官网链接：[https://lbsyun.baidu.com/index.php?title=openprivacy](https://lbsyun.baidu.com/index.php?title=openprivacy)
```javascript
// 设置是否同意隐私政策
// 隐私政策官网链接：https://lbsyun.baidu.com/index.php?title=openprivacy
// 未同意隐私政策之前无法使用定位及地理围栏等功能。
Future<bool> setAgreePrivacy(bool isAgree) async {
  return BMFLocationDispatcherFactory.instance.authDispatcher.setAgreePrivacy(_channel, isAgree);
}
```
## import修改

将原来的包名全部引入到了`bdmap_location_flutter_plugin.dart`下
```javascript
import 'package:flutter_bmflocation/bdmap_location_flutter_plugin.dart';
```
## 接口修改

1. **设置AK(仅支持iOS)**
```javascript
@Deprecated('已废弃since3.0.0，推荐使用 `authAK()`')
static Future<bool> setApiKey(String key)
```
2. **定位结果回调**
```javascript
@Deprecated('已废弃since3.0.0，推荐使用`seriesLocationCallback()`')
void onResultCallback({required BMFLocationResultCallback callback})
```
## 参数修改

新增`BaiduPoiList`类，将原来的`poiList`字符串修改为`BaiduPoiList`类型的List；
```javascript
@Deprecated('已废弃since3.0.0，推荐使用 `pois`')
  String? poiList;
```
新增`BMFLocationBaseOption`类，统一两端坐标系；
```javascript
@Deprecated('已废弃since3.0.0，推荐使用 `coordType`')
  String? coorType;
```
## 常见问题

1. **iOS权限问题**可参照[iOS定位SDK手动部署说明](https://lbsyun.baidu.com/faq/api?title=ios-locsdk/guide/create-project/manual-create)。

2. **iOS头文件错误**：

   ![ios1.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/loc/ios1.png)
   ![ios2.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/loc/ios2.png)

   解决办法：Xcode-TARGETS-build settings-Allow Non-modular Includes In Famework Modules设置为YES。

3. **鉴权或定位错误码**可参照[iOS错误返回码](https://lbsyun.baidu.com/faq/api?title=ios-locsdk/guide/addition-func/error-code)和 [Android错误返回码](https://lbsyun.baidu.com/faq/api?title=android-locsdk/guide/addition-func/error-code)。