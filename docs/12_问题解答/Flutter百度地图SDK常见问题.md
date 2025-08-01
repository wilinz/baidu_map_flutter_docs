---
title: flutter | 百度地图API SDK
url: https://lbsyun.baidu.com/faq/api?title=flutter/loc/question
scraped_at: 2025-07-31T17:11:02.792999
description: loc
keywords: flutter
---

# 常见问题

1. **iOS调试总是Lost connection to device：**

   解决办法：在终端运行 `brew upgrade --fetch-HEAD usbmuxd`。

2. **真机调试报：Library not loaded: @rpath/Flutter.framework/Flutter：**

   解决办法：参考：[https://github.com/flutter/flutter/issues/49504#issuecomment-581554697](https://github.com/flutter/flutter/issues/49504#issuecomment-581554697)

   也可能是真机系统版本过高，flutter不支持。

3. **iOS 9以下绘制冲突问题：**

   解决办法：可以将工程最低支持版本改为9.0以上。

4. **Android 用命令flutter build apk 打出的release包可能有问题：**

   建议在Android工程目录下使用`./gradlew assembleRelease`命令或者直接Android studio打开android工程编译release包。