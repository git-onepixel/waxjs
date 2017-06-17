Wax.define([], function() {
    return {
        onCreate: function() {
            this.super.onCreate();
            this.vm = this.createVue('#viewport', {
                data: {
                    welcome: 'Hello,Vue!'
                }
            });
        },

        onShow: function() {
            this.super.onShow();
            console.log('App Info -> v' + this.version, (this.platform.iOS ? 'iOS' : 'Android'));

            //测试数组的去重方法unique - 简单数据类型
            var arr = [1, 2, 3, 2, 3, 5, 7];
            console.log('简单数组去重 -> ', arr.unique())

            //测试数组的去重方法unique - 对象类型
            var arr2 = [
                { id: 2 }, { id: 4 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 6 }
            ]
            var tmprst = arr2.unique(function(v) {
                console.log(this) //使用了bind方法，JS引擎会忽略通过call或apply传递进来的this
                return v.id
            }.bind(this));

            console.log('对象数组去重 -> ', tmprst)
        },

        onHide: function() {
            this.super.onHide()
        }
    }

}, 'Wax.app.Controller');