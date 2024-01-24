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
        show("#leave-btn1")
        disable_off("#ok-button");
        disable_on("input");
        disable_on("#in-button");
    }
}function ok_button(){
    button_text=$("#ok-button").text();
    if(button_text=="準備完了"){
        color_change("#ok-button","rgb(100,255,100)");
        color_change("#pl1","rgb(100,255,100)") ;
        $("#ok-button").text("未完了");
        disable_on("#leave-btn1");
        disable_off("#start-button");
    }else{
        color_change("#ok-button","rgb(253,143,143)")
        color_change("#pl1","rgb(253,143,143)")
        $("#ok-button").text("準備完了") 
        disable_off("#leave-btn1");  
    }
}function leave_btn(){
    hide("#leave-btn1");
    hide("#pl1");
    disable_on("#ok-button");
    disable_off("input");
    disable_off("#in-button");
}
$("#in-button").click(function(){
    in_button();
});
$("#ok-button").click(function(){
    ok_button();
})
$("#leave-btn1").click(function(){
    leave_btn();
})
$("#start-button").click(function(){
    window.location.href="../html/game.html";
})