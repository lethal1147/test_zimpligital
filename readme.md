# Joakim Dahlstrom (Kim)

## Stack

- **Node.js**
- **TypeScript**
- **Express**
- **Redis**
- **Morgan**
- **Yahoo-Finance2**
- **Nodemon**

## Prerequisite

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (Node Package Manager) or **yarn**

## Features

- Get stock data by ticker or company name
- Cache stock data

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/test-project.git
   cd test-project
   ```

2. Install the required dependencies:
   ```bash
   npm install
   OR
   yarn install
   ```
3. Run docker-compose for redis:
   ```bash
   docker-compose up -d
   ```
4. Run project in developer mode:
   ```bash
   npm run dev
   ```

### Use Postman to call these routes

#### Get stock - GET : http://localhost:5000/api/v1/stock/:ticker

### Example : http://localhost:5000/api/v1/stock/TSLA

##### Response

```
{
    "error": false,
    "message": "Get stock successfully.",
    "data": {
        "explains": [],
        "count": 10,
        "quotes": [
            {
                "exchange": "NMS",
                "shortname": "Tesla, Inc.",
                "quoteType": "EQUITY",
                "symbol": "TSLA",
                "index": "quotes",
                "score": 3312600,
                "typeDisp": "Equity",
                "longname": "Tesla, Inc.",
                "exchDisp": "NASDAQ",
                "sector": "Consumer Cyclical",
                "sectorDisp": "Consumer Cyclical",
                "industry": "Auto Manufacturers",
                "industryDisp": "Auto Manufacturers",
                "dispSecIndFlag": true,
                "isYahooFinance": true
            },
            ...
        ],
        "news": [
            {
                "uuid": "edccdbc5-e91d-3802-b3a7-adf8c609041a",
                "title": "Stifel Adjusts Price Target on Tesla to $492 From $411, Maintains Buy Rating",
                "publisher": "MT Newswires",
                "link": "https://finance.yahoo.com/news/stifel-adjusts-price-target-tesla-102756541.html",
                "providerPublishTime": "2025-01-06T10:27:56.000Z",
                "type": "STORY",
                "relatedTickers": [
                    "TSLA"
                ]
            },
            ...
        ],
        "nav": [],
        "lists": [],
        "researchReports": [],
        "screenerFieldResults": [],
        "totalTime": 81,
        "timeTakenForQuotes": 431,
        "timeTakenForNews": 900,
        "timeTakenForAlgowatchlist": 400,
        "timeTakenForPredefinedScreener": 400,
        "timeTakenForCrunchbase": 400,
        "timeTakenForNav": 400,
        "timeTakenForResearchReports": 0,
        "timeTakenForScreenerField": 0,
        "timeTakenForCulturalAssets": 0,
        "timeTakenForSearchLists": 0
    }
}
```
