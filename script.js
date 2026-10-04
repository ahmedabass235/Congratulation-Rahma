// فتح الهدية
function openGift() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    startHearts();

    const music = document.getElementById("music");
    music.play();
}


// قلوب متحركة
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️", "💗", "💖", "💕", "🤍", "🌸"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}


function startHearts() {

    setInterval(() => {
        createHeart();
    }, 500);
}


// أمنيات
const wishes = [
    "ربنا يسعدكم ويهنيكم طول العمر ❤️",
    "ربنا يبارك لكم في حياتكم الجديدة 🤍",
    "ربنا يجعل بيتكم مليان حب وراحة بال 🏡",
    "ربنا يرزقكم أجمل الأيام 💍",
    "تفضلوا دايمًا سند لبعض ❤️",
    "ربنا يتمم فرحتكم على خير 🌸"
];

let wishIndex = 0;

function showWish() {

    document.getElementById("wish").innerText =
        wishes[wishIndex];

    wishIndex++;

    if (wishIndex >= wishes.length) {
        wishIndex = 0;
    }
}


// العداد
// غيّر التاريخ ده لموعد الفرح
const weddingDate = new Date("2026-10-28T20:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}

setInterval(updateTimer, 1000);

updateTimer();


// المفاجأة الأخيرة
function finalMessage() {

    const text = document.getElementById("finalText");

    text.innerHTML =
        "أهم حاجة في الدنيا إنك تكوني مبسوطة ❤️<br><br>" +
        "ألف مبروك يا أجمل عروسة، " +
        "وربنا يجعل حياتك الجديدة كلها حب وفرحة وسعادة 💍🤍";

    createHeart();
    createHeart();
    createHeart();
}