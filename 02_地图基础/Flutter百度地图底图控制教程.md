---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-map/hide
scraped_at: 2025-07-31T17:01:28.911097
description: loc
keywords: flutter
---

# Flutter | 百度地图API SDK

地图Flutter插件提供了控制底图标注`showMapPoi`的属性，默认显示底图标注。利用此属性可得到仅显示道路信息的地图，方法如下：
```javascript
myMapController?.updateMapOptions(BMFMapOptions(mapType: BMFMapType.None));
```
显示的效果如下：

![notshowpoi.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/notshowpoi.jpg)