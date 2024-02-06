/*ek rectangle banao jab mouse center par ho rectangle center par ho, jab mouse left jaana shuru ho rectangle left hjaana shur hojayee, par jaisa mouse left jaaye rectangle ki speed mein  jaate jaate slow hojaaye same happens with right side as well. */

window.addEventListener("mousemove", function(details){
    var rect = document.querySelector("#rect");

           var xval = gsap.utils.mapRange(
            0,
            window.innerWidth,
            100+rect.getBoundingClientRect().width/2,
            window.innerWidth - (100+rect.getBoundingClientRect().width/2),
            details.clientX
            );
            gsap.to("#rect",{
            left: xval + "px",
            ease: Power3
        });
});
