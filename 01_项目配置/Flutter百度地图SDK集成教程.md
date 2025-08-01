---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-map/showmap
scraped_at: 2025-07-31T17:00:33.393191
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## Hello BaiduMap

百度地图SDK Flutter插件为开发者提供了在Flutter开发中便捷的使用百度地图能力的接口，通过以下几步操作，即可在您的应用中使用百度地图。

在UI代码中添加地图页面组件(BMFMapWidget)：

BMFMapOptions构造，BMFMapOptions包含了创建地图所需要的各种状态参数：
```javascript
BMFMapOptions mapOptions = BMFMapOptions(
        center: BMFCoordinate(39.917215, 116.380341),
        zoomLevel: 12,
        mapPadding: BMFEdgeInsets(left: 30, top: 0, right: 30, bottom: 0));
```
地图Flutter Widget构造，BMFMapWidget是地图Flutter插件封装的一个支持AndroidView和UiKitView的Widget：
```javascript
Container(
      height: screenSize.height,
      width: screenSize.width,
      child: BMFMapWidget(
        onBMFMapCreated: (controller) {
          onBMFMapCreated(controller);
        },
        mapOptions: mapOptions,
      ),
    );
```
完成以上配置，即可在Flutter页面展示地图页面：

![cjdt.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/cjdt.jpg)

BMFMapOptions类的属性如下：

## 地图类型与显示层级

## 显示层级与比例尺

---

本篇文章对您是否有帮助？

[有帮助] [没帮助]