---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/search/uppoint
scraped_at: 2025-07-31T16:55:46.942142
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 推荐上车点

推荐上车点功能是基于用户定位的周边范围内的道路信息、步行距离、方向等信息实现的，该数据依托百度位置大数据的沉淀积累，推送合理上车点，降低接驾时间。

使用示例如下：
```javascript
// 构造检索参数
BMFRecommendStopSearchOption recommendStopSearchOption = 
    BMFRecommendStopSearchOption(
      location: BMFCoordinate(40.047471, 116.31372)
    );

// 检索实例
BMFRecommendStopSearch recommendStopSearch = BMFRecommendStopSearch();

// 检索回调
recommendStopSearch.onGetRecommendStopSearchResult(callback:   
    (BMFRecommendStopSearchResult result,  
      BMFSearchErrorCode errorCode) { 
        print(`推荐上车点检索回调 result = ${result.toMap()}, errorCode = ${errorCode}`);  
        // 解析reslut，具体参考demo 
       });
// 发起检索 
bool flag = await recommendStopSearch.recommendStopSearch(recommendStopSearchOption);
```
显示的效果如下：

![uppoint.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/uppoint.png)