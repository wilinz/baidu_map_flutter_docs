---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/search/poi
scraped_at: 2025-07-31T17:11:35.073972
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## POI检索

POI（Point of Interest），即“兴趣点”。在地理信息系统中，一个POI可以是一栋房子、一个景点、一个邮筒或者一个公交站等。

百度地图SDK提供三种类型的POI检索：城市内检索、周边检索和区域检索（即矩形区域检索）。下面分别对三种POI检索服务的使用方法作说明。

### POI城市检索

关键字检索适用于在某个城市内搜索某个名称相关的POI，例如：查找“北京市”的“小吃”。

使用示例如下：
```javascript
// 构造检索参数
BMFPoiCitySearchOption poiCitySearchOption = 
    BMFPoiCitySearchOption(city: '北京', keyword: '小吃');

// 检索实例
BMFPoiCitySearch poiCitySearch = BMFPoiCitySearch();

// 检索回调
poiCitySearch.onGetPoiCitySearchResult(callback:
    (BMFPoiSearchResult result, BMFSearchErrorCode errorCode) {
        print(`poi城市检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);
        // 解析reslut，具体参考demo 
    });

// 发起检索
bool flag = await poiCitySearch.poiCitySearch(poiCitySearchOption);
```
显示的效果如下：

![poichengshijiansuo.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/poichengshijiansuo.png)

### POI周边检索

周边检索是在一个圆形范围内的POI检索，适用于以某个位置为中心点，自定义搜索半径，搜索某个位置附近的POI。

使用示例如下：
```javascript
// 构造检索参数
BMFPoiNearbySearchOption poiNearbySearchOption = 
    BMFPoiNearbySearchOption(
      keywords: <String>['小吃', '酒店'], 
      location: BMFCoordinate(40.049557, 116.279295), 
      radius: 1000, 
      isRadiusLimit: true);

// 检索实例 
BMFPoiNearbySearch nearbySearch = BMFPoiNearbySearch();

// 检索回调 
nearbySearch.onGetPoiNearbySearchResult(callback: 
    (BMFPoiSearchResult result, BMFSearchErrorCode errorCode) {
    print(`poi周边检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);
    // 解析reslut，具体参考demo 
});

// 发起检索
bool flag = await nearbySearch.poiNearbySearch(poiNearbySearchOption);
```
显示的效果如下：

![poizhoubianjiansuo.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/poizhoubianjiansuo.png)

### POI矩形检索（POI区域检索）

POI区域检索，即"在由开发者指定的西南角和东北角组成的矩形区域内的POI检索"。

使用示例如下：
```javascript
// 构造检索参数
BMFPoiBoundSearchOption poiBoundSearchOption = 
    BMFPoiBoundSearchOption(
      keywords: <String>['小吃'], 
      leftBottom: BMFCoordinate(40.049557, 116.279295), 
      rightTop: BMFCoordinate(40.056057, 116.308102));

// 检索实例 
BMFPoiBoundSearch boundSearch = BMFPoiBoundSearch();

// 检索回调 
boundSearch.onGetPoiBoundsSearchResult(callback: 
    (BMFPoiSearchResult result, BMFSearchErrorCode errorCode) {
    print(`poi矩形检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);
    // 解析reslut，具体参考demo 
});

// 发起检索
bool flag = await boundSearch.poiBoundsSearch(poiBoundSearchOption);
```
显示的效果如下：

![poijuxingjiansuo.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/poijuxingjiansuo.png)

### POI详情检索

开发者可以针对Poi检索到的结果进行进一步的检索以获取详细信息。

使用示例如下：
```javascript
// 构造检索参数
BMFPoiDetailSearchOption poiDetailSearchOption = 
    BMFPoiDetailSearchOption(
      scope: BMFPoiSearchScopeType.DETAIL_INFORMATION,  
      poiUIDs: <String>['e96b44200baa3b4082288acc']);

// 检索实例 
BMFPoiDetailSearch poiDetailSearch = BMFPoiDetailSearch();

// 检索回调 
poiDetailSearch.onGetPoiDetailSearchResult(callback:  
    (BMFPoiDetailSearchResult result, BMFSearchErrorCode errorCode) {
        print(`poi详情检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);
        // 解析reslut，具体参考demo 
});

// 发起检索
bool flag = await poiDetailSearch.poiDetailSearch(poiDetailSearchOption);
```
显示的效果如下：

![poixiangqingjiansuo.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/poixiangqingjiansuo.png)

### POI室内检索

支持检索室内地图上的POI，即输入关键字后，返回室内图内的POI的点。

使用示例如下：
```javascript
// 构造检索参数
BMFPoiIndoorSearchOption poiIndoorSearchOption = 
    BMFPoiIndoorSearchOption(  
      indoorID: '1266498491660632063', 
      keyword: '小吃', 
      floor: '');

// 检索实例 
BMFPoiIndoorSearch poiIndoorSearch = BMFPoiIndoorSearch();

// 检索回调
poiIndoorSearch.onGetPoiIndoorSearchearchResult(callback:  
    (BMFPoiIndoorSearchResult result, BMFSearchErrorCode errorCode) {
        print(`poi室内检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);
        // 解析reslut，具体参考demo 
});

// 发起检索
bool flag = await poiIndoorSearch.poiIndoorSearch(poiIndoorSearchOption);
```
显示的效果如下：

![poishineijiansuo.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/poishineijiansuo.png)