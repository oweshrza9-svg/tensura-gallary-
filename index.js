const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    650: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1100: { slidesPerView: 4 },
  },
});

const rimuru = document.getElementById("rimuru");
const chat = document.getElementById("assistantChat");
const closeChat = document.getElementById("closeChat");

const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("chatMessages");


// OPEN CHAT
rimuru.addEventListener("click", () => {
    chat.style.display = "flex";
    input.focus();
});


// CLOSE CHAT
closeChat.addEventListener("click", () => {
    chat.style.display = "none";
});


// SEND MESSAGE
sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});


function sendMessage() {

    const question = input.value.trim();

    if (!question) return;

    messages.innerHTML += `
        <div class="user-message">
            ${question}
        </div>
    `;

    const answer = getRimuruResponse(question);

    messages.innerHTML += `
        <div class="bot-message">
            ${answer}
        </div>
    `;

    input.value = "";
}


function getRimuruResponse(question) {

    const q = question.toLowerCase();

    if (q.includes("hello") || q.includes("hi")) {
        return "Hey! Welcome to Tempest.";
    }

    if (q.includes("rimuru")) {
        return "That's me! The ruler of the Jura Tempest Federation.";
    }

    if (q.includes("tempest")) {
        return "Jura Tempest Federation is a nation built by Rimuru.";
    }

    if (q.includes("character")) {
        return "You can explore Tempest's characters in the Characters section.";
    }

    if (q.includes("skill")) {
        return "Tempest is filled with powerful skills and unique abilities.";
    }

    return "U see my master is a dumb guy he was so bored that he didnt even added the css for this sections KIndly ask <br> Tempest <br> character <br> skill <br>Hello<br> I know it sucks but this part is under Construction" ;
}