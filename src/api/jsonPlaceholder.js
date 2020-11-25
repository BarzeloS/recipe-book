import axios from 'axios';

const recipesData = async () => {
    // return axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.data);
    
    const response = await axios.get('data/db.json');
    return response.data;
}

export default recipesData;