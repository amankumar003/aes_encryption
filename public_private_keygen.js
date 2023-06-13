<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Public Key</title>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <script 
        type="text/javascript" 
        src="https://unpkg.com/bsv@1.5.3/bsv.min.js">
    </script>
    
  </head>
  <body>
      
      <div id="block1">
           <h1>Your Private Key is:</h1> 
           <p id="privText"> </p>
      </div>
       <div id="block2">
           <h1>Your Public Key is:</h1> 
           <p id="pubText"> </p>
      </div>
   
    <script> 
    var privKey = bsv.PrivateKey.fromRandom();
    var pubKey = bsv.PublicKey.fromPrivateKey(privKey);
    
    var p = document.querySelector("#privText");
    p.innerHTML = privKey.toString();
    
    var y = document.querySelector("#pubText");
    y.innerHTML = pubKey.toString();
     </script>
  </body>
</html>
