//title
//body
//author
//views
//comments
//isLive

let post ={
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'}
    ],
    isLive: true
};

console.log(post);

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const p = new Post('abc', 'def', 'ghi');
console.log(p);