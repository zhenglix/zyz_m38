function sendRegisterEmail() {
    sendEmail($("#register-email").val(), 0, $("#register-password").val());
}
function sendResetPasswordEmail() {
    sendEmail($("#registered-email").val(), 1, $("#new-password").val());
}
/*重设密码*/
function resetPassword() {
    var email = $("#registered-email").val();
    var password = $("#new-password").val();
    var new_captcha_v = $("#new_captcha_v").val();
    if(new_captcha_v.length==''){
        layer.msg("验证码不能为空！",{icon: 5});
        return false;
    }
    if(checkInfo(email, password)){
        $.ajax({
            url: "/resetPassword",
            type: "post",
            dataType: "json",
            data: {
                "email": $("#registered-email").val(),
                "password": $("#new-password").val(),
                "captcha_v": $("#new_captcha_v").val(),
            },
            success: function (data) {
                if (data.code == 200) {
                    layer.msg(data.registerInfo,{icon: 1});
                    location.reload();
                }else {
                    layer.msg(data.registerInfo,{icon: 5});
                }
            }
        });
    };

}

function register() {
    var email = $("#register-email").val();
    var password = $("#register-password").val();
    var captcha_v = $("#captcha_v").val();
    if(captcha_v.length==''){
        layer.msg("验证码不能为空！",{icon: 5});
        return false;
    }
    if(checkInfo(email, password)){
        $.ajax({
            url: "/register",
            type: "post",
            dataType: "json",
            data: {
                "email": $("#register-email").val(),
                "password": $("#register-password").val(),
                "captcha_v": $("#captcha_v").val(),
            },
            success: function (data) {
                if (data.code === 200) {
                    layer.msg(data.registerInfo,{icon: 1});
                    /*注册成功，登录*/
                    location.reload();
                }else {
                    layer.msg(data.registerInfo,{icon: 5});
                }
            }
        });
    };

}

function loginer() {
    var email = $("#login-email").val();
    var password = $("#login-password").val();
    if(checkInfo(email, password)){
        $.ajax({
            url: "/login",
            type: "post",
            dataType: "json",
            data: {
                "email": email,
                "password": password,
            },
            success: function (data) {
                if (data.code === 200) {
                    layer.msg(data.loginInfo,{icon: 1});
                    location.reload();
                }else {
                    layer.msg(data.loginInfo,{icon: 5,time: 3000,shade : [0.5 , '#000' , true]});
                }
            }
        });
    };

}


function checkInfo(email, password) {
    if (email == null || email.trim().length === 0) {
        layer.msg("请输入邮箱！",{icon: 5});
        return false;
    }
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!reg.test(email)) {
        layer.msg("邮箱格式不正确！",{icon: 5});
        return false;
    }
    if (password == null || password.trim().length === 0) {
        layer.msg("请输入密码！",{icon: 5});
        return false;
    }
    /** 密码至少包含 数字和英文，长度6-20
     */
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    if (!reg.test(password)) {
        layer.msg("密码至少包含,数字和英文，长度6-20！",{icon: 5});
        return false;
    }

    return true;

}

/**
 * 发送邮件
 */
function sendEmail(email, type, password) {
    if(checkInfo(email, password)){
        $.ajax({
            url: "/sendEmail",
            type: "GET",
            data: {
                "email": email,
                "type": type
            },
            dataType: "json",
            success: function (data) {
                if (data.code === 200) {
                    layer.msg(data.message,{icon: 1});
                    if(type==0){
                        invokeSetTime("#send-email-btn");
                    }
                    invokeSetTime("#new_send-email-btn");
                }else {
                    layer.msg(data.message,{icon: 5});
                }
            }
        })
    };

}

/**
 * 发送邮件后定时60秒
 * @param obj
 */
function invokeSetTime(obj) {
    let countdown = 60;
    setTime(obj);

    function setTime(obj) {
        if (countdown === 0) {
            $(obj).attr("disabled", false);
            $(obj).text("获取验证码");
            countdown = 60;
            return;
        } else {
            $(obj).attr("disabled", true);
            $(obj).text("(" + countdown + ") s 重新发送");
            countdown--;
        }
        setTimeout(function () {
            setTime(obj)
        }, 1000);
    }
}

/**
 * 展示标签集
 */
function showSelectTag() {

    if (document.getElementById("tag-list").style.display == "none") {
        let selectedList = $("#tags_input").val().split(",");
        selectedList.forEach(selected => $(document.getElementById('all' + selected)).addClass("publish-tag-selected"));
        $("#tag-list").show();
        $("#tag_icon").removeClass("glyphicon-eye-close")
        $("#tag_icon").addClass("glyphicon-eye-open")
    } else {
        $("#tag-list").hide();
        $("#tag_icon").addClass("glyphicon-eye-close")
        $("#tag_icon").removeClass("glyphicon-eye-open")
    }

}

