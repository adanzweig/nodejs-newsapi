# News Topic Fetcher

This simple Node.js script allows you to fetch news articles related to a specific topic using the NewsAPI. It demonstrates the use of environment variables for API keys and the asynchronous nature of JavaScript to handle HTTP requests.

## Prerequisites

- Node.js installed on your system.
- An API key from [NewsAPI](https://newsapi.org/).

## Setting Up

1. Clone this repository or copy the script into a new `.js` file in your project.
2. Run `npm init` in your project directory to create a `package.json` file.
3. Install the required `node-fetch` package (if you are using Node version below 17.5):

    ```bash
    npm install node-fetch
    ```

4. Create a `.env` file in the root of your project directory with the following content:

    ```env
    NEWS_API_KEY=your_api_key_here
    ```

    Replace `your_api_key_here` with your actual NewsAPI key.

## Usage

1. Make sure to load the environment variables using:

    ```javascript
    require('dotenv').config();
    ```

2. Call the `getNewsAboutSomething` function with your desired topic:

    ```javascript
    (async () => {
        const news = await getNewsAboutSomething('technology');
        console.log(news);
    })();
    ```

## How It Works

- The `getNewsAboutSomething` function takes a topic as an argument and fetches news articles related to that topic.
- It uses the NewsAPI endpoint to perform the search and returns the results as JSON.
- The API key is kept secure by loading it from environment variables set in a `.env` file.

## Error Handling

The script includes basic error handling which logs any errors to the console.

## Note

This script is for educational purposes and to demonstrate the use of async/await in Node.js. Ensure that you comply with NewsAPI's terms of use when using their service.

