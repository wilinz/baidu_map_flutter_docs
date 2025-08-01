---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/search/district
scraped_at: 2025-07-31T17:10:46.437020
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 行政区边界数据检索

支持行政区边界数据检索。根据省、市、县（区）级行政区划名称，返回所查询行政区划边界的详细信息。

使用示例如下：
```javascript
// 构造检索参数
BMFDistrictSearchOption districtSearchOption = 
    BMFDistrictSearchOption(city: '北京', district: '海淀区');

// 检索实例
BMFDistrictSearch districtSearch = BMFDistrictSearch();

// 检索回调
districtSearch.onGetDistrictSearchResult(callback: 
    (BMFDistrictSearchResult result, BMFSearchErrorCode errorCode) {   
      print(`行政检索回调 errorCode = ${errorCode}, result = ${result?.toMap()}`);  
     // 解析reslut，具体参考demo 
    });

// 发起检索
bool flag = await districtSearch.districtSearch(districtSearchOption);
```
显示的效果如下：

![district.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/district.png)