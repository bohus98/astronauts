export default (astronauts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
           return action.payload;
        case 'CREATE':
            return [...astronauts, action.payload];
        default:
            return astronauts;
    }
};