import superagent from 'superagent';

class ApiClient {
    static getAllRecipes(){

      const req = superagent['get']('http://localhost:8082/api/recipes')
            .timeout(1000);

      return req;
    }

    static saveRecipe(recipe){
        const req = superagent['post']('http://localhost:8082/api/recipes')
            .timeout(6000)
            .set('Content-Type', 'application/json')
            .send(recipe);
        return req;
    }

}

export default ApiClient;
