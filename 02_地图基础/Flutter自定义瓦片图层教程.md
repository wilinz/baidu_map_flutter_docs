---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/addtitle
scraped_at: 2025-07-31T17:10:07.215950
description: loc
keywords: flutter
---

# 自定义瓦片图层

该图层支持开发者添加自有瓦片数据。该图层可随地图的平移、缩放、旋转等操作做相应的变换，它仅位于底图之上（即瓦片图层将会遮挡底图，不遮挡其他图层），瓦片图层的添加顺序不会影响其他图层（例如：POI搜索图层、我的位置图层等）的叠加关系。

通过瓦片图层可对基础底层地图添加额外的特性，如：某个商场的室内信息、某个景区的详情等等。自定义图层类是BMFTile，它定义了能添加到基础底层地图的图片集合。

适用于开发者拥有某一区域的地图，并希望使用此区域地图覆盖相应位置的百度地图。

**瓦片图划分规则**

百度地图SDK会根据不同的比例尺将地图划分成若干个瓦片，并且以中心点经纬度(0,0)开始计算瓦片，当地图显示缩放级别增大时，每一个瓦片被划分成4个瓦片。

如：地图级别为0时，只有1张瓦片地图级别为1时，会分成 1 * 4 = 4 张瓦片依次类推，地图级别为n时，总共划分的瓦片为：4的n次方，为了保证瓦片的显示效果，第n级的瓦片显示的地图level范围为[n - 0.5, n + 0.5)

## 瓦片图绘制方式

### 本地加载

瓦片图层通过BMFTile类定义，通过addTile方法添加至地图。

需要将瓦片图的图片资源放到工程下的Resoures/bmflocaltileimage目录，并按照缩放级别放置到相应子目录：

![wpt1.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/wpt1.png)

注：瓦片图的尺寸必须满足256 * 256

示例代码如下：
```javascript
/// 瓦片图显示边界
BMFCoordinateBounds visibleMapBounds = BMFCoordinateBounds(
        northeast: BMFCoordinate(39.94001804746338, 116.41224644234747),
        southwest: BMFCoordinate(39.90299859954822, 116.38359947963427));

/// 构造瓦片图
BMFTile tile = BMFTile(
        tileLoadType: BMFTileLoadType.LoadLocalAsyncTile,
        visibleMapBounds: visibleMapBounds,
        maxZoom: 17,
        minZoom: 16);

/// 添加瓦片图
myMapController?.addTile(tile);
```
显示效果如图：

![wpt2.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/wpt2.jpg)

### 在线加载

开发者需要实现BMFTile类，在其中设置缩放级别范围和在线瓦片图的URL地址。

示例代码如下：
```javascript
BMFCoordinateBounds visibleMapBounds = BMFCoordinateBounds(
    northeast: BMFCoordinate(80, 180),
    southwest: BMFCoordinate(-80, -180)); // 地理范围

BMFTile tile = BMFTile(
    tileLoadType: BMFTileLoadType.LoadUrlTile, // 瓦片图加载方式-网络加载 
    url: 'http://online1.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20190528',
    visibleMapBounds: visibleMapBounds, // 可渲染区域，默认世界范围
    maxZoom: 20, // 最大最小缩放级别
    minZoom: 4);

_tileOnlineMap = tile;
myMapController?.addTile(tile);
```
显示效果如图：

![wapiantushili.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/wapiantushili.jpg)