/**
 * 关闭标签集
 */
function closeSelectTag() {

}

let count = 0;//已选择的标签数
/**
 * 添加标签
 * @param e
 */
function selectTag(e) {
    const value = e.getAttribute("data-tag");//获取标签的值
    let $tagsInput = $("#tags_input");
    const content = $tagsInput.val();//获取输入框的值
    //防止字串干扰
    let arr = content.split(',');
    count = arr.length;
    if (arr.indexOf(value) === -1) {
        if (++count > 5) {
            layer.msg('最多选择5个标签');
            return;
        }
        $(document.getElementById('all' + value)).addClass("publish-tag-selected");
        if (content) {
            $tagsInput.val(content + ',' + value);
        } else {
            $tagsInput.val(value);
        }
    } else {
        layer.msg('不要再点啦，我已经选过了')
    }
}

/**
 * 删除标签
 * @param e
 */
function deleteTag(e) {
    const removeValue = e.getAttribute("data-tag");//获取待删除的值
    const content = $("#tags_input").val();//获取输入框的值
    //防止字串干扰
    let arr = content.split(',');
    count = arr.length;
    if (arr.indexOf(removeValue) > -1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === removeValue) {
                arr.splice(i, 1);
                $(document.getElementById('all' + removeValue)).removeClass("publish-tag-selected");
                count--;
                break;
            }
        }
        $("#tags_input").val(arr.join(','));
    } else {
        layer.msg('不要再点啦，我还没被选呢');
    }
}

/**
 * 提交问题的回复
 */
function submit_question_comment() {
    const id = $("#question_parent_id").val();
    const content = $("#question_comment_content").val();
    submit_comment_by_type(id, 1, content);
}

/**
 * 提交评论的回复
 * @param e
 */
function submit_comment_comment(e) {
    const id = e.getAttribute("data-id");//获得回复的id
    const content = $("#input-" + id).val();//根据id获得评论内容
    submit_comment_by_type(id, 2, content);
}

/**
 * 根据传递的类型提交评论
 * @param parent_id
 * @param type
 * @param content
 */
function submit_comment_by_type(parent_id, type, content) {
    if (!content) {
        layer.msg("不能输入空的内容哦~");
        return false;
    }
    if(content.length < 5){
        layer.msg('朋友多说一点吧', {icon: 5});
        return false;
    }
    $.ajax({
        type: "POST",
        url: "/comment/comment",
        contentType: "application/json",
        data: JSON.stringify({
            "parentId": parent_id,
            "content": content,
            "type": type
        }),
        dataType: "json",
        success: function (data) {
            if (data.code === 200) {
                layer.msg(data.commentInfo, {icon: 1});
                // layer.msg(data.message, {icon: 5});
                window.location.reload();
                // $("#comment_frame").hide();
            } else {
                layer.msg(data.commentInfo,{icon: 5});
                window.location.reload();
            }
        }
    });
}

/**
 * 显示或收起回复的评论
 * @param e
 */
function show_subComment(e) {

    //const定义的变量不可以修改，而且必须初始化。
    var id = e.getAttribute("data-id");//获取评论id
    WrCache.setCache("commentId", id);
    $('#sub_comment_btn-' + id).toggleClass("comment_active");
    var subCommentContainer = $('#comment-' + id);
    subCommentContainer.toggleClass("in");

    if (subCommentContainer.hasClass("in") ) {
        var ii = layer.load();
        $.getJSON("/comment/comment/" + id, function (data) {
            $.each(data.commentDtos.reverse(), function (index, comment) {
                const mediaLeftElement = $("<div />", {
                    "class": "media-left"
                }).append($("<a/>", {
                    "href": "/user/" + comment.user.id
                })).append($("<img/>", {
                    "style":"margin: auto",
                    "class": "two_comment_avatar",
                    "src": comment.user.avatarUrl
                }));

                const mediaBodyElement = $("<div/>", {
                    "class": "media-body"
                }).append($("<span/>", {
                    "class": "media-heading question_text",
                    "html": comment.user.name
                })).append($("<span/>", {
                    "style":"    margin-left: 4px;\n" +
                        "    color: #fec42d;\n" +
                        "    font-size: 12px;\n" +
                        "    font-weight: 700;",
                    "class": "user-level",
                    "html": 'L'+comment.level
                })).append($("<br/>")).append($("<span/>", {
                    "html": comment.comment.content
                }));
                const time = moment(comment.comment.gmtCreate).format('YYYYMMDD HHmmss');
                const operatingElement = $("<div/>", {
                    "class": "comment_operating"
                }).append($("<span/>", {
                    "class": "question_text to-right",
                    "html": moment(time, "YYYYMMDD HHmmss").fromNow()
                }));

                const mediaElement = $("<div/>", {
                    "class": "media"
                }).append(mediaLeftElement).append(mediaBodyElement).append(operatingElement);


                const lineElement = $("<hr/>", {
                    "class": "comment_cut_line"
                });

                const commentElement = $("<div class='two_comment'/>")
                    .append(mediaElement)
                    .append(lineElement);

                subCommentContainer.prepend(commentElement);
            });
            layer.close(ii);
        });
    }
    else {
        $('.two_comment').remove();
    }
}

