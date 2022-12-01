const posts = [
    {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    {title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime() }
];
let intervalId = 0;

function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post, index) => {
            var time = (new Date().getTime() - post.createdAt)/1000;
            output += `<li>${post.title} created  ${parseInt(time)} seconds ago .</li>`;
        });
        document.body.innerHTML = output;
        lastEditedInSecondsAgo();
    },1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime() });
        callback();
    }, 2000);
}
createPost({title: 'Post Three', body: 'This is post Three'},getPosts);

function create4thPost(post, callback){
    setTimeout(() => {
        callback(post, getPosts);
    },3000);
}

create4thPost({title: 'Post Four', body: 'This is post Four'}, createPost);
 var intervalLast = 0;

function lastEditedInSecondsAgo() {

  intervalLast = setInterval(() => {
    let timeEdited = (new Date().getTime() - posts[posts.length-1].createdAt)/1000;
    let show = `<li>Last Edited ${parseInt(timeEdited)} Seconds Ago</li>`;
    document.body.innerHTML = show ;
  },1000)


}


