$(document).ready(function(){

    $("#interactive-rsa-no-padding-process").click(function() {
      var crypt = new JSEncrypt();
      var input_text = $('#interactive-rsa-no-padding-input-text').val();
        crypt.setPrivateKey($('#interactive-rsa-no-padding-key').val());
        var decrypted = crypt.decrypt(input_text);
        if (decrypted) {
          $('#interactive-rsa-no-padding-output-text').val(decrypted);
        } else {
          $('#interactive-rsa-no-padding-output-text').val('Fehler bei Entschlüsselung!');
        }
      
    });
});
