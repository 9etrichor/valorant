const allImage = document.querySelectorAll('img');
const Main = document.getElementById('main')
let testImage = document.getElementById("test");
let zoomedImg = document.querySelector('body');
let zoomed = false;
allImage.forEach((image) => {
    image.addEventListener('click',()=> {
        let img = document.createElement('img');
        img.src = image.src;
        img.classList.add('zoom-img')
        Main.append(img);
        zoomedImg = img;
    })
})

zoomedImg.addEventListener('click',()=> {
    if(zoomed)
    {
        zoomedImg.classList.remove('zoom-img');
        zoomed = false;
    }
    else
    {
        zoomed = true;
    }
})