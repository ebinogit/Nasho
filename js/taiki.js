var name;
var nameL;
var button_text;
function show(num){
    $(num).show();
}function hide(num){
    $(num).hide();
}function disable_on(num){
    $(num).prop("disabled",true);
}function disable_off(num){
    $(num).prop("disabled",false);
}function color_change(num,color){
    $(num).css("background-color",color);
}function in_button(){
    name=$("input").val();
    nameL=name.length;
    hide(".error")
    if(name==""){
        show("#error1")
    }else if(name.length>=10){
        show("#error2")
    }else{
        localStorage.setItem("name1",name);
        $("#pl1").text(name);
        show("#pl1");
        disable_off("#ok-button");
        disable_on("input");
        disable_on("#in-button");
    }
}function ok_button(){
    button_text=$("#ok-button").text();
    if(button_text=="準備完了"){
        color_change("#ok-button","rgb(100,255,100)")
        color_change("#pl1","rgb(100,255,100)") 
        $("#ok-button").text("未完了")   
    }else{
        color_change("#ok-button","rgb(253,143,143)")
        color_change("#pl1","rgb(253,143,143)")
        $("#ok-button").text("準備完了")   
    }
}
$("#in-button").click(function(){
    in_button();
});
$("#ok-button").click(function(){
    ok_button();
})