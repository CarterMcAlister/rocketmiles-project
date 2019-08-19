const hotelMockData = {
    id: '907',
    rewards: {
        miles: 10000
    },
    lowestAveragePrice: {
        currency: 'USD',
        symbol: '&#36;',
        amount: 579.0
    },
    hotelStaticContent: {
        hotelId: 907,
        languageCode: 'en',
        mainImage: {
            category: 'EXTERIOR',
            url: 'http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg',
            source: 'VFML'
        },
        name: 'Omni Chicago Hotel & Suites Magnificent Mile',
        neighborhoodName: 'Magnificent Mile',
        address: {
            line1: '676 North Michigan Avenue',
            line2: null,
            city: 'Chicago',
            stateName: 'Illinois',
            stateCode: 'IL',
            countryName: 'United States',
            countryCode: 'US',
            zipCode: '60611',
            latitude: 41.89475,
            longitude: -87.62465,
            timeZoneId: 'America/Chicago'
        },
        stars: 4,
        rating: 9,
        numberOfReviews: 685,
        brandCode: '1324',
        brandName: 'Omni Hotels',
        propertyType: 204,
        propertyTypeName: 'Hotel'
    }
};

const hotelsList = [
    hotelMockData,
    {
        id: '87390',
        rewards: { miles: 12000 },
        lowestAveragePrice: {
            currency: 'USD',
            symbol: '&#36;',
            amount: 123.0
        },
        hotelStaticContent: {
            hotelId: 87390,
            languageCode: 'en',
            mainImage: {
                category: 'EXTERIOR',
                url: 'http://d2whcypojkzby.cloudfront.net/imageRepo/1/0/16/99/327/012857_A_P.jpg',
                source: 'SOURCE1'
            },
            name: 'Homewood Suites by Hilton Chicago-Lincolnshire',
            neighborhoodName: 'Lincolnshire',
            address: {
                line1: '10 Westminster Way',
                line2: null,
                city: 'Lincolnshire',
                stateName: 'Illinois',
                stateCode: 'IL',
                countryName: 'United States',
                countryCode: 'US',
                zipCode: '60069',
                latitude: 42.19918,
                longitude: -87.89188,
                timeZoneId: 'America/Chicago'
            },
            description:
                'Homewood Suites by Hilton Chicago-Lincolnshire ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus sem turpis, tempus dignissim nulla dapibus sit amet. In hac habitasse platea dictumst. Donec facilisis vestibulum orci ac varius. Quisque congue sodales urna quis aliquet. Quisque congue tortor tristique ipsum finibus, nec finibus tortor luctus. Maecenas mauris risus, sagittis sed faucibus vel, rhoncus at neque. Maecenas facilisis ligula justo, sed tincidunt lorem auctor ut. Sed mauris felis, tristique eget aliquet id, scelerisque nec enim.',
            amenities: [
                { name: 'Restaurant' },
                { name: 'Pets Allowed' },
                { name: 'Room Service' },
                { name: 'Bar' },
                { name: '24 Hour Front Desk' },
                { name: 'Concierge' }
            ],
            phoneNumber: '5555550002',
            stars: 3,
            rating: 9.1,
            numberOfReviews: 110,
            brandCode: '1982',
            brandName: 'Homewood Suites by Hilton',
            propertyType: 204,
            propertyTypeName: 'Hotel'
        }
    },
    {
        id: '908',
        rewards: { miles: 8000 },
        lowestAveragePrice: {
            currency: 'USD',
            symbol: '&#36;',
            amount: 234.0
        },
        hotelStaticContent: {
            hotelId: 908,
            languageCode: 'en',
            mainImage: {
                category: 'EXTERIOR',
                url: 'http://d2whcypojkzby.cloudfront.net/imageRepo/6/0/96/743/239/chidt-exterior-0227-hor-clsc_S.jpg',
                source: 'SOURCE1'
            },
            name: 'Chicago Marriott Downtown Magnificent Mile',
            neighborhoodName: 'Magnificent Mile',
            address: {
                line1: '540 North Michigan Avenue',
                line2: null,
                city: 'Chicago',
                stateName: 'Illinois',
                stateCode: 'IL',
                countryName: 'United States',
                countryCode: 'US',
                zipCode: '60611',
                latitude: 41.89216,
                longitude: -87.62443,
                timeZoneId: 'America/Chicago'
            },
            description:
                'Chicago Marriott Downtown Magnificent Mile ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus sem turpis, tempus dignissim nulla dapibus sit amet. In hac habitasse platea dictumst. Donec facilisis vestibulum orci ac varius. Quisque congue sodales urna quis aliquet. Quisque congue tortor tristique ipsum finibus, nec finibus tortor luctus. Maecenas mauris risus, sagittis sed faucibus vel, rhoncus at neque. Maecenas facilisis ligula justo, sed tincidunt lorem auctor ut. Sed mauris felis, tristique eget aliquet id, scelerisque nec enim.',
            amenities: [
                { name: 'Parking' },
                { name: 'Restaurant' },
                { name: 'Pets Allowed' },
                { name: 'Room Service' },
                { name: 'Bar' },
                { name: '24 Hour Front Desk' },
                { name: 'Concierge' }
            ],
            phoneNumber: '5555550001',
            stars: 4,
            rating: 8.5,
            numberOfReviews: 885,
            brandCode: '1080',
            brandName: 'Marriott Hotels & Resorts',
            propertyType: 204,
            propertyTypeName: 'Hotel'
        }
    }
];

const mockResponse = {
    data: {
        success: true,
        results: {
            total: 1,
            hotels: [hotelMockData]
        }
    }
};

export { hotelMockData, hotelsList, mockResponse };
