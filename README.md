# Scholar Citation Counter

**实时显示你的 Google Scholar 引用量**  
**Real-time display of your Google Scholar citation count**

---

## 功能 Features

- 工具栏图标显示总引用量  
  Show total citation count on the toolbar icon
- 弹窗可查看和刷新引用量  
  Popup window to view and refresh citation count
- 本地缓存，减少请求  
  Local cache to reduce network requests

---

## 安装 Installation

1. 克隆或下载本项目  
   Clone or download this repo
2. 打开 Chrome 扩展页面 `chrome://extensions/`  
   Open Chrome Extensions page `chrome://extensions/`
3. 开启开发者模式，加载已解压的扩展程序  
   Enable Developer Mode, click "Load unpacked", select this folder

---

## 使用 Usage

1. 登录 Google Scholar 并确保主页公开  
   Log in to Google Scholar and make sure your profile is public
2. 点击插件图标查看引用量  
   Click the extension icon to check your citation count
3. 可手动点击“刷新”按钮获取最新数据  
   Click "Refresh" in the popup to update

---

## 文件结构 File Structure

```
manifest.json
popup.html
popup.js
background.js
icon16.png
icon48.png
icon128.png
```

---

## 注意事项 Notes

- 频繁刷新可能触发 Google Scholar 验证码  
  Frequent refreshes may trigger Google Scholar CAPTCHA
- 插件不会上传或泄露任何个人信息  
  No personal data is uploaded or leaked

---

## 修改用户ID Change User ID

编辑 `popup.js` 文件，将 `url` 变量中的 `user=xxxx` 替换为你的 Google Scholar 用户ID。  
Edit `popup.js`, change the `user=xxxx` in the `url` variable to your own Google Scholar user ID.

---
