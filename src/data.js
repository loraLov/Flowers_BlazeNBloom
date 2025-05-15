const data = [
    {
        id:1,
        image:'https://plus.unsplash.com/premium_photo-1703631158408-6f6d3f984de3?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Crimson Kiss',
        searchTerm: 'bestseller',
        price: '150',
        description:'Red roses, Burgundy roses, Peach roses, Hot pink roses, Light pink roses'
    },
    {
        id:2,
        image:'https://plus.unsplash.com/premium_photo-1661337376780-1ec70bcce8db?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Fluffy Cloud',
        searchTerm: 'wow', 
        price:'380',
        description:'Peonies'
    },
    
    {
        id:3,
        image:'https://images.unsplash.com/photo-1540635352372-c21b523a29c6?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Raspberry Crush',
        searchTerm: 'wow',
        price: '320',
        description:'Peonies, Garden roses, English roses'
    },
    
    {
        id:4,
        image:'https://images.unsplash.com/photo-1539273251151-8fa6774835e0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Pink Cloud',
        searchTerm: 'wow',
        price:'200',
        description:'Garden roses monobouquet'
    },
    {
        id:5,
        image:'https://images.unsplash.com/photo-1539346254710-b6d86e095035?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Maroon Sunset',
        searchTerm: 'bestseller',
        price:'200',
        description:'Garden roses, Anemones, Equadorian roses'
    },

    
    {
        id:6,
        image:'https://images.unsplash.com/photo-1622537537123-8e423ed5e2f6?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Daisy Field ',
        searchTerm: 'mono',
        price:'140',
        description:'Matricaria'
    },
    

    {
        id:7,
        image:'https://images.unsplash.com/photo-1615385639736-362b69696227?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Scarlet Muse ',
        searchTerm: 'mono', 
        price:'150',
        description:'Tulips'
    },
    
    {
        id:8,
        image:'https://plus.unsplash.com/premium_photo-1703631159398-4b1db530bd55?q=80&w=3412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:' Red Noir',
        searchTerm: 'custom', 
        price:'180',
        description:'Gladiolus, Roses,Gerbera Daisy, Anthurium, Caspedia'
    },

    {
        id:9,
        image:'https://images.unsplash.com/photo-1637149477546-80a827a9527a?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Warm Meadow',
        searchTerm: 'custom', 
        price:'220',
        description:'Spray Roses, Lisianthus, Caspedia, Dry flowers, Eucaliptus, Hypericum berries, Greenery'
    },
    {
        id:10,
        image:'https://images.unsplash.com/photo-1523693916903-027d144a2b7d?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Blush of Spring',
        searchTerm: 'custom', 
        price:'180',
        description:'Roses, Chrysanthemus, Matricaria, Greenery'
    },
    {
        id:11,
        image:'https://images.unsplash.com/photo-1565957949991-2f295d814345?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Pink Poem',
        searchTerm: 'mono', 
        price:'150',
        description:'Tulips'
    },
    {
        id:12,
        image:'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Pastel Embrace',
        searchTerm: 'custom', 
        price:'190',
        description:'Garden Roses, Spray Roses, Eucaliptus, Peonies, Mattiolla'
    },
   
    {
        id:13,
        image:'https://images.pexels.com/photos/27356363/pexels-photo-27356363/free-photo-of-a-woman-holding-a-bouquet-of-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name:'Rose Royalty',
        searchTerm: 'wow', 
        price:'280',
        description:'Garden Roses'
    },
    {
        id:14,
        image:'https://plus.unsplash.com/premium_photo-1661337376780-1ec70bcce8db?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Fluffy Cloud',
        searchTerm: 'mono', 
        price:'380',
        description:'Peonies'
    },
   
    {
        id:15,
        image:'https://images.pexels.com/photos/14770960/pexels-photo-14770960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name:'Peony Serenade',
        searchTerm: 'box', 
        price:'380',
        description:'Peonies'
    },
    {
        id:16,
        image:'https://plus.unsplash.com/premium_photo-1661337504205-8b001cf4efcb?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Soft Luxe',
        searchTerm: 'box', 
        price:'520',
        description:'Peonies'
    },
    {
        id:17,
        image:'https://images.unsplash.com/photo-1660549077024-eb5461caaf39?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Pure Delight',
        searchTerm: 'box', 
        price:'220',
        description:'Garden Roses, Lisianthus, Carnation, Lily'
    },
    {
        id:18,
        image:'https://images.unsplash.com/photo-1540635352372-c21b523a29c6?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Raspberry Crush',
        searchTerm: 'bestseller',
        price: '320',
        description:'Peonies, Garden roses, English roses'
    },
    {
        id:19,
        image:'https://images.pexels.com/photos/11423484/pexels-photo-11423484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name:'Ballet of Blooms',
        searchTerm: 'box', 
        price:'250',
        description:'Tulips'
    },
    {
        id:20,
        image:'https://images.unsplash.com/photo-1539273251151-8fa6774835e0?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:'Pink Cloud',
        searchTerm: 'bestseller',
        price:'200',
        description:'Garden roses monobouquet'
    },
    

]
export default data;