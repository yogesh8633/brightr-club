const express = require("express");
const { google } = require("googleapis");
const fs = require("fs");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = 3000;

// Allow CORS for http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // If you need to send cookies or auth headers
  })
);

// Load the credentials JSON file
const credentials = JSON.parse(
  fs.readFileSync(process.env.GOOGLE_CREDENTIALS)
);


const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });

// Replace with your actual Google Sheet ID and range
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RANGE = "New List!A:Z"; // Adjust the range based on your columns

app.get("/api/data", async (req, res) => {
  try {
    const { title } = req.query;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;
    if (rows.length) {
      const headers = rows[0];
      const data = rows.slice(1).map((row) => {
        return headers.reduce((acc, header, index) => {
          acc[header] = row[index];
          return acc;
        }, {});
      });

      let filteredData = [];

      if (title === "Peppa Pig") {
        filteredData = data
          .filter((book) => book["Series Name"] === "Peppa Pig")
          .slice(0, 15);
      } else if (title === "Best Sellers for 3-6 Years Old") {
        filteredData = data
          .filter(
            (book) => book["Description"] && book["Description"].includes("3-6")
          )
          .slice(0, 15);
      } else if (title === "New Arrivals for 3-6 Years Old") {
        filteredData = data
          .filter(
            (book) => book["Description"] && book["Description"].includes("3-6")
          )
          .sort((a, b) => new Date(b["DOP"]) - new Date(a["DOP"]))
          .slice(0, 15);
      } else if (title === "New Arrivals") {
        filteredData = data
          .sort((a, b) => new Date(b["DOP"]) - new Date(a["DOP"]))
          .slice(0, 15);
      } else if (title === "Best Sellers") {
        filteredData = data
          .sort(
            (a, b) => parseFloat(b["G. Rating"]) - parseFloat(a["G. Rating"])
          )
          .slice(0, 15);
      } else if (title === "Series Name") {
        // Function to filter series and their books
        const filterSeries = (seriesName) => {
          const seriesData = data.filter(
            (book) => book["Series Name"] === seriesName && book["Series Name"] !== null
          );

          if (seriesData.length <= 10) {
            return null; // Only include series with more than 10 books
          }

          
          // Get main image from the first book of the series
          const mainImage = seriesData.length > 0 ? seriesData[0]["Main Image"] : "";

          // Get up to 15 books
          const books = seriesData.slice(0, 15);

          return {
            name: seriesName,
            main_image: mainImage,
            books: books,

          };
        };

        // Get unique series names with more than 10 books
        const uniqueSeries = [...new Set(data.map((book) => book["Series Name"]))]
          .filter((seriesName) => {
            const count = data.filter(
              (book) => book["Series Name"] === seriesName && book["Series Name"] !== null
            ).length;
            return count > 10;
          });

        filteredData = uniqueSeries
          .slice(20, 30) // Limit to 10 series
          .map(filterSeries)
          .filter((series) => series !== null); // Remove null values
      }  else {
        filteredData = data.slice(0, 10); // Return all data if no specific title matches
      }

      res.json(filteredData);
    } else {
      res.status(404).json({ message: "No data found." });
    }
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
