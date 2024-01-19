document.getElementById('next').addEventListener('click', handleSlide);
document.getElementById('next').addEventListener('touchstart', handleSlide);

document.getElementById('prev').addEventListener('click', handleSlide);
document.getElementById('prev').addEventListener('touchstart', handleSlide);

function handleSlide() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('next').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }
    document.getElementById('prev').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    }
}
