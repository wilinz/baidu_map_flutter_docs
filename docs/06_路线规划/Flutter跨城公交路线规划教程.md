---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/route/transit
scraped_at: 2025-07-31T17:07:55.495613
description: loc
keywords: flutter
---

# 跨城综合公交路线规划

支持市内和跨城的公交线路规划，可检索火车、飞机、公交、大巴等公共交通线路。

根据起终点的关键字和城市名称，以及根据不同的方案选择多种策略，获取起终点之间的公交路线规划结果，来完成跨城综合公交线路规划。规划结果包含不同出行的多种策略（如火车、飞机、公交、大巴）、路线长度、耗时、途径的每个路段的详细信息等。

使用示例如下：
```javascript
// 构造检索参数
// 地名规划路线
BMFPlanNode from = BMFPlanNode(cityName: '北京', name: '百度大厦');
BMFPlanNode to = BMFPlanNode(cityName: '河北', name: '避暑山庄');
BMFMassTransitRoutePlanOption massTransitRoutePlanOption = 
    BMFMassTransitRoutePlanOption(from: from, to: to);

// 检索实例
BMFMassTransitRouteSearch massTransitRouteSearch = BMFMassTransitRouteSearch();

// 检索回调
massTransitRouteSearch.onGetMassTransitRouteSearchResult(callback: 
    (BMFMassTransitRouteResult result,  
      BMFSearchErrorCode errorCode) {   
        print(`跨城公交检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);  
        // 解析reslut，具体参考demo 
    });

// 发起检索
bool flag = await massTransitRouteSearch.massTransitRouteSearch(massTransitRoutePlanOption);
```
抱歉，您的浏览器不支持video标签

[下载开发文档](//mapopen-website-webapi.bj.bcebos.com/images/flutter/map/kuachengBusplan.mp4)