const AccountPrototype = {
    name: 'undef',
    timestamp: -1,
    username: 'undef',
    password: 'undef', // Only thing that needs encrypted
    privileges: [],
};

const RestaurantAccountPrototype = {
    roles: [], // The roles will determine what you have access to
};