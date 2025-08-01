---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/analysis
scraped_at: 2025-07-31T17:06:36.255340
description: loc
keywords: flutter
---

# 轨迹分析

## 简介

参考：[iOS原生SDK](https://lbsyun.baidu.com/faq/api?title=ios-yingyan/guide/analysis) / [Android原生SDK](https://lbsyun.baidu.com/faq/api?title=android-yingyan/guide/analysis)

## 停留点分析
```javascript
/// 构造检索参数
DrivingBehaviourAnalysisOption drivingBehaviourAnalysisOption = 
    DrivingBehaviourAnalysisOption(
        entityName: entityName_test, // 需要查询的entity的名称，必填，必须为非空字符串。
        startTime: startTime, // 开始时间，必选。
        endTime: endTime, // 结束时间，必选。
        tag: 1, // 
        serviceId: serviceID, // 
        speedingThreshold: 0, // 固定限速值，可选。
        thresholdOption: 
            DrivingBehaviorThresholdOption(speedingThreshold: 0), // 自定义轨迹分析时需要的阈值，可选。
        processOption: QueryTrackProcessOption( // 纠偏选项，用于控制返回坐标的纠偏处理方式。
            denoise: true, // 纠偏时是否需要去噪，TRUE代表去噪
            vacuate: true, // 纠偏时是否需要抽稀，TRUE代表抽稀。
            mapMatch: true, // 纠偏时是否需要绑路，TRUE代表绑路
            radiusThreshold: 20, // 纠偏时的定位精度过滤阀值，用于过滤掉定位精度较差的轨迹点。
            transportMode: TrackProcessOptionTransportMode.AUTO),
        outputCoordType: CoordType.BD09LL // 返回的坐标类型，可选。
    );

/// 发起检索
bool flag = await TraceController.shareInstance
    .analyzeDrivingBehaviour(
        drivingBehaviourAnalysisOption: drivingBehaviourAnalysisOption,
        analysisCallBack: AnalysisCallBack(
            onDrivingBehaviourAnalysisCallBack: 
                (DrivingBehaviourAnalysisResult result) {
            print('-- 驾驶行为分析回调 result = ${result?.toMap()}');
            // 解析reslut，具体参考demo
        })
    );

print('-- 驾驶行为分析 flag = $flag');
```
## 驾驶行为分析
```javascript
/// 构造检索参数
StayPointAnalysisOption stayPointAnalysisOption = 
    StayPointAnalysisOption(
        entityName: entityName_test, // 
        startTime: startTime, // 
        endTime: endTime, // 
        tag: 1, // 
        serviceId: serviceID, // 
        stayRadius: 20, // 
        processOption: QueryTrackProcessOption(  // 
            denoise: true, // 
            vacuate: true, // 
            mapMatch: true, // 
            radiusThreshold: 20, // 
            transportMode: TrackProcessOptionTransportMode.AUTO),
        outputCoordType: CoordType.BD09LL // 返回的坐标类型，可选。
    );

/// 发起检索
bool flag = await TraceController.shareInstance.analyzeStayPoint(
    stayPointAnalysisOption: stayPointAnalysisOption,
    analysisCallBack: AnalysisCallBack(onStayPointAnalysisCallBack: 
        (StayPointAnalysisResult result) {
        print('-- 停留点分析回调 result = ${result?.toMap()}');
        //  解析reslut，具体参考demo
    })
);

print('-- 停留点分析 flag = $flag');
```