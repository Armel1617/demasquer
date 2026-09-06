"use strict";

/* =========================================================
   CONFIGURATION
========================================================= */

const CONFIG = {
    productName: "Démasquer l'hypocrisie",
    price: "3 999 FCFA",

    /*
     * REMPLACE cette URL par ton vrai lien de paiement.
     *
     * Exemple :
     * https://ton-lien-de-paiement.com
     */
    paymentUrl: "https://nrprgfox.mychariow.shop/prd_k14oalu8"
};


/* =========================================================
   BUY BUTTONS
========================================================= */

const buyButtons = document.querySelectorAll(
    "#buyButton, .mobile-buy-bar a"
);

buyButtons.forEach(button => {

    button.addEventListener("click", event => {

        if (
            CONFIG.paymentUrl === "#" ||
            !CONFIG.paymentUrl
        ) {
            event.preventDefault();

            alert(
                "Le lien de paiement n'est pas encore configuré."
            );

            return;
        }

        if (button.id === "buyButton") {
            event.preventDefault();
            window.location.href = CONFIG.paymentUrl;
        }

    });

});


/* =========================================================
   FAQ
========================================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });

        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================================================
   YEAR
========================================================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".feature, .problem-card, .over-card, .bonus-grid article, .chapter"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


/* =========================================================
   DYNAMIC PAYMENT URL
========================================================= */

const mainBuyButton =
    document.getElementById("buyButton");

if (mainBuyButton && CONFIG.paymentUrl !== "#") {
    mainBuyButton.href = CONFIG.paymentUrl;
}


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    `${CONFIG.productName} — ${CONFIG.price}`
);