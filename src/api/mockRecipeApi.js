import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const recipes = [
        {
          id: 1,
          name: 'Ceviche',
          category: 'Meat',
          categoryTag: 'meat',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1',
                        quantity: '1 Kg'
                      },
                      {
                        name:'ingre 2',
                        quantity: '1 Kg'
                      }
                    ],
        preparation: '', status: 'active'
        },
        {
          id: 2,
          name: 'Anticucho',
          category: 'Meat',
          categoryTag: 'meat',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '2 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '2 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 3,
          name: 'Arroz con Pollo',
          category: 'meat',
          categoryTag: 'meat',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '3 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '3 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 4,
          name: 'Recipe 4',
          category: 'Pastas',
          categoryTag: 'pastas',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '4 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '4 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 5,
          name: 'Recipe 5',
          category: 'Pastas',
          categoryTag: 'pastas',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '5 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '5 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 6,
          name: 'Recipe 6',
          category: 'Pastas',
          categoryTag: 'pastas',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '6 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '6 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 7,
          name: 'Recipe 7',
          category: 'Salads',
          categoryTag: 'salads',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '7 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '7 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 8,
          name: 'Recipe 8',
          category: 'salads',
          categoryTag: 'salads',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1',
                        quantity: '8 Kg'
                      },
                      {
                        name:'ingre 2',
                        quantity: '8 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 9,
          name: 'Recipe 9',
          category: 'salads',
          categoryTag: 'salads',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '9 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '9 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 10,
          name: 'Recipe 10',
          category: 'Desserts',
          categoryTag: 'desserts',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '10 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '10 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 11,
          name: 'Recipe 11',
          category: 'Desserts',
          categoryTag: 'desserts',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '11 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '11 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 12,
          name: 'Recipe 12',
          category: 'desserts',
          categoryTag: 'desserts',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '12 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '12 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        }
      ];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (recipe) => {
  return replaceAll(recipe.name, ' ', '-');
};

class RecipeApi {
  static getAllRecipes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], recipes));
      }, delay);
    });
  }

  static saveRecipe(recipe) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minRecipeNameLength = 1;
        if (recipe.name.length < minRecipeNameLength) {
          reject('Name must be at least ${minRecipeNameLength} characters.');
        }

        if (recipe.id) {
          const existingRecipeIndex = recipes.findIndex(a => a.id == recipe.id);
          recipes.splice(existingRecipeIndex, 1, recipe);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new recipe in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          recipe.id = generateId(recipe);
          recipes.push(recipe);
        }

        resolve(Object.assign({}, recipe));
      }, delay);
    });
  }

  static deleteRecipe(recipeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfRecipeToDelete = recipes.findIndex(recipe => {
          recipe.courseId == recipeId;
        });
        recipes.splice(indexOfRecipeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default RecipeApi;
