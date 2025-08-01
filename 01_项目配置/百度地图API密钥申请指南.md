---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/yingyan/guide/key
scraped_at: 2025-07-31T16:56:22.969844
description: loc
keywords: flutter
---

# 获取账号和密钥

## 获取密钥（AK）

用户在使用鹰眼SDK之前需要获取百度地图移动版开发密钥（AK），该密钥与您的百度账户相关联。因此，您必须先有百度帐户，才能获得密钥。具体流程请参考如下介绍。

获取AK的流程大致可分为如下四个步骤：（1）登录API控制台；（2）创建应用；（3）获取AK；（4）提交生成AK。 接下来向各位开发者做详细介绍：

### 1. 登录API控制台

API控制台的地址为：[https://lbs.baidu.com/apiconsole/key](https://lbs.baidu.com/apiconsole/key) 输入网址，进入API控制台。如果您还未登录，会显示如下页面，输入帐号及密码，点击登录，即可正常进入API控制台； 如果您还不是我们百度地图开放平台的开发者用户，请点击[立即注册](https://passport.baidu.com/v2/?reg)，按照流程指引，一步一步完成开发者注册工作，然后再进入API控制台获取AK。 在注册、登录等环节中，如遇问题，请及时通过[反馈平台](https://lbsyun.baidu.com/apiconsole/fankui)向我们反馈。

![login.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iosyingyan/login.png)

### 2. 创建应用

进入API控制台后，您将看到如下界面，点击创建应用，开始填写相关信息，并最终获得AK。此外，在API控制台您还可以查看、修改、删除之前所创建的AK。

![key1.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iosyingyan/key1.png)

### 3. 获取 AK

点击创建应用，将会进入如下页面，在这个页面中，开发者需要填写应用名称、选择应用类型，并根据应用类型配置相应的信息。

鹰眼提供 Web 服务 API、Android SDK 和iOS SDK，不同的 API/SDK需要使用对应的 AK，如下所示：

1. Web 服务API：申请并使用"服务端"类型的 AK
2. Android SDK：申请并使用"Android SDK"类型的 AK
3. iOS SDK：申请并使用"iOS SDK"类型的 AK

![key2.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iosyingyan/key2.png)

在申请开发密钥的时候，需要填写对应工程的安全码（即，Bundle Identifier），以下为您提供两种获取 Bundle Identifier 的方法

#### 方法一

通过代码获取，代码如下所示：
```objective-c
NSString *bundleIdentifier = [[NSBundle mainBundle] bundleIdentifier];
```
#### 方法二

Xcode 切换到 General 标签，查看 Bundle Identifier，如下图所示：

![Xcode.png](https://mapopen-website-webapi.bj.bcebos.com/images/sdk/iosyingyan/Xcode.png)