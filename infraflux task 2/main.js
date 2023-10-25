document.querySelectorAll('.col img').forEach(image=>{
    image.oneclick = () =>{
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = ()=>{
    document.querySelector('.popup-img').style.display = 'none';
}