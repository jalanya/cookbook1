class RecipeApi {
  static getAllRecipes() {
    return new Promise((resolve, reject) => {
      //Code here to call REST Api
      setTimeout(() => {
        resolve(Object.assign([], recipes));
      }, delay);
    });
  }
}

export default RecipeApi;
