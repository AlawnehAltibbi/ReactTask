import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchEvents = async (searchTerm) => {
        try {
            const response = await yelp.get('/events', {
                params: {
                    limit: 50,

                },
            });
            setEvents(response.data.events);
            console.log(response.data.events);
        } catch (err) {
            console.error(err); // Log the error details
            setErrorMessage('Something went wrong');
        }
    };



    return [events, searchEvents, errorMessage];
};

export default useEvents;