// Create the Dog class here
import { btn } from "./utility.js";

class DogCharacter {
    constructor(data) {
        Object.assign(this, data)
        this.swiped = this.hasBeenSwiped
        this.liked = this.hasBeenLiked
    }

    dogCharacterHtml() {
        const {name, avatar, age, bio, greetings} = this
        return`
        <div class="profile-pics">
            <img src="${avatar}" class="rex-img">
            <div class="details">
            <span><p><strong>${name}, ${age}</strong> ${greetings}</p></span>
            </div>
            <p class="bio">${bio}</p>
        </div>
        ${btn()}`
        
    }
}

export default DogCharacter