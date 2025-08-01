---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/aggregation
scraped_at: 2025-07-31T17:10:30.706507
description: loc
keywords: flutter
---

# Flutter | 百度地图API SDK

## 绘制点聚合

Flutter 插件自 V 3.7.0 开始支持点聚合功能，可通过缩小地图层级，将定义范围内的多个标注点，聚合显示成一个标注点，解决加载大量点要素到地图上产生覆盖现象的问题，并提高性能。

### iOS绘制点聚合的方法

1. 在地图创建完成后，设置需要聚合的cluster经纬度及聚合距离。
```javascript
/// 随机获取100个经纬度点
List<BMFClusterInfo> clusterInfoList = [];
BMFCoordinate coordinate = BMFCoordinate(39.915, 116.404);
for (int i = 0; i < 100; i++) {
    Random random = Random();
    double lat = coordinate.latitude + (random.nextInt(100) * 0.001);
    double lon = coordinate.longitude + (random.nextInt(100) * 0.001);
    
    String imagePath = 'resoures/icon_mark.png';
    Uint8List imageBytes = await imageToUint8List(imagePath);
    
    BMFCoordinate coord = BMFCoordinate(lat, lon);
    clusterInfoList.add(
        new BMFClusterInfo.iconData(coordinate: coord, iconData: imageBytes)
    );
}
/// 设置聚合点最大距离
bool res1 = await myMapController
    .setClusterMaxDistanceInDP(Platform.isIOS ? 200 : 100);
print('最大距离设置结果：$res1');

/// 设置聚合点的经纬度
bool res = await myMapController.setClusterCoordinates(clusterInfoList);
print('点聚合设置结果：$res');

/// 如果需要首次展示地图时就展示聚合点，就需要调用onRefreshClusters
if (Platform.isIOS) {
    /// 获取地图状态
    BMFMapStatus? status = await myMapController.getMapStatus();
    /// 根据当前的level刷新聚合点
    onRefreshClusters(status!);
}
```
2. 添加刷新聚合点的方法

注：widgetToImage自定义cluster样式可以参考demo实现
```javascript
/// 刷新点聚合
void onRefreshClusters(BMFMapStatus status) async {
    /// 根据当前的level获取聚合点列表
    clusters = await myMapController.getClusterOnZoomLevel(status.fLevel!.toInt());
    List<BMFClusterInfo> clusterInfos = [];
    for (BMFClusterInfo? item in clusters) {
        if (item == null) continue;
        int size = item.size!;
        /// 自定义聚合点样式
        if (size > 1) {
            CircularTextWidget text = CircularTextWidget(
                text: '$size',
                radius: 60.0,
                backgroundColor: Colors.blue,
                textColor: Colors.white,
            );
            // 将Widget转换为图像
            Uint8List? imageBytes = await widgetToImage(text);
            clusterInfos.add(new BMFClusterInfo.iconData(
                coordinate: item.coordinate, iconData: imageBytes, size: size));
        } else {
            clusterInfos.add(new BMFClusterInfo.icon(
                coordinate: item.coordinate, icon: 'resoures/icon_end.png', size: size));
        }
    }
    /// 刷新聚合点
    bool res = await myMapController.refreshClusters(clusterInfos);
    print('refreshClusters-- res = $res');
}
```
3. 在合适的时机根据当前的地图级别去刷新cluster
```javascript
/// 地图状态改变回调
myMapController.setMapRegionDidChangeCallback(
    callback: (BMFMapStatus status) async {
        print('mapRegionDidChange--');
        if (Platform.isIOS) {
            /// 根据当前的level刷新聚合点
            onRefreshClusters(status);
        }
    }
);
```
### Android绘制点聚合的方法

1. 在地图创建完成后，设置需要聚合的cluster经纬度及聚合距离。
```javascript
/// 随机获取100个经纬度点
List<BMFClusterInfo> clusterInfoList = [];
BMFCoordinate coordinate = BMFCoordinate(39.915, 116.404);
for (int i = 0; i < 100; i++) {
    Random random = Random();
    double lat = coordinate.latitude + (random.nextInt(100) * 0.001);
    double lon = coordinate.longitude + (random.nextInt(100) * 0.001);
    
    String imagePath = 'resoures/icon_mark.png';
    Uint8List imageBytes = await imageToUint8List(imagePath);
    
    BMFCoordinate coord = BMFCoordinate(lat, lon);
    clusterInfoList.add(
        new BMFClusterInfo.iconData(coordinate: coord, iconData: imageBytes)
    );
}
/// 设置聚合点最大距离
bool res1 = await myMapController
    .setClusterMaxDistanceInDP(Platform.isIOS ? 200 : 100);
print('最大距离设置结果：$res1');

/// 设置聚合点的经纬度
bool res = await myMapController.setClusterCoordinates(clusterInfoList);
print('点聚合设置结果：$res');
```
### 点击回调事件
```javascript
/// 点聚合的点击事件
/// android独有
myMapController.setMapClusterClickCallback(
    callback: (List<BMFClusterInfo> clusterList, int size) {
        for (BMFClusterInfo item in clusterList) {
            print('setMapClusterClickCallback-- item = ${item.toMap()}');
        }
        print('setMapClusterClickCallback-- size = $size');
    }
);

/// 双端共有回调
myMapController.setMapClusterItemClickCallback(
    callback: (BMFClusterInfo cluster) {
        print('setMapClusterItemClickCallback-- cluster = ${cluster.toMap()}');
    }
);
```