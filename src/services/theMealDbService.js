export async function fetchCategories() {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchProductsByCategory(categoryName) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    return res.json();
  } catch (error) {
    throw error;
  }
}
