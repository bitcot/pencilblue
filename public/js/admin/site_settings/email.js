var formRefillOptions =
[
    {
        id: 'secure_connection',
        type: 'button_group',
        elementPrefix: 'secure_connection_',
        onComplete: checkForCustomService
    },
    {
        id: 'verification_content',
        type: 'layout'
    }
]

$(document).ready(function()
{
    $('#media_button').hide();
});

function checkForCustomService()
{
    if($('#service').val() == 'custom')
    {
        $('#custom_smtp_options').show();
    }
    else
    {
        $('#custom_smtp_options').hide();
    }
}

function prepareEmailSettingsSave()
{
    $('fieldset').append('<textarea id="verification_content" name="verification_content" style="display: none">' + encodeURIComponent($('#layout_editable').html()) + '</textarea>');
    
    $('#email_form').submit();
}