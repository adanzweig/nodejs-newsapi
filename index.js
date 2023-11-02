// Load environment variables from a .env file.
require('dotenv').config();

// Define an asynchronous function that fetches news about a given topic.
async function getNewsAboutSomething(topic){
    try{
        // Attempt to fetch data from the news API using the provided topic.
        // The API key is retrieved from environment variables for security.
        const request = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${process.env.NEWS_API_KEY}`);
        
        // Parse the response from the request as JSON.
        const response = await request.json();
        
        // Return the parsed JSON response.
        return response;
    }catch(error){
        // If an error occurs during the fetch or parsing, log it to the console.
        console.error('Error:', error);
    }
}

// Immediately Invoked Function Expression (IIFE) to use async-await at the top level.
(async()=>{
    // Call the function to get news about 'Youtube' and store the result in the 'news' variable.
    const news = await getNewsAboutSomething('Youtube');
    
    // Log the news data to the console.
    console.log(news);
})()
