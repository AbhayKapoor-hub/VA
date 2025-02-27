let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector(".voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    console.log(hours)
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon sir")
    }
    else {
        speak("Good evening sir")
    }
}

// window.addEventListener("load",()=>{
//     wishMe()
// })

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (Event) => {
    let currentIndex = Event.resultIndex
    let transcript = Event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display="none"
    voice.style.display= "block"
})

function takeCommand(message){
     btn.style.display="flex"
     voice.style.display= "none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir, how can I help you")
    }
    else if (message.includes("who are you") || message.includes("hu r u")) {
        speak("I am akira. A virtual assistant made by abhay sir.")
    }  
    else if (message.includes("who made you")) {
        speak("Mr. Abhay Kapoor. He is my master.")
    }
    else if(message.includes("open youtube")) {
        speak("Opening youtube...");
        window.open("https://www.youtube.com");
    } 
    else if(message.includes("song")) {
        speak("Opening youtube and play a song for you...");
        window.open("https://youtu.be/M4XeKEMkYFI?si=zm4VLmOFrZz6Veks");
    } 
    else if(message.includes("open google")) {
        speak("Opening google...");
        window.open("https://www.google.com");
    } 
    else if(message.includes("open facebook")) {
        speak("Opening facebook...");
        window.open("https://www.facebook.com");
    } 
    else if(message.includes("open instagram")) {
        speak("Opening instagram...");
        window.open("https://www.instagram.com");
    }
    else if(message.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://");
    }
    else if(message.includes("open spotify")) {
        speak("Opening spotify...");
        window.open("spotify://");
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace("akira","")||message.replace("vakira","")}`)
        
        window.open(`https://www.google.com/search?q=${message.replace("akira","")||message.replace("vakira","")}`)
    }  
}

