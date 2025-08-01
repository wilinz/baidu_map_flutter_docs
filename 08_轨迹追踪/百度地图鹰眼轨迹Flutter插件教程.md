---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/introduction
scraped_at: 2025-07-31T17:07:36.377566
description: loc
keywords: flutter
---

# 简介

### 什么是鹰眼轨迹Flutter插件?

鹰眼轨迹Flutter插件是一套基于Android鹰眼SDK和iOS鹰眼SDK封装的Flutter插件，您可以通过调用Flutter层接口实现两端轨迹追踪功能：

- **轨迹追踪**：按照设定的频率主动采集实时轨迹
- **轨迹存储**：云端实现海量轨迹数据存储
- **轨迹查询**：查询被追踪者实时位置、历史轨迹和里程
- **轨迹纠偏**：云端对轨迹进行实时去噪、绑路、抽稀处理，解决轨迹偏移问题
- **地理围栏**：当被追踪者进出一定范围（圆形、多边形、线型、行政区）的虚拟地理区域时，监控者可以接收到自动报警通知

> 提示：使用任何鹰眼轨迹接口前，必须先在[轨迹管理台](https://lbsyun.baidu.com/trace/admin/service)中创建鹰眼服务，获得servie_id后方可正式使用鹰眼轨迹。

一个service（即鹰眼轨迹服务，其唯一标识为service_id）对应一个的轨迹管理系统，至多同时管理100万个entity（即终端设备）。若需管理超过100万的终端，可创建多个service分别管理。