---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/entity
scraped_at: 2025-07-31T16:59:54.933121
description: loc
keywords: flutter
---

# 终端管理

## 简介

终端管理类接口主要实现：entity的创建、更新、删除、查询。例如：添加一辆车、删除一辆车、更新车辆的属性信息（如：车辆所属运营区）等。

## 功能说明

### 添加终端
```javascript
/// person_name, person_phone, car_brand, car_number, car_color
/// 上述key必须是已在鹰眼轨迹管理台创建过的属性字段
AddEntityOption addEntityOption = AddEntityOption(
    tag: 1, // 请求标识 必填
    serviceId: serviceID, //  鹰眼服务ID 必填
    entityName: ‘Modi', //  entity名称，作为终端实体的唯一标识，必填
    entityDesc: ‘鹰眼测试_iOS', // entity的可读性描述，选填。
    customColumns: { // 开发者自定义字段，选填
        'person_name': 'bob',
        'person_phone': '13166668888',
        'car_brand': '奥迪',
        'car_number': '京A888888',
        'car_color': 'black'
    });

/// 发起添加entity
bool flag = await TraceController.shareInstance.addEntity(
    addEntityOption: addEntityOption,
    entityCallBack: EntityCallBack(
        onAddEntityCallBack: (AddEntityResult result) {
        print('-- 添加entity回调 result = ${result?.toMap()}');
    })
);

print('-- 添加entity flag = $flag');
```
### 删除终端
```javascript
/// entityName终端唯一标识
DeleteEntityOption deleteEntityOption = DeleteEntityOption(
    tag: 1,
    serviceId: serviceID,
    entityName: entityName_test);

/// 发起删除entity
bool flag = await TraceController.shareInstance.deleteEntity(
    deleteEntityOption: deleteEntityOption,
    entityCallBack: EntityCallBack(
        onDeleteEntityCallBack: (DeleteEntityResult result) {
        print('-- 删除entity回调 result = ${result?.toMap()}');
    })
);

print('-- 删除entity flag = $flag');
```
### 更新终端
```javascript
/// entityName终端唯一标识
UpdateEntityOption updateEntityOption = UpdateEntityOption(
    tag: 1, // 请求标识 必填
    serviceId: serviceID, //  鹰眼服务ID 必填
    entityName: entityName_test, //  entity名称，作为终端实体的唯一标识，必填
    entityDesc: ‘鹰眼测试_iOS', // entity的可读性描述，选填。
    customColumns: { //  开发者自定义字段，选填
     'person_name': 'Trump',
      'person_phone': '13166668888',
      'car_brand': '奥迪',
      'car_number': '京A666666',
      'car_color': 'black'
    });

/// 发起更新entity
bool flag = await TraceController.shareInstance.updateEntity(
    updateEntityOption: updateEntityOption,
    entityCallBack: EntityCallBack(
        onUpdateEntityCallBack: (UpdateEntityResult result) {
      print('-- 更新entity回调 result = ${result?.toMap()}');
    })
);

print('-- 更新entity flag = $flag');
```
### 查询终端

#### 1、查询终端列表
```javascript
/// 查询EntityList请求参数
EntityListSearchOption entityListSearchOption = 
    EntityListSearchOption(
        tag: 1, /// 请求标识 必填
        serviceId: 221825, /// 鹰眼服务ID 必填
        searchFilterCondition: SearchFilterCondition( /// 过滤条件
          entityNames: [entityName_test], /// entityName列表
activeTime: 123, /// 活跃时间, 注：不能与inActiveTime同时使用
          // inActiveTime: 321, /// 不活跃时间, 注：不能与activeTime同时使用
        ),
        sortBy: SortBy( /// 排序规则
            fieldName: 'entityName',
            sortType: SortType.asc));

/// 查询方法
bool flag = await TraceController.shareInstance.queryEntityList(
    entityListSearchOption: entityListSearchOption,
    entityCallBack: EntityCallBack(onEntitySearchListCallBack:
        (EntityListSearchResult result) { /// 查询结果回调
      print('-- 查询entity list回调 result = ${result?.toMap()}');
    })
);
```
#### 2、关键字（keyword）查询终端
```javascript
KeyWordSearchEntityOption keyWordSearchEntityOption = 
    KeyWordSearchEntityOption(
        tag: 1,
        serviceId: 221825,
        keyword: entityName_test,
        sortBy: SortBy(
            fieldName: 'entity_name',
            sortType: SortType.asc));

bool flag = await TraceController.shareInstance.keyWordSearchEntity(
    keyWordSearchEntityOption: keyWordSearchEntityOption,
    entityCallBack: EntityCallBack(onKeyWordSearchEntityCallBack:
        (KeyWordSearchEntityResult result) {
      print('-- 关键字查询entity回调 result = ${result?.toMap()}');
    })
);

print('-- 关键字查询entity flag = $flag');
```
#### 3、周边（around）查询终端
```javascript
AroundSearchEntityOption aroundSearchEntityOption = 
    AroundSearchEntityOption(
        center: LatLng(38.0, 116.0),
        radius: 3000,
        serviceId: serviceID,
        tag: 1,
        searchFilterCondition:
            SearchFilterCondition(entityNames: [entityName_test]),
        sortBy: SortBy(
            fieldName: 'entity_name',
            sortType: SortType.asc));

bool flag = await TraceController.shareInstance.aroundSearchEntity(
    aroundSearchEntityOption: aroundSearchEntityOption,
    entityCallBack: EntityCallBack(onAroundSearchEntityCallBack:
        (AroundSearchEntityResult result) {
      print('-- Around查询entity回调 result = ${result?.toMap()}');
    })
);

print('-- Around查询entity flag = $flag');
```
#### 4、矩形（bounds）查询终端
```javascript
BoundSearchEntityOption boundSearchEntityOption = 
    BoundSearchEntityOption(
        tag: 1,
        serviceId: serviceID,
        lowerLeft: LatLng(38.0, 116.0),
        upperRight: LatLng(39.0, 118.0),
        sortBy: SortBy(
            fieldName: 'entityName',
            sortType: SortType.asc));

bool flag = await TraceController.shareInstance.boundSearchEntity(
    boundSearchEntityOption: boundSearchEntityOption,
    entityCallBack: EntityCallBack(onBoundSearchEntityCallBack:
        (BoundSearchEntityResult result) {
      print('-- Bounds查询entity回调 result = ${result?.toMap()}');
    })
);

print('-- Bounds查询entity flag = $flag');
```
#### 5、区域（district）查询终端
```javascript
DistrictSearchEntityOption districtSearchEntityOption = 
    DistrictSearchEntityOption(
        tag: 1,
        serviceId: serviceID,
        keyword: '北京市海淀区',
        sortBy: SortBy(
            fieldName: 'entity_name',
            sortType: SortType.asc));

bool flag = await TraceController.shareInstance
    .districtSearchEntity(
        districtSearchEntityOption: districtSearchEntityOption,
        entityCallBack: EntityCallBack(
            onDistrictSearchEntityCallBack:
                (DistrictSearchEntityResult result) {
          print(
              '-- District查询entity回调 result = ${result?.toMap()}');
        })
    );

print('-- District查询entity flag = $flag');
```