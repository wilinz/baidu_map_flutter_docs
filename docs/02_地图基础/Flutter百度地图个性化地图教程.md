---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/create-map/custommap
scraped_at: 2025-07-31T17:03:27.863598
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 功能介绍

个性化地图，通过改变底图各元素和文字的颜色、可见性，实现地图多样展现效果，适配各个行业不同的地图呈现效果或适配不同App风格。

1. 支持设置地图点、线、面共51个元素，包含陆地、水系、绿地、人造区域、建筑物、道路、铁路、地铁，POI、行政区划、边界线等。
2. 支持设置的地图元素的颜色、透明度、宽度、指定级别控制元素及其可见性的变更。
3. 个性化地图功能示例代码位于基础地图（BaseMapDemo）这个功能模块，开发者使用时可以参考。

## 使用步骤

[选择模版/编辑个性化地图](https://lbsyun.baidu.com/apiconsole/custommap) —— 传入.sty文件路径/样式ID —— 开始使用个性化地图

### 1. 选择模版/编辑个性化地图

开发者可选择模版或者新建并配置个性化地图样式，打造独具风格与特色的地图。

![chooseTemplateNew.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iossdk/printscreen/chooseTemplateNew.png)

### 2. 发布样式，获取.sty样式ID或者下载样式文件

a、如图，点击发布样式

![ReleaseTheStyle.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iossdk/printscreen/releaseTheStyle.png)

b、选择确认发布

![EnsureToRelease.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iossdk/printscreen/ensureToRelease.png)

c、获取在线样式id

![StyleId.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iossdk/printscreen/styleId.png)

d、点击下载样式文件，选择下载STY文件，获取本地离线个性化样式文件

![DownloadSTY.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iossdk/printscreen/downloadSTY.png)

### 3. 使用个性化地图

方式一：配置.sty样式ID
```javascript
BMFCustomMapStyleOption customMapStyleOption = BMFCustomMapStyleOption(
      customMapStyleID: "ab0e0251e4e768a96dffde39e0034b12");

myMapController?.setCustomMapStyleWithOptionPath(
     customMapStyleOption: styleOption(),
     preload: (String path) {
       print('preload');
     },
     success: (String path) {
       print('success');
     },
     error: (int errorCode, String path) {
       print('error');
     });
```
方式二：加载样式文件

a、 在项目中添加自定义样式文件 如：将离线样式文件存放在files目录下。

![custommap1.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/custommap1.png)

b、 传入样式文件路径：

能够实现动态更改样式(同一地图设置不同的样式)，同时适配多地图场景（不同地图设置不同的样式），并且样式文件路径设置API不再要求在地图创建之前调用，地图对象创建完成之后设置即可。在地图对象释放时，也无需关闭个性化开关。详细区别见[个性化地图元素说明规则](https://lbsyun.baidu.com/faq/api?title=androidsdk/guide/appendix)
```javascript
myMapController?.setCustomMapStyle('files/custom_map_config.sty', 0)
```
### 4. 至此，可以开始使用个性化地图。

个性化地图效果图：

![custommap2.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/custommap2.jpg)