const div_srv_url = 'https://division-service.mybluemix.net/';

$( document ).ready(function() {

    $('#calcBtn').click(() => {
        let num1 = $('#num1').val();
        let num2 = $('#num2').val();

        $('#result').val('Loading...');

        $.get( 
            div_srv_url, { 
                'num1': num1,
                'num2': num2
            }, 
            function(data) { 
                $('#result').val(data.result);
            }).fail(() => {
                $('#result').val('Server Error');
            }); 
    })



});