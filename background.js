chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "updateBadge") {
    chrome.action.setBadgeText({ text: message.count });
    chrome.action.setBadgeBackgroundColor({ color: "#ECFFFF" });
  }
});

// 插件启动时从本地缓存设置 badge
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(['citationCount'], (result) => {
    if (result.citationCount) {
      chrome.action.setBadgeText({ text: result.citationCount });
      chrome.action.setBadgeBackgroundColor({ color: "#ECFFFF" });
    }
  });
});
