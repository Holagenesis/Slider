let items = document.querySelectorAll('.slider .slide .item');

let next = document.getElementById('next-btn');
let prev = document.getElementById('prev-btn');
let thumbnails = document.querySelectorAll('.thumbnails .thumbnails-items');
let countItem = items.length;
let itemActive = 0;
let active = 1;


next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}


prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }

    showSlider();

}

function showSlider(){
   
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .slide .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnails .thumbnails-items.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

   
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

