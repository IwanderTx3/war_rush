export class MapListService {

    getAll(completion) {
        fetch('http://localhost:3100/maps')
          .then(response => response.json())
          .then((json) =>{completion(json)})
      }
    }
  
    
  
  