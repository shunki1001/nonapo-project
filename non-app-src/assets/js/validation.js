	jQuery(function($){
    //必須項目チェック
    $(".required").blur(function(){
        if($(this).val() == ""){
            $(this).siblings('span.error_required').text("※入力必須項目です");
            $(this).addClass("errored");
        } else {
            $(this).siblings('span.error_required').text("");
            $(this).removeClass("errored");
        }
    });
    //名前入力チェック
    $("#companyname").blur(function(){
        
            $(this).siblings('span.error_name').text("");
            $(this).removeClass("errored");
        
    });
     $("#name").blur(function(){
        if(!$(this).val().match(/^[ぁ-んァ-ヶー一-龠 　rnt]+$/)){
            $(this).siblings('span.error_name').text("※正しく入力してください");
            $(this).addClass("errored");
        } else {
            $(this).siblings('span.error_name').text("");
            $(this).removeClass("errored");
        }
    });
    //メールアドレス入力チェック
    $("#email").blur(function(){
        if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/)){
            $(this).siblings('span.error_email').text("※正しく入力してください");
            $(this).addClass("errored");
        } else {
            $(this).siblings('span.error_email').text("");
            $(this).removeClass("errored");
        }
    });
     
   
    //電話番号入力チェック
    $("#tel").blur(function(){
  
            $(this).siblings('span.error_tel').text("");
            $(this).removeClass("errored");
        
    });
    $("#address").blur(function(){
		    $(this).siblings('span.error_address').text("");
            $(this).removeClass("errored");
        
    });
    $("#consensus").blur(function(){
		    $(this).siblings('span.error_name').text("");
            $(this).removeClass("errored");
        
    });
 
    
    //送信時の必須項目入力チェック
    $("#submit-input").on('click',function(){
        $(".required").each(function(){
            if($(this).val() == ""){
                $(this).siblings('span.error_required').text("※入力必須項目です");
                $(this).addClass("errored");
            }
        });
        if($(".errored").length){
            return false;
        }
    });

});