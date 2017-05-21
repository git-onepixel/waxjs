Wax.define([],function(){
    return {
        onCreate:function(){
            this.super.onCreate();
            this.vm = this.createVue('#viewport',{
                data:{
                   welcome:'Hello,Vue!'
                }
            });
        },

        onShow:function(){
            this.super.onShow();
            console.log('App Info -> v'+ this.version,(this.platform.iOS?'iOS':'Android'));
        },

        onHide:function(){
            this.super.onHide()
        }
    }

},'Wax.app.Controller');
