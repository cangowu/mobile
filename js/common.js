this.CangoJs = this.CangoJs || {};
// 定义别名(快捷名)：
if (typeof this.cj === 'undefined') {
    this.cj = this.CangoJs;
}

(function () {
    /**
     * 获取url参数
     * @param name
     * @returns {string}
     */
    function getUrl(name) {
        var href = window.location.href;
        var query = href.split('?')[1];
        var queryC = query.split('&');
        var sRenturn = '';
        for (var i = 0; i < queryC.length; i++) {
            var oQuery = queryC[i].split('=');
            if (oQuery[0] == name) {
                sRenturn = oQuery[1];
            }
        }
        return decodeURI(sRenturn);
    };
    cj.getUrl = getUrl;

    /**
     * 增删改样式
     */

    function addClass(obj, cls) {
        var obj_class = obj.className,//获取 class 内容.
            blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
        var added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
        obj.className = added;//替换原来的 class.
    }

    cj.addClass = addClass;

    function removeClass(obj, cls) {
        var obj_class = ' ' + obj.className + ' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc        bcd' -> ' abc        bcd '
        obj_class = obj_class.replace(/(\s+)/gi, ' ');//将多余的空字符替换成一个空格. ex) ' abc        bcd ' -> ' abc bcd '
        var removed = obj_class.replace(' ' + cls + ' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
        removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
        obj.className = removed;//替换原来的 class.
    }

    cj.removeClass = removeClass;

    function hasClass(obj, cls) {
        var obj_class = obj.className,//获取 class 内容.
            obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
        var x = 0;
        for (x in obj_class_lst) {
            if (obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
                return true;
            }
        }
        return false;
    }

    cj.hasClass = hasClass;

    function toggleClass(obj, cls){
        if(!cj.hasClass(obj, cls)){
            cj.removeClass(obj, cls);
        }else{
            cj.addClass(obj, cls);
        }
    }
    cj.toggleClass = toggleClass;

})();
