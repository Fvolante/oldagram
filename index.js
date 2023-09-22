
/* Object as DB */
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



/* Grab UI elements */
const postsList = document.getElementById("posts-list");



/* 
Create a new post element
@param {str} or {num} the properties of the object used as DB - 7 properties
@return {obj} the html <li> element  
*/
function createPost(name, username, location, avatar, post, comment, likes) {

    const li = document.createElement("li");

    const newPost = `
        <section>

            <header class="post-header">
                <img src=${avatar} alt="post author avatar" class="avatar">

                <div>
                    <h2 class="bold">${name}</h3>
                    <h3>${location}</h2>
                </div>
            </header>

            <article>
                <figure>
                    <img src=${post} alt="post image">
                </figure>

                <div class="icons">
                    <img src="images/icon-heart.png" alt="heart icon">
                    <img src="images/icon-comment.png" alt="comment icon">
                    <img src="images/icon-dm.png" alt="dm icon">
                </div>

                <div class="post-content">
                    <div class="bold">${likes}</div>

                    <p>
                        <h4 class="bold">${username}</h2>
                        <span>${comment}</span>
                    </p>
                </div>
            </article>

        </section>
    `;

    li.innerHTML = newPost;
    return li;
}



/* 
as app starts, creates posts to populate UI, taking from posts (DB object)
*/
function main() {

    for (let currentPost of posts ) {
        
        const newPost = createPost(currentPost.name, 
                                currentPost.username, 
                                currentPost.location, 
                                currentPost.avatar, 
                                currentPost.post,
                                currentPost.comment, 
                                currentPost.likes);

        postsList.appendChild(newPost);
    }
}

main()