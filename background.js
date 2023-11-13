chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
  });
  
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.message === 'start_scraping') {
        // Start scraping here
        // You might want to use fetch API or XMLHttpRequest here to get the content of the page
        // Then you can use DOMParser to parse the content and extract the data
        }
    }
);