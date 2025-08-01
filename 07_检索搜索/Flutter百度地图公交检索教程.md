---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/search/bus
scraped_at: 2025-07-31T17:11:40.915559
description: loc
keywords: flutter
---

# 公交详情检索

开发者可以通过POI检索获取公交类型（公交车，地铁）的POI信息，根据POI对应的UID请求BMFBusLineSearch检索详细的公交路线信息（如：该线路的站点数、各站点名称、参考票价等）。

使用示例如下：
```javascript
// 构造检索参数
BMFBusLineSearchOption busLineSearchOption = BMFBusLineSearchOption(
    busLineUid: '566982672f9427deb23c814d', city: '北京');

// 检索实例
BMFBusLineSearch buslineSearch = BMFBusLineSearch();

// 检索回调
buslineSearch.onGetBuslineSearchResult(callback:  
    (BMFBusLineResult result, BMFSearchErrorCode errorCode) {
        print(`公交检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);
        // 解析reslut，具体参考demo 
       });

// 发起检索
bool flag = await buslineSearch.busLineSearch(busLineSearchOption);
```
显示的效果如下：

![searchbus.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/searchbus.png)