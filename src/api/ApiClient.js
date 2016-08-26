import superagent from 'superagent';

class ApiClient {
    static getAllRecipes(){

      const req = superagent['get']('http://localhost:8082/api/recipes')
            .timeout(1000);

      return req;
    }
}

export default ApiClient;
