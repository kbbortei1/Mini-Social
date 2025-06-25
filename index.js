const likeButton = document.getElementById('like-btn');
const likesCount = document.getElementById('likes');

let isLiked = false;
let currentLikes = parseInt(likesCount.textContent);

likeButton.addEventListener('click', function() {
    if (!isLiked) {
        // Like the post
        isLiked = true;
        currentLikes++;
        likeButton.classList.add('liked');
    } else {
        // Unlike the post
        isLiked = false;
        currentLikes--;
        likeButton.classList.remove('liked');
    }
    
    // Update the counter
    likesCount.textContent = currentLikes;
});