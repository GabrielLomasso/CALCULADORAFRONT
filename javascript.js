        
        
        
        
        function verifica(definicao){
            var numero = document.getElementById("resultado").innerHTML;
            var valor = numero.substring(numero.length - 1)
            
            if(definicao == 'operador'){
                switch(valor){
                    case "+": case "-": case "/": case "*": case ".":
                            apaga()
                            document.getElementById("resultado").innerHTML == valor;
                    break
                }
            }
            
            if(numero.substring(0) == "0" && definicao == "operador"){
            } else if (numero.substring(0) == "0" && definicao != "operador"){
                apaga()
                document.getElementById("resultado").innerHTML == valor;            
            }

            if(numero.length >= 12){
                console.log("penis")
            }
        }

        
        
        function insert(num){
            if(document.getElementById("resultado").innerHTML == "indefinido" || document.getElementById("resultado").innerHTML == "Infinity"){
                limpa();
            }

            switch(num){
                case "+": case"-": case "/": case "*": case ".":
                var definicao = "operador";
                break
            }

            switch(num){
                case "+": case "/": case "*": case ".":
                var comecoProibido = true;
                break
            }
            
            verifica(definicao)
            var numero = document.getElementById("resultado").innerHTML;
            if(numero.substring(0) == "" && comecoProibido){

            }else {
                document.getElementById("resultado").innerHTML = numero + num;  
            }
        }

        function limpa(){
            document.getElementById("resultado").innerHTML = "";
        }
        
        function apaga(){
            if(document.getElementById("resultado").innerHTML == "indefinido" || document.getElementById("resultado").innerHTML == "Infinity"){
                limpa();
            }
            var resultado = document.getElementById("resultado").innerHTML;
            document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1)
        }

        function calcula(){
            var resultado = document.getElementById("resultado").innerHTML;
            var resultadoProibido = resultado.substring(resultado.length - 1)

                    switch(resultadoProibido){
                        case "+": case "-": case "/": case "*": case ".":
                            apaga()
                            calcula()
                        break
                    }

            document.getElementById("resultado").innerHTML = eval(resultado);
            if(resultado){
                
            } else {
                document.getElementById("resultado").innerHTML = "indefinido";
            }

            if(resultado >= 12){
                resultado.innerHTML = resultado
            }
        }
