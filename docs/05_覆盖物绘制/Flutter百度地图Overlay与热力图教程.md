---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/overlay
scraped_at: 2025-07-31T16:57:02.701897
description: loc
keywords: flutter
---

# 绘制Overlay

本章节将对自定义图层（图片覆盖物GroundOverlay）、自定义热力图（heatmap）做详细说明。

## 自定义图片图层（图片覆盖物GroundOverlay）

Ground覆盖物，是一种位于底图和底图标注层之间的特殊Overlay，该图层不会遮挡地图标注信息。通过BMFGround类来设置，开发者可以通过BMFGround类设置一张图片，该图片可随地图的平移、缩放、旋转等操作做相应的变换。

示例代码如下：
```javascript
/// 西南角经纬度
BMFCoordinate southwest = BMFCoordinate(40.00235, 116.330338);

/// 东北角经纬度
BMFCoordinate northeast = BMFCoordinate(40.147246, 116.464977);
BMFCoordinateBounds bounds = BMFCoordinateBounds(southwest: southwest, northeast: northeast);

/// 构造ground
BMFGround bmfGround = BMFGround(
        image: 'resoures/groundIcon.png', bounds: bounds, transparency: 0.8);

/// 添加ground
myMapControlle?.addGround(bmfGround);
```
效果如图：

![ground.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/ground.jpg)

Ground更新(Android独有)

## 自定义热力图

热力图是用不同颜色的区块叠加在地图上描述人群分布、密度和变化趋势的一个产品，百度地图SDK将绘制热力图的能力为开发者开放，帮助开发者利用自有数据，构建属于自己的热力图，提供丰富的展示效果。

注意：此处的“热力图功能”不同于“百度城市热力图”。百度城市热力图通过简单的接口调用，开发者可展示百度数据的热力图层。而此处的热力图功能，需要开发者传入自己的位置数据（坐标），然后SDK会根据热力图绘制规则，为开发者做本地的热力图渲染绘制。

### 热力图生成的原理

大量自有坐标数据在地图打点，根据打点的密集程度，呈现热力图。

利用热力图功能构建自有数据热力图的方式如下：

1. 加载热力图数据

    ```javascript
    List<BMFCoordinate> _heatMapData = await loadHeatMapData();
    int count = _heatMapData.length;
    Random random = Random(900);
    ```
2. 构建热力图节点信息

    ```javascript
    List<BMFHeatMapNode> heatMapNodes = List(count);
    for (int i = 0; i < count; i++) {
        // random.nextInt(900) + 0.0 随机生成点强度
        heatMapNodes[i] = BMFHeatMapNode(
             pt: _heatMapData[i], intensity: random.nextInt(900) + 0.0);
    }
    ```
3. 设置颜色变化

    ```javascript
    BMFGradient gradient = BMFGradient(
        colors: [Colors.blue, Colors.yellow, Colors.red],
        startPoints: [0.08, 0.4, 1.0]);
    ```
4. 添加显示热力图

    ```javascript
    /// 热力图
    BMFHeatMap heatMap = BMFHeatMap(
            data: heatMapNodes, gradient: gradient, radius: 12, opacity: 0.6);
    await myMapController?.addHeatMap(heatMap);
    ```
显示效果如图：

![rlt.jpg](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/map/rlt.jpg)

### 移除热力图
```javascript
myMapController?.removeHeatMap();
```