const authors = {
    "bob" : {
        name: "Bob",
        picture: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    },
    "lydia" : {
        name: "Lydia",
        picture: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    },
    "fred" : {
        name: "Fred",
        picture: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
};

const quotes = [
    {
        id: 1,
        quote: "Q1",
        author: authors.bob,
    },
    {
        id: 2,
        quote: "Q2",
        author: authors.fred,
    },
    {
        id: 3,
        quote: "Q3",
        author: authors.bob,
    },
    {
        id: 4,
        quote: "Q4",
        author: authors.lydia,
    },
    {
        id: 5,
        quote: "Q5",
        author: authors.lydia,
    },
];

export default quotes