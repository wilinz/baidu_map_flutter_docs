---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/search/weather
scraped_at: 2025-07-31T17:04:51.594947
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 天气服务

### 国内天气查询

国内天气查询服务分为基础服务和高级权限。

在基础服务中，用户可通过行政区划代码查询实时天气信息及未来5天天气预报。在高级权限中，用户可通过经纬度查询实时天气信息、未来7天天气预报及未来24小时逐小时预报。同时，用户还可以通过高级权限获取国内空气质量指数、生活指数、气象预警等丰富信息。

### 海外天气查询

海外天气查询服务分为基础服务和高级权限。

在基础服务中，用户可通过行政区划代码查询实时天气信息及未来5天天气预报。在高级权限中，用户可通过经纬度查询实时天气信息、未来7天天气预报及未来24小时逐小时预报。同时，用户还可以通过高级权限获取云量、能见度、降水量等信息。

高级权限需付费开通，您可以[联系我们](https://lbsyun.baidu.com/apiconsole/fankui#?typeOne=产品需求&typeTwo=高级服务)开通15天试用并了解更多信息。

使用示例如下：
```javascript
// 构造检索参数
BMFWeatherSearchOption weatherSearchOption = BMFWeatherSearchOption(
    location: null,
    districtID: "110108",
    serverType: BMFWeatherServerType.Default,
    dataType: BMFWeatherDataType.Now,
    languageType: BMFLanguageType.Chinese
);

// 检索实例
BMFWeatherSearch weatherSearch = BMFWeatherSearch();

// 检索回调
weatherSearch.onGetWeatherSearchResult(callback:  
    (BMFWeatherSearchResult result, BMFSearchErrorCode errorCode) {  
      print(`天气检索回调 result = ${result.toMap()}, errorCode = ${errorCode}`);
        // 解析reslut，具体参考demo 
       }
);

// 发起检索 
bool flag = await weatherSearch.weatherSearch(weatherSearchOption);
```
显示的效果如下：

![weather.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/weather.png)