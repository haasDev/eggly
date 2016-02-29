angular.module('categories', [
    'eggly.models.categories'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.html'
                    },
                    'bookmarks@': {
                        controller: 'BookmarksListCtrl as bookmarksListCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.html'
                    }
                }
            });
    })
    .controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel) {
        var categoriesListCtrl = this;
        CategoriesModel.getCategories()
            .then(function(result){
                categoriesListCtrl.categories = result;
            });
    })
;
