(function () {

    firstReload();
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

//                        var header = document.getElementById('header');
//                        header.innerText = this.querySelector('span').innerText;

                        var wrapper = document.getElementById('wrapper');
                        var html = this.getAttribute('data-html');
                        var wrapperHtml = readHTML('html/' + html);

                        wrapper.innerHTML = wrapperHtml;
//                        setTimeout(function(){
//                            window.location.href = "goback.html";
//                        },2000);
                    }


                }, false);
            })(btn, i);
        }
    }

    function readHTML(url) {
        var returnHtml = '';
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, false);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                returnHtml = xmlhttp.responseText;
            }
        }
        xmlhttp.send();

        return returnHtml;
    }

    function firstReload() {
        //第一次加载打开第一个界面
        var first = document.querySelector('#footer div.btn');
        cj.addClass(first, 'active');
        var wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = readHTML('html/statistics.html');
    }
})();