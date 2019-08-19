import HotelResultService from './hotel-result.service';
import axios from 'axios'
import {hotelMockData} from '../../../test/mockData'

jest.mock('axios')

describe('HotelResultService', () => {
    it('is a singleton', () => {
        expect(HotelResultService).toBeTruthy();
    });

    it('shoud fetch hotel data', () => {
        const mockResponse = {
            data: {
                success: true,
                results: {
                    total: 1,
                    hotels: [hotelMockData]
                }
            }
        };

        axios.get.mockResolvedValue(mockResponse)

        return HotelResultService.get().then(response => expect(response).toEqual(mockResponse.data))

    });

});
