import superagent from 'superagent';

class ApiClient_ {
    getAllRecipes(){

      const req = superagent['get']('http://localhost:8082/api/recipes')
            .timeout(1000);

      return req;
    }

    saveRecipe(recipe){
        const req = superagent['post']('http://localhost:8082/api/recipes')
            .timeout(6000)
            .set('Content-Type', 'application/json')
            .send(recipe);
        return req;
    }

    deleteRecipe(id){
        const req = superagent['delete']('http://localhost:8082/api/recipes/'+id)
            .timeout(6000);
        return req;
    }

}

const ApiClient = ApiClient_;
export default ApiClient;
