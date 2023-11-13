const searchUrlInput = document.getElementById("searchUrl");
const numPagesInput = document.getElementById("numPages");
const startScrapeButton = document.getElementById("startScrape");
const statusElement = document.getElementById("status");

startScrapeButton.addEventListener("click", async () => {
  const searchUrl = searchUrlInput.value;
  const numPages = parseInt(numPagesInput.value);

  if (!searchUrl || !numPages) {
    alert("Please enter a search URL and a number of pages to scrape.");
    return;
  }

  statusElement.textContent = "Scraping started...";

  const scrapedData = await scrapeData(searchUrl, numPages);

  statusElement.textContent = "Scraping completed.";

  alert(
    "Scraping completed. Data has been saved to Chrome storage. You can access it from the background script."
  );
});

async function scrapeData(searchUrl, numPages) {
  const scrapedData = [];

  for (let i = 1; i <= numPages; i++) {
    const url = `${searchUrl}&page=${i}`;
    const response = await fetch(url);
    const html = await response.text();

    const businesses = html.querySelectorAll(".g").forEach((business) => {
      const name = business.querySelector(".business-name").textContent;
      const address = business.querySelector(".business-address").textContent;
      const phone = business.querySelector(".business-phone").textContent;
      const website = business.querySelector(".business-website").textContent;

      const scrapedBusiness = {
        name,
        address,
        phone,
        website,
      };

      scrapedData.push(scrapedBusiness);
    });
  }

  return scrapedData;
}