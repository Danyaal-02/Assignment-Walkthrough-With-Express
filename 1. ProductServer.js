const http=require('http')
PORT=5000
HOSTNAME='localhost'
const productsForMen = [
    {
        id: 1,
        name: 'Men\'s Classic T-Shirt',
        brand: 'XYZ Clothing',
        price: 19.99,
        color: 'Black',
        size: 'M',
        category: 'Apparel'
    },
    {
        id: 2,
        name: 'Men\'s Running Shoes',
        brand: 'ABC Sports',
        price: 89.99,
        color: 'Blue',
        size: '10',
        category: 'Footwear'
    },
    {
        id: 3,
        name: 'Men\'s Leather Wallet',
        brand: 'Fashionista',
        price: 49.99,
        color: 'Brown',
        size: 'One Size',
        category: 'Accessories'
    },
    {
        id: 4,
        name: 'Men\'s Watch',
        brand: 'TimeMaster',
        price: 149.99,
        color: 'Silver',
        size: 'One Size',
        category: 'Accessories'
    },
    {
        id: 5,
        name: 'Men\'s Dress Shirt',
        brand: 'DapperStyle',
        price: 59.99,
        color: 'White',
        size: 'L',
        category: 'Apparel'
    },
    {
        id: 6,
        name: 'Men\'s Hoodie',
        brand: 'UrbanChic',
        price: 39.99,
        color: 'Gray',
        size: 'XL',
        category: 'Apparel'
    },
    {
        id: 7,
        name: 'Men\'s Grooming Kit',
        brand: 'GentlemanCare',
        price: 29.99,
        color: 'N/A',
        size: 'One Size',
        category: 'Grooming'
    },
    {
        id: 8,
        name: 'Men\'s Denim Jeans',
        brand: 'DenimMasters',
        price: 69.99,
        color: 'Blue',
        size: '32x34',
        category: 'Apparel'
    },
    {
        id: 9,
        name: 'Men\'s Sports Watch',
        brand: 'SportTime',
        price: 79.99,
        color: 'Black',
        size: 'One Size',
        category: 'Accessories'
    },
    {
        id: 10,
        name: 'Men\'s Casual Sneakers',
        brand: 'CasualKicks',
        price: 59.99,
        color: 'Gray',
        size: '11',
        category: 'Footwear'
    }
]
const productsForWomen = [
    {
        id: 1,
        name: 'Women\'s Floral Dress',
        brand: 'ChicStyle',
        price: 49.99,
        color: 'Floral Print',
        size: 'S',
        category: 'Apparel'
    },
    {
        id: 2,
        name: 'Women\'s High Heels',
        brand: 'ElegantShoes',
        price: 79.99,
        color: 'Red',
        size: '7',
        category: 'Footwear'
    },
    {
        id: 3,
        name: 'Women\'s Handbag',
        brand: 'Fashionista',
        price: 129.99,
        color: 'Pink',
        size: 'Medium',
        category: 'Accessories'
    },
    {
        id: 4,
        name: 'Women\'s Skincare Set',
        brand: 'GlowingBeauty',
        price: 59.99,
        color: 'N/A',
        size: 'One Size',
        category: 'Beauty'
    },
    {
        id: 5,
        name: 'Women\'s Jewelry Set',
        brand: 'SparklingGems',
        price: 89.99,
        color: 'Gold',
        size: 'One Size',
        category: 'Accessories'
    },
    {
        id: 6,
        name: 'Women\'s Leggings',
        brand: 'ActiveLife',
        price: 29.99,
        color: 'Black',
        size: 'M',
        category: 'Apparel'
    },
    {
        id: 7,
        name: 'Women\'s Perfume',
        brand: 'FragranceFairy',
        price: 39.99,
        color: 'N/A',
        size: '50 ml',
        category: 'Beauty'
    },
    {
        id: 8,
        name: 'Women\'s Sunglasses',
        brand: 'SunGoddess',
        price: 29.99,
        color: 'Brown',
        size: 'One Size',
        category: 'Accessories'
    },
    {
        id: 9,
        name: 'Women\'s Active Shoes',
        brand: 'ActiveLife',
        price: 69.99,
        color: 'Gray',
        size: '8',
        category: 'Footwear'
    },
    {
        id: 10,
        name: 'Women\'s Casual Blouse',
        brand: 'CasualChic',
        price: 34.99,
        color: 'White',
        size: 'L',
        category: 'Apparel'
    }
]
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode=200
        res.setHeader("Content-Type", "text/plain")
        res.end("Welcome to Men & Women Dummy Data")
    }else if(req.url=='/men'){
        res.statusCode=200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(productsForMen))
    }else if(req.url=='/women'){
        res.statusCode=200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(productsForWomen))
    }else{
        res.statusCode=500
        res.setHeader("Content-Type", "text/plain")
        res.end("page not found")
    }
})
server.listen(PORT,HOSTNAME,(err)=>{
    if(err){
        console.log('Error in Starting Server')
    }else{
        console.log(`The Server is Running on ${HOSTNAME}:${PORT}`)
    }
})