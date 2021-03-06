import delay from './delay';

const categories = [
    {
      id: 'Pastas',
      name: 'Pastas'
    },
    {
      id: 'Salads',
      name: 'Salads'
    },
    {
      id: 'Meat',
      name: 'Meat'
    },
    {
      id: 'Desserts',
      name: 'Desserts'
    }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (category) => {
    return category.name.toLowerCase();
};

export default class CategoryApi {
    static getAllCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], categories));
            }, delay);
        });
    }
}

export default CategoryApi;
