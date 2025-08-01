---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/route/indoor
scraped_at: 2025-07-31T17:01:16.898913
description: loc
keywords: flutter
---

# 室内路线规划

室内路线规划可以根据同一个室内场所内的两个poi作为起终点，规划出一条步行路线，指引用户到达目的地。

使用示例如下：
```javascript
// 构造检索参数
// 地名规划路线
BMFIndoorPlanNode from = BMFIndoorPlanNode(
    floor: 'F1',
    pt: BMFCoordinate(39.917381286621094, 116.37978363037109)
);
BMFIndoorPlanNode to = BMFIndoorPlanNode(
    floor: 'F6',
    pt: BMFCoordinate(39.917240142822266, 116.37954711914063)
);
BMFIndoorRoutePlanOption indoorRoutePlanOption = BMFIndoorRoutePlanOption(from: from, to: to);
// 检索实例
BMFIndoorRouteSearch indoorRouteSearch = BMFIndoorRouteSearch();
// 检索回调
indoorRouteSearch.onGetIndoorRouteSearchResult(callback: 
    (BMFIndoorRouteResult result, BMFSearchErrorCode errorCode) {      
        print(`室内路线检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);
        // 解析reslut，具体参考demo 
    }
);
// 发起检索
bool flag = await indoorRouteSearch.indoorRouteSearch(indoorRoutePlanOption);
```
![室内路线规划视频](//mapopen-website-webapi.bj.bcebos.com/images/flutter/map/indoorplan.mp4)