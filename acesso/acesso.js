const enviar = document.querySelector(".enviar")
const nome = document.querySelector(".usuario")
const senha = document.querySelector(".senha")

enviar.addEventListener('click',() =>{
    var nomeValor = nome.value.toLowerCase()
    var senhaValor = senha.value.toLowerCase()

    if(nomeValor === "" ||
        senhaValor === "") {
            preencha()
        }

        if(nomeValor === "bia" ||
        nomeValor === "beatriz"){
            console.log("virificacao 1")
            if(
                senhaValor === "eu te amo" ||
                senhaValor === "euteamo" ||
                senhaValor === "eute amo" ||
                senhaValor === "eu teamo"){
                    console.log("virificacao 1")
                    sucesso()
                }else {
                    if(senhaValor === "") {
                            preencha()
                        }else{
                            negado()
                        }
                }
        }else {
            if(nomeValor != "" &&
            senhaValor != ""){
                negado ()
            }
        }

        function negado() {
            const negado = document.querySelector(".negado")
            negado.classList.add("ativo")
    
            setTimeout(() => {
                location.href = "error/erro.html"
            }, 1000);
        }

        function sucesso() {
            const sucesso = document.querySelector(".sucesso")
            sucesso.classList.add("ativo")

            setTimeout(() => {
                location.href = "home/home.html"
            }, 1000);
        }

        function preencha() {
            const preencha = document.querySelector(".preencha")
            preencha.classList.add("ativo")

            setTimeout(() => {
                preencha.classList.remove("ativo")
            }, 1500)
        }

    
})
