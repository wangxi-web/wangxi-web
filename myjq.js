
(function (window, undefined) {

    var jQuery = function (selector) {

        return new jQuery.fn.init(selector)
    }

    // 原型替换
    jQuery.fn = jQuery.prototype = {
        html: function (value) {
            // console.log("这是JQ的css方法");
            // this === 构造函数this === 实例对象

            for (let i = 0; i < this.length; i++) {
                // if (value) {
                    this[i].innerHtml = value
                // }else{
                //     this[i].innerHtml
                // }
            }
        },
        css: function (key, value) {
            // console.log("这是JQ的css方法");
            // this === 构造函数this === 实例对象
            for (let i = 0; i < this.length; i++) {
                // this[i].style.key = value
                this[i].style[key] = value
            }
        }
    };

    jQuery.fn.init = function (selector) {
        // 获取元素
        var elements = document.querySelectorAll(selector);
        // console.log(elements);

        // 遍历将获取的元素放到对象上
        for (var i = 0; i < elements.length; i++) {
            this[i] = elements[i];
        }
        // 手动添加length属性
        this.length = elements.length;
    }

    // 修改init构造函数的原型，改成jQuery.prototype
    jQuery.fn.init.prototype = jQuery.fn;

    window.jQuery = window.$ = jQuery;
})(window)