---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/route/walk
scraped_at: 2025-07-31T17:04:39.174049
description: loc
keywords: flutter
---

# 步行路线规划

步行路径规划可以根据起终点的关键字和城市名称，获取起终点之间的步行路线规划结果，包含路线长度、耗时、途径的每个路段的详细信息等。

> 注意：进行步行路线规划时，起终点间直线距离不应超过100公里。

使用示例如下：
```javascript
// 构造检索参数
// 地名规划路线
BMFPlanNode from = BMFPlanNode(cityName: '北京', name: '百度科技园');   
BMFPlanNode to = BMFPlanNode(cityName: '北京', name: '西二旗地铁站'); 
BMFWalkingRoutePlanOption walkingRoutePlanOption = 
    BMFWalkingRoutePlanOption(from: from, to: to);

// 检索实例
BMFWalkingRouteSearch walkingRouteSearch = BMFWalkingRouteSearch();

// 检索回调
walkingRouteSearch.onGetWalkingRouteSearchResult(callback: 
    (BMFWalkingRouteResult result, BMFSearchErrorCode errorCode) {     
      print(`步行检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);  
      // 解析reslut，具体参考demo 
    });

// 发起检索
bool flag = await walkingRouteSearch.walkingRouteSearch(walkingRoutePlanOption);
```
![步行路线规划视频](//mapopen-website-webapi.bj.bcebos.com/images/flutter/map/walkplan.mp4)