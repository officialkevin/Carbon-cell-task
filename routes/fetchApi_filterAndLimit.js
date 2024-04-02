const express = require('express')
const router = express.Router();
const fetch = require('node-fetch');
const authenticateJWT = require('../middleware/secureApiEndpointMiddleware');
//const app = express();
// Middleware for parsing JSON bodies
// Middleware for parsing JSON bodies
router.use(express.json());


/**
 * @swagger
 * /fetchApi_filterAndLimit/api/data:
 *   get:
 *     summary: Fetch data with filtering and limit options
 *     tags: [Endpoint to fetch data with filtering and results limits]
 *     description: Fetch data from a public API with filtering based on categories and result limits.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Category to filter the data by.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of results to return.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response with the fetched data.
 *       '401':
 *         description: Unauthorized access, missing or invalid token.
 *       '403':
 *         description: Forbidden, invalid token.
 *       '500':
 *         description: Internal server error.
 */


// GET API endpoint for fetching data with filtering options
router.get('/api/data',authenticateJWT, async (req, res) => {
  try {
    const { category, limit } = req.query;
    let apiUrl = 'https://api.publicapis.org/entries';

    // Apply filtering options if provided
    if (category) apiUrl += `?category=${category}`;
    if (limit) {
      apiUrl += (category ? '&' : '?'); // If category is provided, use '&' to append limit parameter, otherwise use '?'
      apiUrl += `title=${limit}`;
    }

    const resp = await fetch(apiUrl);
    const data = await resp.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;