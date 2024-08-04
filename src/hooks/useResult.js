import {useEffect, useState} from "react";
import yelp from "../api/yelpSearch";
export default ()=> {
    const [results, setResult] = useState([]);
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('./search',
                {
                    params: {
                        limit: 50,
                        term: searchTerm,
                        location: 'san jose',
                    }
                });

            setResult(response.data.businesses)
            console.log(response.data.businesses)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        searchApi('gaming' )

    }, []);
    return [results, searchApi];
}
