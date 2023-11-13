chrome.action.onClicked.addListener(async (tab) => {
    const { url } = tab;
        if (url.startsWith("https://www.google.com/maps/search/")) {
        chrome.tabs.sendMessage(tab.id, { type: "startScrape" });
        }
    });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "scrapeData") {
      const { data } = message;
      chrome.storage.local.set({ data }, () => {
        sendResponse({ type: "dataSaved" });
      });
    }
});