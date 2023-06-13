<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Address</title>

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
           <p id="privKey"> </p>
      </div>
       <div id="block2">
           <h1>Your Public Key is:</h1> 
           <p id="pubKey"> </p>
      </div>
       <div id="block3" style="">
           <h1>Your Address is:</h1> 
           <p id="address"> </p>
      </div>
   
    <script> 
    var privKey = bsv.PrivateKey.fromRandom();
    var pubKey = bsv.PublicKey.fromPrivateKey(privKey);
    var address = bsv.Address.fromPublicKey(pubKey);
    
    var p = document.querySelector("#privKey");
    p.innerHTML = privKey.toString();
    
    var y = document.querySelector("#pubKey");
    y.innerHTML = pubKey.toString();
    
    var z = document.querySelector("#address");
    z.innerHTML = address.toString();
     </script>
  </body>
</html>
