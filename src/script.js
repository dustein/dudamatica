<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  
</head>
<body>
    <h1>DudaMática</h1>

    <button onclick="playRound()">Iniciar Round</button>
    
    <div id="operacao">
        <div class="operadores" id="num1">Num1</div>
        <p class="operadores" >+</p>
        <div class="operadores" id="num2">Num2</div>
        <p class="operadores">=</p>
        <input id="userResp" type="number" placeholder="Responda"/>
        <p id="soma"></p>
    </div>

    <button onclick="respRound()">Responder</button>

    <div id="mostraResp"></div>

</body>
</html>
