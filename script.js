//변수 지정
var slideWrapper = document.getElementsByClassName("container"),
    slideContainer = document.getElementsByClassName("slider-container"),
    slides = document.getElementsByClassName("slide"),
    slideCount = slides.length, //슬라이드 개수
    currentIndex = 0,
    topHeight = 0,
    navPrev = document.getElementById("prev"),
    navNext = document.getElementById("next");

//슬라이드 높이 확인하여 부모의 높이로 지정
function calculateTallestSlide(){
    for(var i = 0;i < slideCount; i++){ 
        if(slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }
    }

    slideWrapper[0].style.height = topHeight + "px";  //height는 px단위로 표현
    slideContainer[0].style.height = topHeight + "px";
}

calculateTallestSlide();

//슬라이드가 있으면 가로로 배열
for(var i = 0;i < slideCount;i++){
    slides[i].style.left = i*100 + "%";
};

//슬라이드 이동 함수
function goToSlide(idx){
    slideContainer[0].style.left = idx * -100 + "%";
    slideContainer[0].classList.add("animated")
    currentIndex = idx;

    updateNav();
}

// 버튼기능 업데이트 함수
function updateNav(){
    //처음일 때
    if(currentIndex == 0){
        navPrev.className.add("disabled");
    }else{
        navPrev.className.remove("disabled");
    } 

    //마지막일 때
    if(currentIndex < slideCount){
        navNext.className.add("disabled");
    }else{
        navNext.className.remove("disabled");
    }

}

//버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener("click",function(e){
    e.preventDefault();
    goToSlide(currentIndex - 1);
});
navNext.addEventListener("click",function(e){
    e.preventDefault();
    goToSlide(currentIndex + 1);
});

//첫번째 슬라이드 먼저 보이기
goToSlide(0);
