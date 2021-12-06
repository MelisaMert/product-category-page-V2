import faker from 'faker';

const generateProducts = (number) => {
    const products = [];
    const brands = ['Apple', 'Xiomi', 'LG', 'Huawei', 'Samsung', 'Vestel' ];
    const colors = ['Siyah', 'Lacivert', 'Mavi', 'Yeşil', 'Sarı', 'Kırmızı', 'Beyaz'];

    while(number > 0) {
       const price = faker.commerce.price(500,999); 
       const originalPrice = (Math.floor(price) + Math.floor(faker.commerce.price(100,200))).toFixed(2);
      
       const productColors = [];
       const colorsCount = Math.floor(Math.random() * 6) + 1;
       
       for (let i = 0; i < colorsCount; i++){
           const colorIndex = Math.floor(Math.random() * 6) + 1;

           if(!productColors.includes(colors[colorIndex])){
              productColors.push(colors[colorIndex]); 
           }
       }

       const brandIndex = Math.floor(Math.random() * 6);

       products.push({
          id:number,
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(2),
          productMaterial:faker.commerce.productMaterial(),
          productAdjective: faker.commerce.productAdjective(),
          picture: "https://productimages.hepsiburada.net/s/42/550/10751193153586.jpg",
          smallImage: "https://productimages.hepsiburada.net/s/42/550/10751193153586.jpg",
          price: price,
          originalPrice: originalPrice,
          currency: 'TL',
          date: faker.date.recent(),
          brand: brands[brandIndex],
          colors: productColors
       });
       number--; 
    } 

    return JSON.stringify(products);
}

export default generateProducts;