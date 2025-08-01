---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/text
scraped_at: 2025-07-31T17:08:43.375733
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 添加文字

文字（Text）在地图上也是一种覆盖物，由BMFText类定义,示例代码如下：
```javascript
/// text经纬度信息
BMFCoordinate position = new BMFCoordinate(39.73235, 116.350338);

/// 构造text
BMFText bmfText = BMFText(
        text: 'hello world',
        position: position,
        bgColor: Colors.blue, 
        fontColor: Colors.red, 
        fontSize: 40, 
        typeFace: BMFTypeFace( familyName: BMFFamilyName.sMonospace,  
                textStype: BMFTextStyle.BOLD_ITALIC),
        alignY: BMFVerticalAlign.ALIGN_TOP,
        alignX: BMFHorizontalAlign.ALIGN_LEFT,
        rotate: 30.0);

/// 添加text
myMapController.addText(bmfText);
```
运行结果如下：

![text.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/text.jpg)

## Text更新（Android独有）

## Dot更新（Android独有）