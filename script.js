const reviews = [
    {
        id: 1,
        name: "Rocky Balboa",
        job: "boxer",
        img: "https://images.unsplash.com/photo-1641451642717-766254ac689b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "Life is too short to be alone, too precious. Share it with a friend. Talk to trees, look at the birds. Whatever it takes. What the devil. But they're very easily killed. Clouds are delicate."

    },
    {
        id: 2,
        name: "Danny Zuko",
        job: "dancer",
        img: "https://images.unsplash.com/photo-1643665587724-de74d380ff66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        text: "Do an almighty painting with us. You have to allow the paint to break to make it beautiful. Only eight colors that you need. We're trying to teach you a technique here and how to use it."
    },
    {
        id: 3,
        name: "trinity matrix",
        job: "hacker",
        img: "https://images.unsplash.com/photo-1643166224998-aeea3c5172f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "Little short strokes. See there how easy that is. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer."
    },
    {
        id: 4,
        name: "darth vader",
        job: "skywalker",
        img: "https://images.unsplash.com/photo-1642678292818-d94e53d0276b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "A tree cannot be straight if it has a crooked trunk. See how easy it is to create a little tree right in your world. Let's do that again. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. You can bend rivers. But when I get home, the only thing I have power over is the garbage. The shadows are just like the highlights, but we're going in the opposite direction."
    },
    {
        id: 5,
        name: "sarah connor",
        job: "Terminator's Archenemy",
        img: "https://images.unsplash.com/photo-1643222379794-949f3e120a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. We don't really know where this goes - and I'm not sure we really care."
    },
];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;


//load initial item
window.addEventListener('click', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

})

//show person based on item
function showPerson(person) {
    const item = reviews[currentItem];
    src.img = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


//show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})


//show previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem =reviews.length - 1;
    }
    showPerson(currentItem);
})


//show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})