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
            console.log(resultadoGuardado)
            if(document.getElementById("resultado").innerHTML == "indefinido" || document.getElementById("resultado").innerHTML == "Infinity" || document.getElementById("resultado").innerHTML == resultadoGuardado){
                
                limpa();
            }
            var resultado = document.getElementById("resultado").innerHTML;
            document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1)
        }

            function calcula() {
                var resultado = document.getElementById("resultado").innerHTML;
                var resultadoProibido = resultado.substring(resultado.length - 1);
                
                switch (resultadoProibido) {
                    case "+": case "-": case "/": case "*": case ".":
                        apaga();
                        calcula();
                    break;
                }
                if (resultado && resultadoProibido == "*" || resultadoProibido == "/" || resultadoProibido == "+" || resultadoProibido == "-"){
                    document.getElementById("resultado").innerHTML = eval(resultado);
                } else if (resultado) {
                    document.getElementById("resultado").innerHTML = evaluateAndFormat(resultado);
                    resultadoGuardado = evaluateAndFormat(resultado);
                } 
                
            }
            
            function evaluateAndFormat(resultado, limite = 1e+11, fractionDigits = 2) {
                try {
                    const result = eval(resultado);
                    return formatLargeNumber(result, limite, fractionDigits);
                } catch {}
            }
            
            function formatLargeNumber(result, limite = 1e+11, fractionDigits = 2) {
                if (Math.abs(result) >= limite) {
                    return result.toExponential(fractionDigits);
                }
                return result.toString();
            }
        
