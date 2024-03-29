$( document ).ready(function() {
    $("#ajax-form").submit(function (e) {
        $.ajax({
            url:     'action_ajax_form.php', //url страницы (action_ajax_form.php)
            type:     "POST", //метод отправки
            data: $("#ajax-form").serialize(),  // Сеарилизуем объект
            dataType: "JSON",

            success: function(response) { //Данные отправлены успешно
                if ($("#ajax-form .error").length > 0) {
                    $( "#ajax-form .error" ).remove();
                }

                if (response.status == 'error') {
                    $('input[name="name"]').after("<span class=\"error\"> " + response.name + " </span>");
                    $('input[name="email"]').after("<span class=\"error\"> " + response.email + " </span>");
                    $('textarea[name="comment"]').after("<span class=\"error\"> " + response.comment + " </span>");
                } else if (response.status == 'success') {
                    console.log(response.content);

                    // for () {}

                    // $('#comments').html();
                }
            },
            error: function(response) { // Данные не отправлены
                console.log(response);
            }
        });

        e.preventDefault();
    });
});

// function sendAjaxForm(comments, ajax_form, url) {
//     $.ajax({
//         url:     url, //url страницы (action_ajax_form.php)
//         type:     "POST", //метод отправки
//         dataType: "html", //формат данных
//         data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
//         success: function(response) { //Данные отправлены успешно
//             result = $.parseJSON(response);
//             $('#comments').html('Имя: '+result.name+'<br>E-Mail: '+result.email+'<br>Комментарий: '+result.comment);
//         },
//         error: function(response) { // Данные не отправлены
//             $('#comments').html('Ошибка. Данные не отправлены.');
//         }
//     });
// }