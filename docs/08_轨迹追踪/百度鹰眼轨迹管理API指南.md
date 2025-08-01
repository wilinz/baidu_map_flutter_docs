---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/concept
scraped_at: 2025-07-31T17:08:34.229400
description: loc
keywords: flutter
---

# 鹰眼基本概念

鹰眼涉及到以下概念

## service

**概念：** 一个service（即鹰眼轨迹服务）对应一个轨迹管理系统，一个service里可管理多个终端设备（即entity），service的唯一标识符是service_id。例如，针对某出租车公司的轨迹管理系统，可以创建一个service，在其中管理所有出租车的轨迹。

**配额：** 一个账号最多可创建10个service，若需申请更多 service 配额，请注明 ak 以及应用场景，通过[反馈平台](https://lbsyun.baidu.com/apiconsole/fankui)联系我们。

**使用：** 开发者可在轨迹管理台管理service，包括service的创建、编辑和查看。

## entity

**概念：** 一个entity代表现实中一个被追踪轨迹的终端设备，它可以是一个人、一辆车或者任何运动物体。同一个service中，entity以entity_name作为唯一标识。

**配额：** 一个service至多同时管理100万个entity。

**使用：** 鹰眼提供了entity的增、删、改、查接口。

## entity column

**概念：** entity的自定义属性字段，由开发者管理，用以描述entity，如：对于车辆可以是车牌号、司机姓名字段等。

**配额：** 一个service可以自定义最多5个属性字段，其中可设置2个属性作为检索字段。

**使用：** 鹰眼Web轨迹管理台提供了管理entity自定义字段的操作界面，详见[轨迹管理台使用手册](https://lbsyun.baidu.com/faq/api?title=yingyan/guide/webmanager)。

## track

**概念：** entity移动所产生的连续轨迹被称为track，track由一系列轨迹点（point）组成。

**配额：** 轨迹点数量无限制。

**使用：** 鹰眼提供了添加轨迹点、批量添加轨迹点、查询历史轨迹接口。使用鹰眼Android SDK时，SDK会根据开发者设定的频率定位，回传轨迹点。

## track column

**概念：** 除坐标、速度、方向、定位时间等轨迹点的系统字段外，鹰眼支持开发者添加轨迹点的自定义字段，例如：汽车的油量、运动时的心率等，用以随轨迹点记录其他信息。

**配额：** 一个service可以自定义10个字段。

**使用：** 鹰眼Web轨迹管理台提供了管理track自定义字段的操作界面，详见[轨迹管理台使用手册](https://lbsyun.baidu.com/index.php?title=yingyan/guide/webmanager)。使用鹰眼Android SDK时，开发者须重写OnTrackListener监听器中的onTrackAttrCallback()接口，在回传轨迹点时回传属性数据。

## fence

**概念：** fence即地理围栏，是指一定范围（如：圆形、多边形、线型、行政区）的虚拟地理区域。当entity进入/离开该区域时，鹰眼将自动推送报警至开发者。开发者接收到报警后，可进行业务处理。

**配额：** 一个entity最多可创建100个私有地理围栏，一个service可创建1000个公共围栏。

**使用：** 鹰眼API和SDK提供了fence的增删改查接口，以及查询被监控者在围栏内/外、查询历史报警信息等接口。

## object

**概念：** object代表图像、视频等对象数据。鹰眼支持开发者随轨迹上传图像数据，支持图像数据的存储、查询、下载。

**配额：** 参见鹰眼接口object类配额，[详细了解](https://lbsyun.baidu.com/faq/api?title=android-yingyan/guide/quota)。