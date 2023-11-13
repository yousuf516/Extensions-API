document.getElementById('start').addEventListener('click', () => {
    const url = document.getElementById('url').value;
    const pages = document.getElementById('pages').value;
    chrome.runtime.sendMessage({message: 'start_scraping', url: url, pages: pages});
});