---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/route/indoortransit
scraped_at: 2025-07-31T17:04:23.142898
description: loc
keywords: flutter
---

# 市内公交路线规划

支持城市内公交路线规划，根据起终点的关键字和城市名称，来完成市内公交线路规划。规划结果包含路线长度、耗时、途径的每个路段的详细信息等。

使用示例如下：
```javascript
// 构造检索参数
// 规划路线
BMFPlanNode from = BMFPlanNode(name: '百度大厦');
BMFPlanNode to = BMFPlanNode(name: '北京西站');
BMFTransitRoutePlanOption transitRoutePlanOption = 
    BMFTransitRoutePlanOption(from: from, to: to, city: '北京市');

// 检索实例
BMFTransitRouteSearch transitRouteSearch = BMFTransitRouteSearch();

// 检索回调
transitRouteSearch.onGetTransitRouteSearchResult(callback:   
    (BMFTransitRouteResult result, BMFSearchErrorCode errorCode) {   
      print(`市内公交检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);  
       // 解析reslut，具体参考demo 
    });

// 发起检索
bool flag = await transitRouteSearch.transitRouteSearch(transitRoutePlanOption);
```
![视频示例](//mapopen-website-webapi.bj.bcebos.com/images/flutter/map/shineiBusplan.mp4)