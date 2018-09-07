import axios from 'axios'

export class MapListService {

    getAll(completion){
        axios.get('http://localhost:3100/maps')
        //.then(response => response.json())
        .then((json) =>{completion(json)})
        .catch(function (error) {
            console.log(error);
        })
    }  
    }
  
    
  
  