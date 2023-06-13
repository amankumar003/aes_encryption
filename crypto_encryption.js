<!DOCTYPE html>
<html lang="en">
  <head>
    <script 
        type="text/javascript" 
        src="https://unpkg.com/bsv@1.5.3/bsv.min.js">
    </script>
    
     <script 
        type="text/javascript" 
        src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js">
    </script>
  </head>
  <body>
      
      <div id="block1">
           <h1>Your Private Key is:</h1> 
           <p id="privText"> </p>
      </div>
      
      <div id="enryptedBlock">
           <h1>Encrypted Key:</h1> 
           <p id="encrypted"> </p>
      </div>
      
       <div id="decryptedBlock">
           <h1>Decrypted Key:</h1> 
           <p id="decrypted"> </p>
      </div>
      
    <script> 
    var privateKey = bsv.PrivateKey.fromRandom();
    var password = "userPassword";
    
    var ciphertext = CryptoJS.AES.encrypt(privateKey.toString(), password).toString();

    var bytes  = CryptoJS.AES.decrypt(ciphertext, password);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    

    var p = document.querySelector("#privText");
    p.innerHTML = privateKey.toString();
    
    var p = document.querySelector("#encrypted");
    p.innerHTML = ciphertext.toString();
    
     var p = document.querySelector("#decrypted");
    p.innerHTML = originalText.toString();
    
    </script>
  </body>
</html>
