let nextRuleId = 1000; // Starting ID — can be stored in chrome.storage later

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // DARK MODE TOGGLE
  if (message.action === "toggleDarkMode") {
    console.log("Dark mode toggle requested");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (!tab || !tab.id || tab.url.startsWith("chrome://") || tab.url.startsWith("chrome-extension://")) {
        console.warn("Script injection not allowed on this page:", tab?.url);
        sendResponse({ status: "failed", reason: "Restricted URL" });
        return;
      }

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          console.log("Script injected");
          document.documentElement.style.backgroundColor = '#003049';
          document.documentElement.style.color = '#fefae0';
        }
      }, () => {
        if (chrome.runtime.lastError) {
          console.error("Script injection failed:", chrome.runtime.lastError.message);
          sendResponse({ status: "failed", error: chrome.runtime.lastError.message });
        } else {
          sendResponse({ status: "success" });
        }
      });
    });

    return true;
  }

  // SITE BLOCKING
  if (message.blockSite) {
    const domain = message.blockSite.trim();

    const rule = {
      id: nextRuleId++,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: domain,
        resourceTypes: ["main_frame"]
      }
    };

    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [rule],
      removeRuleIds: []
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("Failed to add block rule:", chrome.runtime.lastError.message);
        sendResponse({ status: "failed", error: chrome.runtime.lastError.message });
      } else {
        console.log(`Blocking rule added for: ${domain}`);
        sendResponse({ status: "blocked", domain });
      }
    });

    return true;
  }
});