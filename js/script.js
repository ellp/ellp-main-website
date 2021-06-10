//efeito parallax na home
document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".layer").forEach(function (move) {
        var moving_value = move.getAttribute("data-speed");
        var x = (e.clientX * moving_value) / 200;
        var y = (e.clientY * moving_value) / 200;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

//pagina de carregamento
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

//menu mobile
function dropdown() {
    document.getElementById("navbar1").classList.toggle("show-navbar");
    document.body.classList.toggle("scroll-body");
    document.getElementById("closeb").classList.toggle("show-closeb");
    document.getElementById("dropb").classList.toggle("show-dropb");
}



//botão ver-mais ver-menos em oficinas
function verMaisFunc() {
    if (document.getElementById("VerMais").innerHTML === "Ver mais") {
        document.getElementById("VerMais").innerHTML = "Ver menos";
    } else {
        document.getElementById("VerMais").innerHTML = "Ver mais";
    }
}
function verMaisFunc2() {
    if (document.getElementById("VerMais2").innerHTML === "Ver mais") {
        document.getElementById("VerMais2").innerHTML = "Ver menos";
    } else {
        document.getElementById("VerMais2").innerHTML = "Ver mais";
    }
}
function verMaisFunc3() {
    if (document.getElementById("VerMais3").innerHTML === "Ver mais") {
        document.getElementById("VerMais3").innerHTML = "Ver menos";
    } else {
        document.getElementById("VerMais3").innerHTML = "Ver mais";
    }
}
function verMaisFunc4() {
    if (document.getElementById("VerMais4").innerHTML === "Ver mais") {
        document.getElementById("VerMais4").innerHTML = "Ver menos";
    } else {
        document.getElementById("VerMais4").innerHTML = "Ver mais";
    }
}

//contagem dos numeros em resultados
var flag_view = false;
$(window).scroll(function() {
    var top_of_element = $("#el").offset().top;
    var bottom_of_element = $("#el").offset().top + $("#el").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        const counters = document.querySelectorAll('.counter');
        if(!flag_view) {
            counters.forEach(counter => {
            counter.innerText = '0';

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;

                // get the 0.1% to speed up things
                const increment = target / 100;

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    if(target < 10){
                        setTimeout(updateCounter, 300)
                    } else if(target < 30){
                        setTimeout(updateCounter, 80)
                    }
                    else {
                        setTimeout(updateCounter, 20)
                    }
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
            flag_view = true;
            });
        }
    } else {
        return
    }
});


//ir pro topo
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    button = document.getElementById("btp");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.opacity = 1;
      } else {
        button.style.opacity = 0;
      }
}

function toTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }



  