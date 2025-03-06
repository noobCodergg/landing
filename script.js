$(document).ready(function() {
  const categories = [
    { name: "Bags", image: "images/RAJ06174.jpg" },
    { name: "Shoes", image: "images/RAJ06198.jpg" },
    { name: "Jewelry", image: "images/RAJ06221.jpg" },
    { name: "Clothing", image: "images/RAJ06236.jpg" },
    { name: "Accessories", image: "images/RAJ06259.jpg" },
    { name: "Accessories", image: "images/RAJ06273.jpg" },
    { name: "Accessories", image: "images/RAJ06301.jpg" },
  ];
  
  const products = [
    { name: "Alma BB", price: "$1,760", image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-alma-bb-monogram-handbags--M53152_PM2_Front_view.png" },
    { name: "Speedy 30", price: "$1,890", image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-speedy-30-monogram-handbags--M41108_PM2_Front_view.png" },
    { name: "Neverfull MM", price: "$2,030", image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm-monogram-handbags--M41178_PM2_Front_view.png" }
  ];

  function renderCategories() {
    const $categoryList = $('#category-list');
    $categoryList.empty();
    categories.forEach(category => {
      const categoryHtml = `
        <li class="flex flex-col items-center text-lg font-normal uppercase tracking-[1px] cursor-pointer transition-colors duration-300 hover:text-gold">
          <img src="${category.image}" alt="${category.name}" class="w-[250px] h-[350px] object-cover mb-[10px] transition-opacity duration-300 hover:opacity-90">
          <span>${category.name}</span>
        </li>
      `;
      $categoryList.append(categoryHtml);
    });
  }

  function renderProducts() {
    const $productGrid = $('#product-grid');
    $productGrid.empty();
    products.forEach(product => {
      const productHtml = `
        <div class="product text-center">
          <img src="${product.image}" alt="${product.name}" class="w-full h-auto transition-opacity duration-300 hover:opacity-90">
          <h4 class="text-base font-normal uppercase mt-[10px] mb-[5px]">${product.name}</h4>
          <p class="price text-sm text-gray-666">${product.price}</p>
        </div>
      `;
      $productGrid.append(productHtml);
    });
  }

  renderCategories();
  renderProducts();
});