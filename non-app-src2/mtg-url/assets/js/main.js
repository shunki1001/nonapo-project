




$("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">必須項目になります。</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">メールアドレスを入力ください</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">商談用のURLを発行しました。<br>下記URLからアクセスお願い致します。<div class="text-center"><a href="https://whereby.com/s-tamura-my" class="btn btn-next btn-fill btn-success btn-wd">https://whereby.com/s-tamura-my</a> <div></div><div class="text-center"><a href="https://lead-dynamics.com/" class="btn btn-next btn-fill btn-simple btn-wd">LPへ戻る</a> <div>');
                });
            });
        }
        return !1;
    });

