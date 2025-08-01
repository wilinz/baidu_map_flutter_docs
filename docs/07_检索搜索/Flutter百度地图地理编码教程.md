---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/search/geo
scraped_at: 2025-07-31T17:11:25.492438
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 地理编码

地理编码是地址信息和地理坐标之间的相互转换。可分为正地理编码（地址信息转换为地理坐标）和逆地理编码（地理坐标转换为地址信息）。

### 正地理编码

使用示例如下：
```javascript
// 构造检索参数
BMFGeoCodeSearchOption geoCodeSearchOption =  
    BMFGeoCodeSearchOption(address: '百度大厦', city: "北京");

// 检索实例
BMFGeocodeSearch geocodeSearch = BMFGeocodeSearch();

// 正地理编码回调
geocodeSearch.onGetGeoCodeSearchResult(callback: 
    (BMFGeoCodeSearchResult result, BMFSearchErrorCode errorCode) { 
        print(`正地理编码  errorCode = ${errorCode}, result = ${result?.toMap()}`);  
        // 解析reslut，具体参考demo 
    });

// 发起检索 
bool flag = await geocodeSearch.geoCodeSearch(geoCodeSearchOption);
```
显示的效果如下：

![geo.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/geo.png)

### 逆地理编码检索

使用示例如下：
```javascript
// 构造检索参数
BMFReverseGeoCodeSearchOption reverseGeoCodeSearchOption = 
    BMFReverseGeoCodeSearchOption(
      location: BMFCoordinate(40.049850, 116.279920));

// 检索实例 
BMFReverseGeoCodeSearch reverseGeoCodeSearch = BMFReverseGeoCodeSearch();

// 逆地理编码回调 
reverseGeoCodeSearch.onGetReverseGeoCodeSearchResult(callback: 
    (BMFReverseGeoCodeSearchResult result, BMFSearchErrorCode errorCode) {  
        print(`逆地理编码  errorCode = ${errorCode}, result = ${result?.toMap()}`); 
        // 解析reslut，具体参考demo 
    });

// 发起检索
bool flag = await reverseGeoCodeSearch.reverseGeoCodeSearch(reverseGeoCodeSearchOption);
```
显示的效果如下：

![geo2.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/geo2.png)