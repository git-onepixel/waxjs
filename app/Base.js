Wax.define([],function(){
    
    return {
        /**
         * APP版本号
         */
        version:'1.0.0',

        /**
         * 系统平台
         */
        platform:(function(){
            var u = navigator.userAgent;
            return {
                iOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                Android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
            }
        })(),

        /**
         * 获取URL参数
         * @param name
         * @returns {*}
         */
        getUrlParam:function(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },

        /**
         * 记录UBT
         */
        sendUbt:function(){
            console.log('Base.sendUbt is invoked !')
        },

        /**
         * 记录日志
         */
        sendLog:function(){
            //app log
        }
         
    }
});