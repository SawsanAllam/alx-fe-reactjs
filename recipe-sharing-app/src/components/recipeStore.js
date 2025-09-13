// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // ============================
  // FAVORITES
  // ============================
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // نتأكد مفيش تكرار
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ============================
  // RECOMMENDATIONS
  // ============================
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended }; // هنا كانت ناقصة
    }),

  // ============================
  // SEARCH
  // ============================
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // كل ما المستخدم يكتب كلمة نعمل فلترة تلقائيًا
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ============================
  // RECIPES CRUD
  // ============================
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
