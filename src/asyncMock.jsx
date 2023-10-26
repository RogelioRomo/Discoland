const products = [
    {id: "1", name: "Operation Doomsday", price: 500, category: "Vinilo", img: "https://i.discogs.com/bUAd52N6Pdp3OeX2KY04yx10srfj9-aCkfgL2gDkFMs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTY2/OS0xNjgyNjczNTA4/LTYyMTkuanBlZw.jpeg", stock: 6, description: "MF DOOM - Operation Doomsday - 1999 press"},
    {id: "2", name: "Dark Side Of The Moon", price: 500, category: "CD", img: "https://i.discogs.com/Le2cIVnGMYk_Ae0mYlTJ0uK6Z41Oyj4GmrJiM6y3fEg/rs:fit/g:sm/q:90/h:597/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNzkw/NTMtMTIyOTE1NTg3/MC5qcGVn.jpeg", stock: 6, description: "Pink Floyd - Dark Side Of The Moon - 1994 press"},
    {id: "3", name: "A Love Supreme", price: 500, category: "Cassette", img: "https://i.discogs.com/_KVWWDM-ELDLLxgRyl5rUiLK00IJFMi4OeHlpV6hJhk/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NDI0/My0xMzM5NTY4Mjkx/LTQyNDkuanBlZw.jpeg", stock: 6, description: "John Coltrane - A Love Supreme - 1991 press"},
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
