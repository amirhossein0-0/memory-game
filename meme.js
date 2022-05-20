const section = document.querySelector("#container");
const playerLives = document.querySelector("#live");
 
let live = 7 ;
playerLives.textContent = live ;

// نگهداری عکس ها 
const getData = () => [
    {imgSrc:"./images/( •   •)__ _🌺💎.jpg" , name:"cat"},
    {imgSrc:"./images/cronobreaker - Professional, Digital Artist _ DeviantArt.jpg" , name:"panda"},
    {imgSrc:"./images/download.jpg" , name:"tiger"},
    {imgSrc:"./images/Ghetto Wallpapers & Urban Art.jpg" , name:"skelet"},
    {imgSrc:"./images/joker _ Tumblr.png" , name:"joker"},
    {imgSrc:"./images/Minions wallpaper by Agaaa_K - Download on ZEDGE™ _ f19c (2).jpg" , name:"minions"},
    {imgSrc:"./images/Paling populer 20+ Wallpaper Keren Untuk Ig (1).jpg" , name:"okhtapos"},
    {imgSrc:"./images/Partner Spotlight_ See How Gal Yosef Comedically Reimagines Iconic Cartoon Characters in a Seedy Adult World _ Artnet News (1).jpg" , name:"duck"},
    {imgSrc:"./images/Smile wallpaper by Dan_zazuleac - Download on ZEDGE™ _ a338.jpg" , name:"smile"},
    {imgSrc:"./images/Space Ape Art Print by MikeRay.jpg" , name:"monkey"},
    {imgSrc:"./images/( •   •)__ _🌺💎.jpg" , name:"cat"},
    {imgSrc:"./images/cronobreaker - Professional, Digital Artist _ DeviantArt.jpg" , name:"panda"},
    {imgSrc:"./images/download.jpg" , name:"tiger"},
    {imgSrc:"./images/Ghetto Wallpapers & Urban Art.jpg" , name:"skelet"},
    {imgSrc:"./images/joker _ Tumblr.png" , name:"joker"},
    {imgSrc:"./images/Minions wallpaper by Agaaa_K - Download on ZEDGE™ _ f19c (2).jpg" , name:"minions"},
    {imgSrc:"./images/Paling populer 20+ Wallpaper Keren Untuk Ig (1).jpg" , name:"okhtapos"},
    {imgSrc:"./images/Partner Spotlight_ See How Gal Yosef Comedically Reimagines Iconic Cartoon Characters in a Seedy Adult World _ Artnet News (1).jpg" , name:"duck"},
    {imgSrc:"./images/Smile wallpaper by Dan_zazuleac - Download on ZEDGE™ _ a338.jpg" , name:"smile"},
    {imgSrc:"./images/Space Ape Art Print by MikeRay.jpg" , name:"monkey"},   
] ;

// رندوم کردن عکس ها
const randomize = () => {
    const randomImg = getData() ;
    randomImg.sort(() => Math.random() - 0.5)
    return randomImg ;
} 

// HTML Genarator 

const showCard = () => {
    const randomImg = randomize() ;

    randomImg.forEach((item) => {
        
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");

        face.src = item.imgSrc ;
        card.setAttribute("name" , item.name);

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        section.append(card);
        card.append(face);
        card.append(back);

        card.addEventListener("click" , (e) => {
            card.classList.toggle("toggle");
            checkedCards(e);
        })
    })
}


// چک کردن
const checkedCards = (e) => {
    const clickCard = e.target ;
    // console.log(clickCard) 
    
    clickCard.classList.add("flipped");
    const flippedCard = document.querySelectorAll(".flipped");

        if(flippedCard.length === 2){
            if(flippedCard[0].getAttribute("name") === flippedCard[1].getAttribute("name")){
                flippedCard.forEach((card) => {
                    card.classList.remove("flipped");
                    card.style.pointerEvents = "none";
                })
            } else{
                flippedCard.forEach((card) => {
                    card.classList.remove("flipped");
                    setTimeout(() => card.classList.remove("toggle"),1300)    
                });
                live -- ;
                playerLives.textContent = live ;

                if(live === 0){
                    restart();
                }
            };
            const toggleCards = document.querySelectorAll(".toggle");
            if(toggleCards.length === 20){
                restart();
            }
        };
    };


// ریست کردن بازی
const restart = () => {
    const random = randomize() ;
    const cards = document.querySelectorAll(".card");
    const faces = document.querySelectorAll(".face");
    random.forEach((item , index) => {
        cards[index].classList.remove("toggle");
        setTimeout(() => {
            faces[index].src = item.imgSrc ;
            cards[index].setAttribute("name" , item.name);
            cards[index].style.pointerEvents = "all";
        },1500);
    });
    live = 7 ;
    playerLives.textContent = live ;
}

showCard() ;