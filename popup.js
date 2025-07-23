const url = "https://scholar.google.com.hk/citations?user=9lIMS-EAAAAJ&hl=zh-CN";

async function fetchCitationCount() {
  document.getElementById('status').innerText = "Fetching...";
  try {
    const response = await fetch(url, { credentials: "include" });
    if (!response.ok) throw new Error("Network Request Failed");
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    // 获取引用量，class="gsc_rsb_std"的第一个元素
    const citationElem = doc.querySelectorAll('.gsc_rsb_std')[0];
    if (citationElem) {
      const count = citationElem.textContent.trim();
      document.getElementById('citation-count').innerText = count;
      document.getElementById('status').innerText = "";
      // 存储到本地
      chrome.storage.local.set({ citationCount: count });
      // 通知 background 更新 badge
      chrome.runtime.sendMessage({ type: "updateBadge", count: count });
    } else {
      document.getElementById('citation-count').innerText = "No citations were found";
      document.getElementById('status').innerText = "Please ensure availiable";
    }
  } catch (e) {
    document.getElementById('citation-count').innerText = "Fail to get";
    document.getElementById('status').innerText = e.message;
  }
}

document.getElementById('refresh').addEventListener('click', fetchCitationCount);

// 打开弹窗时自动获取本地缓存或刷新
chrome.storage.local.get(['citationCount'], (result) => {
  if (result.citationCount) {
    document.getElementById('citation-count').innerText = result.citationCount;
    document.getElementById('status').innerText = "(Cache)";
  }
});
fetchCitationCount();
