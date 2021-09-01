
    var slider=document.querySelector(".slider-items").children;
    var nextslider=document.querySelector(".right-slider");
    var prevslider=document.querySelector(".left-slider");
    var index=0;
    var totalslider= slider.length;

    nextslider.onclick=function() {

        nextslider.onclick-function () {
            next("next");
        }

        prevslider.onclick-function () {
            next("prev");
        }

        function next(direction){
            if(direction=="next"){
                index++;

            if(index==totalslider){
                index=0;
            }
         }

         for(i=0;i<slider.lenght;i++) {
             slider[i].classList.remove("active");
         }
         slider[index].classList.add("active");
    }

}