---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/render-map/ployline
scraped_at: 2025-07-31T17:03:06.751548
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK
```markdown
# Flutter | 百度地图API SDK

## Flutter插件

### 简介

Flutter插件用于在Flutter应用中集成百度地图功能。通过该插件，开发者可以在应用中实现地图显示、定位、标记等功能。

### 安装

在`pubspec.yaml`中添加依赖：
```yaml
dependencies:
  flutter_baidu_map: ^latest_version
```
### 使用示例
```dart
import 'package:flutter_baidu_map/flutter_baidu_map.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('百度地图示例'),
        ),
        body: BaiduMapView(
          onMapCreated: _onMapCreated,
        ),
      ),
    );
  }

  void _onMapCreated(BaiduMapController controller) {
    // 初始化地图
  }
}
```
### API 说明

#### BaiduMapView

- **描述**: 地图视图组件，用于显示百度地图。
- **参数**:
  - `onMapCreated`: 地图创建完成的回调。

#### BaiduMapController

- **描述**: 地图控制器，用于操作地图。
- **方法**:
  - `moveCamera`: 移动地图视角。
  - `addMarker`: 添加地图标记。

### 常见问题

1. **如何获取API Key？**
   - 在百度开发者平台申请API Key，并在项目中进行配置。

2. **地图无法显示？**
   - 检查网络连接和API Key配置是否正确。

### 版本更新

- **v1.0.0**: 初始版本，支持基本地图功能。
- **v1.1.0**: 增加定位功能。

### 联系我们

如有问题，请通过[官方论坛](https://developer.baidu.com/forum)与我们联系。
```

### 绘制点标记

### 绘制弧线和面

### 绘制折线

### 绘制虚线

### 分段颜色绘制折线

### 分段纹理绘制折线

### 大地曲线

### 绘制渐变线

### Polyline的点击事件

### Polyline更新接口