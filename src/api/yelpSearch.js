import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer A9E4O6me3isqIREK6Y4E3-8y6hvXD8Cnk7E5A8su9v3hLhNR5AnyE29ZYW1z5slRgR7SHwArjnA-6hvBEEBomGDCpwYT0lXc4EQdIWKeDJxYVMEEKgdPdNKYWZSnZnYx'
    }
});