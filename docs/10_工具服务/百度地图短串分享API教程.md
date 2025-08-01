---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/tool/share
scraped_at: 2025-07-31T17:07:07.910124
description: loc
keywords: flutter
---

# POI详情短串分享

使用示例如下：
```javascript
// 构造检索参数
BMFPoiDetailShareURLOption poiDetailShareURLOption = 
    BMFPoiDetailShareURLOption(uid: 'ba97895c02a6ddc7f60e775f');  

// poi详情短串分享检索 
BMFPoiDetailShareUrlSearch poiDetailShareUrlSearch = BMFPoiDetailShareUrlSearch();

// poi详情短串分享检索信息结果回调
poiDetailShareUrlSearch.onGetPoiDetailShareURLResult(
    callback: (BMFShareURLResult result, BMFSearchErrorCode errorCode) {
      print(`poi详情短串分享检索信息 result = ${result.toMap()}, errorCode = ${errorCode}`);
        // 解析reslut，具体参考demo 
    }
);

// 发起检索 
bool flag = await poiDetailShareUrlSearch.poiDetailShareUrlSearch(poiDetailShareURLOption);
```
## 逆地理编码短串分享

使用示例如下：
```javascript
// 构造检索参数
BMFReverseGeoShareURLOption reverseGeoShareURLOption =  
    BMFReverseGeoShareURLOption(  
      location: BMFCoordinate(40.0498500000, 116.2799200000), 
      name: '位置检索', 
      snippet: '北京市海淀区西北旺东路10号院'
    );

// 检索实例 
BMFReverseGeoShareUrlSearch reverseGeoShareUrlSearch = BMFReverseGeoShareUrlSearch();

// 检索回调 
reverseGeoShareUrlSearch.onGetReverseGeoShareURLResult(
    callback: (BMFShareURLResult result, BMFSearchErrorCode errorCode) {  
      print(`获取逆地理编码短串分享url result = ${result.toMap()}, errorCode = ${errorCode}`);
      // 解析reslut，具体参考demo 
    }
);

// 发起检索
bool flag = await reverseGeoShareUrlSearch.reverseGeoShareUrlSearch(reverseGeoShareURLOption);
```
## 路线规划短串分享

使用示例如下：
```javascript
// 构造检索参数
BMFPlanNode start = BMFPlanNode(cityID: 131, name: '百度大厦');
BMFPlanNode end = BMFPlanNode(cityID: 131, name: '天安门');  

// 路线规划短串分享检索信息类 
BMFRoutePlanShareURLOption routePlanShareURLOption = 
    BMFRoutePlanShareURLOption( 
      from: start, 
      to: end, 
      routePlanType: BMFRoutePlanShareURLType.DRIVE
    );

// 检索实例 
BMFRoutePlanShareUrlSearch routePlanShareUrlSearch = BMFRoutePlanShareUrlSearch();

// 检索回调 
routePlanShareUrlSearch.onGetRoutePlanShareURLResult(  
    callback: (BMFShareURLResult result, BMFSearchErrorCode errorCode) {  
      print(`获取路线规划短串分享url result = ${result.toMap()}, errorCode = ${errorCode}`);
      // 解析reslut，具体参考demo 
    }
);

// 发起检索
bool flag = await routePlanShareUrlSearch.routePlanShareUrlSearch(routePlanShareURLOption);
```