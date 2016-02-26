(function () {


    //第一次加载打开第一个界面
    var first = document.querySelector('#footer div.btn');
    cj.addClass(first, 'active');

    footerEventBind();

    function footerEventBind() {
        var footer = document.getElementById('footer');

        var btns = footer.getElementsByClassName('btn');

        for (var i = 0; i < btns.length; i++) {

            var btn = btns[i];
            (function (elm, idx) {
                elm.addEventListener('touchstart', function (e) {
                    var className = this.getAttribute('class');

                    if (!cj.hasClass(this, 'active')) {
                        cj.addClass(this, 'active');
                        var siblings = this.parentNode.children;
                        for (var i = 0; i < siblings.length; i++) {
                            var sb = siblings[i];
                            if (this !== sb && cj.hasClass(sb, 'active')) {
                                cj.removeClass(sb, 'active');
                            }
                        }
//                        window.location.href = "goback.html";
                    }


                }, false);
            })(btn, i);
        }

    }
})();