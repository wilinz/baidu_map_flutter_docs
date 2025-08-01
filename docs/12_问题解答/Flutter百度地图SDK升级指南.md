---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-project/note
scraped_at: 2025-07-31T17:09:04.401536
description: loc
keywords: flutter
---

# 开发注意事项

## 隐私合规接口说明

重要：为进一步采取加强对最终用户个人信息的安全保护措施，从Android地图SDK7.5.0, iOS地图SDK6.5.1起，请开发者务必确保调用SDK任何接口前先调用隐私合规接口`setAgreePrivacy`，否则可能会无法正常使用相关功能。

## 开发包系统兼容性

1. **Android:**
    - 支持Android v4.4以上系统;
    - CPU架构支持：
        - Debug环境：armeabi-v7a、arm64-v8a、x86、x86_64
        - Release环境：armeabi-v7a、arm64-v8a

2. **iOS:**
    - 支持iOS 8以上系统;
    - 支持3种CPU架构：armv7 x86_64 arm64

## Flutter渠道兼容性

1. **Flutter渠道兼容性：**
    - 百度地图flutter插件在stable渠道开发和编译，因此推荐使用Flutter stable渠道。
    - 请在终端使用`flutter channel`命令查看当前项目用的flutter sdk渠道，如果当前不是stable渠道，请使用命令`flutter channel stable`切换渠道。

## 地图Flutter插件升级2.0注意事项

### 依赖添加

百度地图Flutter2.0插件库名做了规范，因此接入方需要修改依赖的库名：基础地图。
```javascript
dependencies:
         flutter_baidu_mapapi_map: ^2.0.1
```
检索：
```javascript
dependencies:
         flutter_baidu_mapapi_search: ^2.0.1
```
计算工具：
```javascript
dependencies:
         flutter_baidu_mapapi_utils: ^2.0.1
```
### import修改

因为库名和包的路径做了修改，所以要修包的引入路径。

1. **Base库：**
    - 库名由`flutter_bmfbase`修改为`flutter_baidu_mapapi_base`
    - 原来的引入：

    ```javascript
    import 'package:flutter_bmfbase/BaiduMap/bmfmap_base.dart'
    ```
    - 需要修改为：

    ```javascript
    import 'package:flutter_baidu_mapapi_base/flutter_baidu_mapapi_base.dart'
    ```
2. **map库:**
    - 库名由`flutter_bmfmap`修改为`flutter_baidu_mapapi_map`
    - 原来的引入：

    ```javascript
    import 'package:flutter_bmfmap/BaiduMap/bmfmap_map.dart'
    ```
    - 需要修改为：

    ```javascript
    import 'package:flutter_baidu_mapapi_map/flutter_baidu_mapapi_map.dart'
    ```
3. **utils库:**
    - 库名由`flutter_bmfutils`修改为`flutter_baidu_mapapi_utils`
    - 原来的引入：

    ```javascript
    import 'package:flutter_bmfutils/BaiduMap/bmfmap_utils.dart'
    ```
    - 需要修改为：

    ```javascript
    import 'package:flutter_baidu_mapapi_utils/flutter_baidu_mapapi_utils.dart'
    ```
4. **search库:**
    - search库是这次新增的，直接按照新的使用方式即可

### 接口修改

1. `BMFArcline`修改为`BMFArcLine`
2. `BMFUserlocationDisplayParam` 改为 `BMFUserLocationDisplayParam`
3. 所有覆盖物的`getId()`函数修改为属性接口`Id`
4. 地图marker点击事件回调`BMFMapMarkerCallback`：

    - 原来：

    ```javascript
    typedef BMFMapMarkerCallback = void Function(String id, dynamic extra);
    ```
    - 需要修改为：

    ```javascript
    typedef BMFMapMarkerCallback = void Function(BMFMarker marker);
    ```
    - 相应的设置回调改为：

    ```javascript
    myMapController?.setMapDidClickedInfoWindowCallback(
        callback: (BMFMarker marker) {
        }
    )
    ```
5. 地图marker拖拽事件回调`BMFMapDragMarkerCallback`：

    - 原来：

    ```javascript
    typedef BMFMapDragMarkerCallback = void Function(String id, dynamic extra);
    ```
    - 需要修改为：

    ```javascript
    typedef BMFMapDragMarkerCallback = void Function(
        BMFMarker marker, BMFMarkerDragState newState, BMFMarkerDragState oldState);
    ```
    - 相应的设置回调改为：

    ```javascript
    myMapController?.setMapDragMarkerCallback(
        callback: (BMFMarker marker, BMFMarkerDragState newState, BMFMarkerDragState oldState) {
        }
    )
    ```
6. **fromMap修改**
    - `fromMap`原来是一个成员函数，需要通过一个静态对象调用，现在改成了一个命名构造函数，直接调用即可。
    - 以`BMFCoordinate`为例：

    - 原来把一个map转换`BMFCoordinate`，需要作如下调用:

    ```javascript
    BMFCoordinate.coordinate().fromMap(coord)
    ```
    - 现在只需要调用命名构造函数:

    ```javascript
    BMFCoordinate.fromMap(coord)
    ```
7. 需在自己Android项目Application类下继承`BmfMapApplication` 

    - 改为如下包名引入：

    ```java
    import com.baidu.mapapi.base.BmfMapApplication;

    public class MyApplication extends BmfMapApplication {
        @Override
        public void onCreate() {
            super.onCreate();
        }
    }
    ```