Wax.require(['Wax.app.MainController'],function(app){
    app.onCreate();
    app.onShow();
    document.addEventListener("visibilitychange", function(){
        if(this.visibilityState == 'hidden'){
            app.onHide()
        }
    }, false);
});