var WrCache = {
    setCache: function (key, value, flag) {
        window[flag ? 'sessionStorage' : 'localStorage'].setItem("Wr_" + key, value);
    },
    removeCache: function (key, flag) {
        window[flag ? 'sessionStorage' : 'localStorage'].removeItem("Wr_" + key);
    },
    getCache: function (key, flag) {
        return window[flag ? 'sessionStorage' : 'localStorage'].getItem("Wr_" + key);
    }
};


function userUpdateInfo() {
    layer.open({
        type:1,
        /*area:['500px','600px'],*/
        title: '更新用户信息'
        ,content: $("#userUpdateInfo"),
        shade: 0,
        btn: ['提交', '取消']
        ,btn1: function(index, layero){
            var name=$("#username").val();
            if(name.length < 2){
                layer.msg('用户名至少得2个字符啊', {icon: 5});
                return false;
            }
            if(name.length > 10){
                layer.msg('用户名最多10个字符啊', {icon: 5});
                return false;
            }
            //校验用户名，ajax
            $.ajax({
                url: "/resetUsername",
                type: "post",
                dataType: "json",
                data: {
                    "name": name,
                },
                success: function (data) {
                    if(data.code==1){
                        layer.msg(data.msg, {icon: 1,time: 1000,shade : [0.5 , '#000' , true]});
                        location.reload();
                    }else {
                        layer.msg(data.msg, {icon: 5,time: 2000,shade : [0.5 , '#000' , true]});
                    }
                }
            });

        },
        btn2: function(index, layero){
            layer.closeAll();
        },
        cancel: function(layero,index){
            layer.closeAll();
        }

    });
}

layui.use('upload', function(){
    var upload = layui.upload;
    //执行实例
    var uploadInst = upload.render({
        elem: '#test1' //绑定元素
        ,url: '/editormd-image-file/upload' //上传接口
        ,done: function(res){
            //上传完毕回调
            layer.msg('更新成功！', {icon: 1});
            window.location.reload();
        }
        ,error: function(){
            //请求异常回调
            layer.msg('更新失败！', {icon:5});
        }
        ,acceptMime: 'image/*',
        ext: 'jpg|png|gif|bmp|jpeg' //允许上传的文件类型
        ,size: 300 //最大允许上传的文件大小
    });
});

$('body').tooltip({
    selector: '[data-toggle="tooltip"]'
});

function shareTo(types){
    var title,imageUrl,url,description,keywords;
    title = document.title;
    if(typeof imageUrl == 'undefined'){
        imageUrl = 'http://'+window.location.host+'/user/cainiao/image/greenhand.png';
    } else {
        imageUrl = 'http://'+window.location.host+'/user/cainiao/image/greenhand.png';
    }
    url = document.location.href;
    description = document.querySelector('meta[name="description"]').getAttribute('content');
    keywords = document.querySelector('meta[name="keywords"]').getAttribute('content');
    if(types=='qzone') {
        window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&sharesource=qzone&title=' + title + '&pics=' + imageUrl + '&summary=' + description);
    }
    if (types == 'qq') {
        window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + url + '&sharesource=qzone&title=' + title + '&pics=' + imageUrl + '&summary=' + description + '&desc=' + keywords);
    }
}

const unreadCount = $("#unreadCount").val();
if(unreadCount>0){
    _record = 0;
    var myTitle = document.title;

    function titleBlink() {
        _record++;
        if(_record == 3) { //当变量_record累加到3是，将其赋值为1。相当于无限循环。
            _record = 1;
        }
        if(_record == 1) {
            document.title = '【  】' + myTitle;
        }
        if(_record == 2) {
            document.title = '【'+unreadCount+'条新消息】' + myTitle;
        }
        setTimeout("titleBlink()", 500); //调节时间，单位毫秒。
    }
    titleBlink();
}








