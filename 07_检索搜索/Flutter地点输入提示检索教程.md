---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/guide/search/suggestion
scraped_at: 2025-07-31T17:03:49.060130
description: loc
keywords: flutter
---

# 地点输入提示检索

地点检索输入提示服务，简称 Sug 检索，是指根据关键词查询在线建议词。为了帮助开发者实现检索出来的关键词快速定位到地图上。

使用示例如下：
```javascript
// 构造检索参数
BMFSuggestionSearchOption suggestionSearchOption = 
    BMFSuggestionSearchOption(keyword: '中关村', cityname: '北京');

// 检索实例
BMFSuggestionSearch suggestionSearch = BMFSuggestionSearch();

// 检索回调
suggestionSearch.onGetSuggestSearchResult(callback: 
    (BMFSuggestionSearchResult result, BMFSearchErrorCode errorCode) {
        print(`sug检索回调 result = ${result.toMap()}, errorCode = ${errorCode}`);
        // 解析reslut，具体参考demo 
    }
);

// 发起检索
bool flag = await suggestionSearch.suggestionSearch(suggestionSearchOption);
```
显示的效果如下：

![sugjiansuo.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/sugjiansuo.png)