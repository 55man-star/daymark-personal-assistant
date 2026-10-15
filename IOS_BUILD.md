# Daymark iOS 构建说明

项目已经加入 Capacitor 本地通知接入层和 GitHub Actions 的 macOS 构建流程。

## 现在能做什么

GitHub Actions 会在 macOS 云端：

1. 安装项目依赖。
2. 自动生成 iOS 工程。
3. 生成 iOS 模拟器测试包。

模拟器包不能直接安装到你的 iPhone，它主要用于确认 iOS 工程可以成功生成和编译。

## 在 GitHub 上启动构建

1. 打开项目的 `Actions` 页面。
2. 左侧点击 `Build Daymark iOS`。
3. 点击 `Run workflow`。
4. 等待运行结束，在页面底部 `Artifacts` 下载 `daymark-ios-simulator`。

如果看不到 Actions，需要先在仓库的 `Settings → Actions → General` 中允许 Actions 运行。

## 安装到真实 iPhone

真实设备需要 Apple 签名。下一阶段需要配置：

- Apple Developer Team ID
- iOS Distribution Certificate
- Provisioning Profile

这些是苹果用来确认“这个 App 允许安装到哪些设备”的签名文件，不是普通登录密码。不要把 Apple 账号密码提交到仓库。

签名配置完成后，工作流才能继续生成可以安装到 iPhone / iPad 的 IPA 文件。
