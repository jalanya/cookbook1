import superagent from 'superagent';

class CategoryApiClient_ {

    getAllCategories() {
      const req = superagent['get']('http://localhost:8082/api/categories')
            .timeout(1000);
      return req;
    }

}

const CategoryApiClient = CategoryApiClient_;
export default CategoryApiClient;
