import { useState, useEffect, useMemo } from 'react';

const useMarketData = (priceCategory) => {
    const [markets, setMarkets] = useState([]);

    useEffect(() => {
        const fetchMarket = async () => {
            try {
                const response = await fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&location=san%20jose&limit=50', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer A9E4O6me3isqIREK6Y4E3-8y6hvXD8Cnk7E5A8su9v3hLhNR5AnyE29ZYW1z5slRgR7SHwArjnA-6hvBEEBomGDCpwYT0lXc4EQdIWKeDJxYVMEEKgdPdNKYWZSnZnYx', // Replace with your actual token
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch markets');
                }

                const data = await response.json();
                setMarkets(data.businesses);
            } catch (error) {
                console.error('Error fetching markets:', error);
            }
        };

        fetchMarket();
    }, []);

    const filteredMarkets = useMemo(() => {
        return markets.filter(market => market.price === priceCategory);
    }, [markets, priceCategory]);

    return filteredMarkets;
};

export default useMarketData;