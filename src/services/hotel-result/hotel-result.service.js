import axios from 'axios';

class HotelResultService {
    get() {
        return axios
            .get('https://homework-app.rocketmiles.com/fe-homework/rates')
            .then(response => response.data)
            .catch(error => error.response.data);
    }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
