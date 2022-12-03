// Remember to import the data and Dog class!
// Remember to import the data and Dog class!
import dogsData from "./data.js";
import DogCharacter from "./Dog.js";
import {likeAvatar, nopeAvatar, welcomePage, lastPage, formContainer, loading} from "./utility.js" 

let dogIndex = ['Rex', 'Bella', 'Teddy', 'Maamu','Seem']
const mainHtml = document.getElementById("dogs-profile")
const profile = document.getElementById("profile")


let isWaiting = false

function welcomeIntro() {
    mainHtml.innerHTML = welcomePage()

}
welcomeIntro()

profile.addEventListener("click", () => {
    mainHtml.innerHTML = formContainer()
    closeBtn()
    submit()
    

})


function closeBtn() {
    const tinDogForm = document.getElementById("tindog-form")
    document.getElementById("close-btn").addEventListener("click", () => {
        tinDogForm.style.display = "none"
        if(welcomeIntro()) {
            isWaiting = true
        } else {
            joinUs()
        
        }
    })
   
}

function submit() {
    const formDetails = document.getElementById("tindog-form")
    formDetails.addEventListener("submit", (event) => {
        event.preventDefault()

        const userDetails = new FormData(formDetails)
        const fullName = userDetails.get("fullName")
        const email = userDetails.get("email")
        const bio = userDetails.get("bio")
        
        setTimeout(() => {
            formDetails.innerHTML = loading()
        }, 2000)  
            
        setTimeout(() => {
            formDetails.innerHTML =`
                <div class="profile-container">
                    <img class="profile-avatar" src="images/profile-pics.jpg">
                </div>
                <div class="details-container">
                    <h3 class="profile-details"><span class="profile-text">Fullname:</span> ${fullName}</h3>
                    <h3 class="profile-details"><span class="profile-text">Bio:</span> ${bio}</h3>
                    <p class="profile-details"><span class="profile-text">Email:</span> ${email}</p>
                </div>
                <button id="done-btn" class="done-btn">Done</button>`
        },4000)

        setTimeout(() => {
            doneBtn()
        }, 5000)
    })
    
}

function doneBtn() {
    const done = document.getElementById("tindog-form")
    document.getElementById("done-btn").addEventListener("click", () => {
         done.style.display = "none"
         if(welcomeIntro()) {
             isWaiting = true
         } else {
            submit()
            joinUs()
         }
    })
}



function joinUs() {
    document.getElementById("join-us-btn").addEventListener("click", getNextDogHtml)
    
}
joinUs()

function getNextDogHtml() {
    setTimeout(() => {
        const dogs = new DogCharacter(dogsData.shift())
        mainHtml.innerHTML = dogs.dogCharacterHtml()
        render()
    }, 1000)
}   

function likeBtn() {
    mainHtml.innerHTML += likeAvatar()
    nextDogProfile()
}

function nopeBtn() {
    mainHtml.innerHTML += nopeAvatar()
    nextDogProfile()
}

function nextDogProfile() {
    if(isWaiting) {
        
    } else if(dogIndex.pop()) {
        setTimeout(() => {
            getNextDogHtml()
        },1200)
    } else {  
        backBtn()
    }
    
}



function render() {
    document.getElementById('like-btn').addEventListener("click", likeBtn)
    document.getElementById('cross-btn').addEventListener("click", nopeBtn)
    
}



function backBtn() {
    mainHtml.innerHTML = lastPage() 
    const mainBack = document.getElementById("dogs-profile")
    document.getElementById("back-home").addEventListener("click", () => {
        mainBack.style.display = "none"
        if(welcomeIntro() ) {
            isWaiting = true
        } else {
            joinUs()
        }
    })
}