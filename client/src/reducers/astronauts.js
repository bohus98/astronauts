export default (astronauts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
           return action.payload;
        case 'CREATE':
            return [...astronauts, action.payload];
        case 'UPDATE':
            return astronauts.map((astronaut)=> astronaut._id === action.payload._id ? action.payload: astronaut);
        default:
            return astronauts;
    }
};