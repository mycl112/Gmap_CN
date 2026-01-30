# Google Maps GL CN Fix

自动为Google Maps/Google地球添加`gl=cn`参数并刷新，适配中国地区。

## 功能特点

- 🚀 **自动添加参数**：访问Google Maps或Google地球时自动添加`gl=cn`参数
- 🔄 **智能刷新**：仅在URL变化时才重定向，避免无限刷新
- 🛡️ **错误处理**：包含完善的错误处理机制，确保脚本稳定运行
- 🎯 **多域名支持**：适配以下域名：
  - `earth.google.com`
  - `www.google.com/maps`
  - `www.google.com.hk/maps`

## 安装方法

### 方法一：通过Tampermonkey浏览器扩展安装

1. 确保您的浏览器已安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展
2. 点击以下链接安装脚本：
   - [安装 Google Maps GL CN Fix](https://raw.githubusercontent.com/mycl112/Gmap_CN/main/Gmap_cn_fix.js)
3. 确认安装并启用脚本

### 方法二：手动安装

1. 复制 `Gmap_cn_fix.js` 文件的完整内容
2. 打开 Tampermonkey 扩展
3. 点击 "创建新脚本"
4. 将复制的内容粘贴到编辑器中
5. 保存并启用脚本

## 使用方法

安装完成后，脚本会自动运行，无需任何手动操作：

1. 访问 Google Maps 或 Google 地球
2. 脚本会自动检测URL并添加`gl=cn`参数
3. 页面会自动刷新以应用更改
4. 控制台会显示操作日志，方便调试

## 工作原理

1. **URL处理**：分离URL的哈希部分，移除已存在的`gl`参数，添加`gl=cn`参数
2. **智能判断**：仅当URL发生变化时才重定向，避免无限循环
3. **错误处理**：包含try-catch块，确保脚本在各种情况下都能稳定运行
4. **提前执行**：使用`@run-at document-start`确保在页面加载前执行，避免无效加载

## 版本历史

- **v1.2**：优化URL处理逻辑，修复哈希部分处理
- **v1.1**：添加错误处理机制
- **v1.0**：初始版本，实现基本功能

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 免责声明

本脚本仅用于技术研究和学习目的，使用时请遵守相关法律法规。
