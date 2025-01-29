import axios from 'axios';

const API_URL = '/data/sales.json'; // Update if needed

export const fetchSalesData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching sales data:", error);
        return [];
    }
};
