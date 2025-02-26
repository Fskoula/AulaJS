// botão
document.querySelector(".cadastrar-aluno").innerHTML = "Cadastrar Aluno";

// p
let txt = document.querySelector(".texto");
txt.style.backgroundColor = "purple";
txt.style.color = "white";

txt.addEventListener("click", () => {
    if (txt.innerText == "Eu sou um textinho (❁´◡`❁)") {
        txt.innerText = "Agora textinho feliz ╰(*°▽°*)╯"
    } 
    else {
        txt.innerText = "Eu sou um textinho (❁´◡`❁)"
    }
})

// h1
let girafa = document.querySelector(".animal")
girafa.style.backgroundColor = "grey"
girafa.style.color = "white";
girafa.style.width = "300px";

// plantando plantas
let lua = document.querySelector(".fases-lua");
lua.addEventListener("mouseover", ()=>{
    if (lua.innerText == "⭐🌚") {
        lua.innerText = "🌒"
    } else if (lua.innerText == "🌒") {
        lua.innerText = "🌓"
    } else if (lua.innerText == "🌓") {
        lua.innerText = "🌔"
    } else if (lua.innerText == "🌔") {
        lua.innerText = "🌝🌟"
    } else if (lua.innerText == "🌝🌟") {
        lua.innerText = "🌖"
    } else if (lua.innerText == "🌖") {
        lua.innerText = "🌗"
    } else if (lua.innerText == "🌗") {
        lua.innerText = "🌘"
    } else if (lua.innerText == "🌘") {
        lua.innerText = "⭐🌚"
    }
})

