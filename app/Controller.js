Wax.define(['Wax.lib.vue'],function(Vue){
    return {

        createVue:function(id,options){
            options.el = id;
            return new Vue(options)
        },

        onCreate:function(){
            console.log('Controller.onCreate is invoked !');
        },

        onShow:function(){
            console.log('Controller.onShow is invoked !')
        },

        onHide:function(){
            this.sendUbt();
            console.log('Controller.onHide is invoked !');
        }
    }

},'Wax.app.Base');