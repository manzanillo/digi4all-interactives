$(document).ready(function(){

    $("#interactive-rsa-no-padding-process").click(function() {
      var crypt = new JSEncrypt();
      var input_text = $('#interactive-rsa-no-padding-input-text').val();

        crypt.setPublicKey($('#interactive-rsa-no-padding-key').val());
        var encrypted = crypt.encrypt(input_text);
        if (encrypted) {
          $('#interactive-rsa-no-padding-output-text').val(encrypted);
        } else {
          $('#interactive-rsa-no-padding-output-text').val('Fehler bei Verschlüsselung!');
        }
     
    });
});

