function btn() {
    return`
    <div class="btn-container">
        <button id="cross-btn" aria-label="dislike-button"></button>
        <button id="like-btn" aria-label="like-button"></button>
    </div>`
}

function likeAvatar() {
    return`
    <div class="like-avatar">
        <img class="like-img" src="images/badge-like.png">
    </div>`
}


function formContainer() {
    return`
    <form action="#" id="tindog-form">
        <div class="close-modal-btn-container">
            <button class="close-btn" id="close-btn"><</button>
        </div>		
        <h2 class="form-text">Register here</h2>
        <input type="file">
        <input type="text" name="fullName"
            aria-label="fullName"
            placeholder="Enter your fullname"
            required
        >
        <input type="email" name="email"
            aria-label="email"
            placeholder="Enter your email"
            required
        >
        <input type="password" name="password"
            aria-label="password"
            placeholder="Enter your password"
        >
        <input type="text" name="bio"
            aria-label="biograpy"
            placeholder="Bio"
            required
        >
        <button type="submit" class="submit-btn">Submit</button>
    </form>`
}

function loading() {
    return `
    <div class="loading">
        <svg version="1.2" height="300" width="600" xmlns="http://www.w3.org/2000/svg"
            ="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path id="pulsar" stroke="rgba(0,155,155,1)" 
            fill="none" stroke-width="1"stroke-linejoin="round"
            d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35
            7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4
            8,-6 10,-17s2,10 9,11h210" /> 
        </svg>
        <h3 class="loading-txt">Setting up your profile</h3>
    </div>`
}


function nopeAvatar() {
    return`
    <div class="like-avatar">
        <img class="like-img" src="images/badge-nope.png">
    </div>`
}


function welcomePage() {
    return`
    <div class="welcome-page">
        <h2>Wecome to Tindog</h2>
        <h5 class="welcome-text">If you're looking to find new
        friends in a pinch, for your dogs join tindog</h5>  
    </div>
    <div class="btn-container">
        <button id="join-us-btn">Join us</button>
    </div>`
}

function lastPage() {
    return`
    <div class="end-page">
        <h2 class="end-page-text">Congratulations</h2>
        <p>Thanks for visiting Tindogs website don't forget to rate us.</p>
    </div>
    <div class="btn-container">
        <button id="back-home">Back Home</button>
    </div>`
}





export {btn, likeAvatar, nopeAvatar, welcomePage, lastPage, formContainer, loading}