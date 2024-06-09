        //Função usada para inserir valores
        function insert(num){
            //verificação caso o valor que estiver no visor seja um dos valores apresentados abaixo execute a função limpa
            if(document.getElementById("resultado").innerHTML == "indefinido" || document.getElementById("resultado").innerHTML == "Infinity"){
                limpa();
            }

            //definindo valores que são operadores ou não
            switch(num){
                case "+": case"-": case "/": case "*": case ".":
                var definicao = "operador";
                break
            }

            //serve para bloquear a inserção de valores incorretos no inicio de uma operação
            switch(num){
                case "+": case "/": case "*": case ".":
                var comecoProibido = true;
                break
            }
            
            //chama a função verifica para verificar se há algum erro
            verifica(definicao)

            //realiza a inserção de num no visor
            var numero = document.getElementById("resultado").innerHTML;
            if(numero.substring(0) == "" && comecoProibido){

            }else {
                document.getElementById("resultado").innerHTML = numero + num;  
            }
        }

        //Função criada para realizar verificações para a inserção de numeros no visor
        function verifica(definicao){
            var numero = document.getElementById("resultado").innerHTML;
            var valor = numero.substring(numero.length - 1)
            
            //if utilizado para evitar o uso de mais de um operador seguido em uma operação
            if(definicao == 'operador'){
                switch(valor){
                    case "+": case "-": case "/": case "*": case ".":
                            apaga()
                            document.getElementById("resultado").innerHTML == valor;
                    break
                }
            }
            
            //if criado para evitar a existencia de zeros a esquerda do visor, a menos que estejam atrás de um operador ou ponto
            if(numero.substring(0) == "0" && definicao == "operador"){
            } else if (numero.substring(0) == "0" && definicao != "operador"){
                apaga()
                document.getElementById("resultado").innerHTML == valor;            
            }
        }

        //função criada para apagar completamente o visor
        function limpa(){
            document.getElementById("resultado").innerHTML = "";
        }
        
        //função criada para apagar somente o ultimo caracter do visor
        function apaga(resultadoGuardado){
            //if criado para invés de apagar apenas o ultimo caracter apagar tudo, caso esteja escrito 'indefinido' ou 'infinity' ou o ultimo resultado apresentado
            if(document.getElementById("resultado").innerHTML == "indefinido" || document.getElementById("resultado").innerHTML == "Infinity" || document.getElementById("resultado").innerHTML == resultadoGuardado){
                limpa();
            }
            var resultado = document.getElementById("resultado").innerHTML;
            document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1)
        }

        //Funçao criada para calcular tudo que estiver no visor 
        function calcula() {
            var resultado = document.getElementById("resultado").innerHTML;
            var resultadoProibido = resultado.substring(resultado.length - 1);
                
            //switch criado para apagar o ultimo valor do visor caso ele seja um operador
            switch (resultadoProibido) {
                case "+": case "-": case "/": case "*": case ".":
                    apaga();
                    calcula();
                break;
            }

            //if criado para calcular os valores no visor com formatação quando necessário
            if (resultado && resultadoProibido == "*" || resultadoProibido == "/" || resultadoProibido == "+" || resultadoProibido == "-"){
                document.getElementById("resultado").innerHTML = eval(resultado);
            } else if (resultado) {
                document.getElementById("resultado").innerHTML = avaliadoEFormatado(resultado);
                resultadoGuardado = avaliadoEFormatado(resultado);
            } 
                
        }
            
        //Função criada para avaliar o resultado caso ele seja grande demais para caber dentro do visor
        function avaliadoEFormatado(resultado, limite = 1e+11, digitosFracionados = 2) {
            try {
                const result = eval(resultado);
                return formataNumerosGrandes(result, limite, digitosFracionados);
                } catch {}
        }
            
        //Função criada para formatar o resultado com apenas 2 caracteres exponenciais
        function formataNumerosGrandes(result, limite = 1e+11, digitosFracionados = 2) {
            if (Math.abs(result) >= limite) {
                return result.toExponential(digitosFracionados);
            }
                return result.toString();
        }
        
