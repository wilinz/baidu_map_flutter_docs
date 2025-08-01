---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/quota
scraped_at: 2025-07-31T17:05:00.344064
description: loc
keywords: flutter
---

# flutter | 百度地图API SDK

## 权限说明

鹰眼开发者的使用权限包括：

1. **数据存储**：开发者可向自己的鹰眼服务中上传轨迹数据。鹰眼将为开发者存储最近1年的轨迹数据，若需保留1年之外的轨迹数据，开发者可通过轨迹查询或轨迹批量导出接口将数据下载到自己的服务器中备份，或可通过[反馈平台](https://lbsyun.baidu.com/apiconsole/fankui)联系我们，申请延长存储期限。

2. **数据访问**：开发者创建的鹰眼服务可被该帐号下的ak访问，除非开发者授权，否则不可被其他用户访问。开鹰眼轨迹管理台提供授权功能，支持开发者将自有 service 授权给其他开发者访问。

## 配额说明

开放平台的每一类 API 都有调用配额限制，配额为帐号下所有ak和service共用。鹰眼针对不同类型的开发者设定了默认配额，如下表所示。

![quota2020.png](https://mapopen-website-webapi.bj.bcebos.com/images/flutter/yingyan/quota2020.png)

## 配额计算方法

鹰眼请求量计算方法为：通过鹰眼 Web 服务 API 或 鹰眼SDK 调用一次接口计一次配额。除此以外，**用户访问鹰眼轨迹管理台产生的entity列表刷新（默认10s一次）、实时位置搜索、轨迹查询等请求也计算入账户的配额消费**。

通过API和SDK调用鹰眼接口的配额消耗说明如下：

- 通过 API 调用一次track/gettrack，算作一次请求
- 通过 API 调用track/addpoints，上传了200个轨迹点，若拆分为2次上传（每次上传100个轨迹点），算作2次请求
- 通过 SDK 调用一次 starttgather()方法上传1000个轨迹点，若定位频率为6秒一次，上传周期为60秒一次，则轨迹分100次上传，算作100次请求（注：该配额计算策略从V3.1.0版本及以后版本生效，历史版本上传轨迹点不计算配额）
- 通过 SDK 的 queryentitylist()方法，查询entity 实时位置，算作一次请求

鹰眼API配额分为"PV（请求次数/日）"和"QPS（请求次数/秒）"两类：

- **PV**：通过 SDK 的 queryentitylist()方法，查询entity 实时位置，算作一次请求
- **QPS**：即每秒请求鹰眼接口的次数，鹰眼接口分为几类，每类接口的并发配额不同。

鹰眼接口分类如下：

- **轨迹查询**：含轨迹查询、里程查询等3个接口：track/getlatestpoint，track/getdistance，track/gettrack
- **轨迹分析**：含停留点分析和驾驶行为分析2个接口：analysis/staypoint，analysis/drivingbehavior
- **object（图像）**：SDK中图像数据上传和查询类接口（鹰眼iOS SDK暂不支持object相关功能）
- **SDK轨迹上传**：通过鹰眼Android和iOS SDK上传轨迹的并发（计算的是小时级并发，即：1小时内请求的PV/3600）
- **其他**：除以上四组类接口以外的接口，如：轨迹上传（track/addpoint，track/addpoints）、地理围栏、entity增删改查等

## 配额计算示例

开发者可根据活跃entity数、每个entity 调用鹰眼 API 的频率（一分钟调用几次）以及每日在线时长（一天调用多少小时）估算日调用量和并发量。

示例：某开发者利用鹰眼管理一个车队，该车队每日活跃车辆数为1,000辆，车辆每10秒定位一次，每分钟查询1次轨迹，车辆平均每天在线12小时，配额计算如下：

- **上传轨迹并发**：1,000 车辆 * 6次/分钟 = 6,000次/分钟 = 100次/秒
- **查询轨迹并发**：1,000 车辆 * 1次/分钟=1,000 次/分钟 = 17次/秒
- **日pv**：（100 + 17）次/秒 * 3600秒 * 12 小时 = 505.44万次

其他接口以此类推。

## 服务使用限制

服务相关配额及并发请求限制请访问[开发者权益](https://lbsyun.baidu.com/apiconsole/auth/privilege)页面查看。