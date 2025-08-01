---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/route/bike
scraped_at: 2025-07-31T17:03:51.029738
description: loc
keywords: flutter
---

# 骑行路线规划

骑行路径规划可以根据起终点的关键字和城市名称，获取起终点之间的骑行路线规划结果，包含路线长度、耗时、途径的每个路段的详细信息等。

> 注意：进行骑行路线规划时，起终点间直线距离不应超过100公里。

使用示例如下：
```javascript
// 构造检索参数
// 地名规划路线
BMFPlanNode from = BMFPlanNode(cityName: '北京', name: '百度科技园');  
BMFPlanNode to = BMFPlanNode(cityName: '北京', name: '西二旗地铁站'); 
BMFRidingRoutePlanOption ridingRoutePlanOption = 
    BMFRidingRoutePlanOption(from: from, to: to);

// 检索实例
BMFRidingRouteSearch ridingRouteSearch = BMFRidingRouteSearch();

// 检索回调
ridingRouteSearch.onGetRidingRouteSearchResult(callback:  
    (BMFRidingRouteResult result, BMFSearchErrorCode errorCode) {    
      print(`骑行检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);  
      // 解析reslut，具体参考demo 
    });

// 发起检索 
bool flag = await ridingRouteSearch.ridingRouteSearch(ridingRoutePlanOption);
```
![骑行路线规划视频](//mapopen-website-webapi.bj.bcebos.com/images/flutter/map/rideplan.mp4)