const categoryColorMap = new Map();

categoryColorMap.set("Dessert", "orange");
categoryColorMap.set("Salads", "green");
categoryColorMap.set("Pizza", "purple");

const getCategoryColor = ( category ) => {
  return categoryColorMap.get(category);
};

export default getCategoryColor;