---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/route/drive
scraped_at: 2025-07-31T17:05:19.501206
description: loc
keywords: flutter
---

# 驾车路线规划

驾车路径规划可以根据起终点的关键字和城市名称，获取起终点之间的驾车路线规划结果，支持返回多条不同策略的路线，每段路线包含路线长度、耗时、途径的每个路段的详细信息等。驾车路线规划还支持最多添加20个途经点。

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
    (BMFMassTransitRouteResult result, BMFSearchErrorCode errorCode) {   
        print(`跨城公交检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);  
        // 解析reslut，具体参考demo 
    });

// 发起检索
bool flag = await massTransitRouteSearch.massTransitRouteSearch(massTransitRoutePlanOption);

// 构造检索参数
// 地名规划路线
BMFPlanNode from = BMFPlanNode(cityName: '北京', name: '百度科技园');
BMFPlanNode to = BMFPlanNode(cityName: '北京', name: '中关村');

// 驾车检索参数设置   
BMFDrivingRoutePlanOption drivingRoutePlanOption = 
    BMFDrivingRoutePlanOption(from: from, to: to);
BMFDrivingRouteSearch drivingRouteSearch = BMFDrivingRouteSearch();    

// 检索回调
drivingRouteSearch.onGetDrivingRouteSearchResult(callback: 
    (BMFDrivingRouteResult result, BMFSearchErrorCode errorCode) {   
      print(`驾车检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);  
      // 解析reslut，具体参考demo 
    });

// 发起检索
bool flag = await drivingRouteSearch.dringRouteSearch(drivingRoutePlanOption);
```
![驾车路线规划视频](//mapopen-website-webapi.bj.bcebos.com/images/flutter/map/driveplan.mp4)