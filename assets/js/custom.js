$(function() {
    //for test
    init();
    function init() {
		getUrlVars();
    }
	function getUrlVars(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('#');
          for(var i = 0; i < hashes.length; i++)
          {
              hash = hashes[i].split('=');
              vars.push(hash[0]);
              vars[hash[0]] = hash[1];
          }
        return vars;
    }
    var pagename = '';
    if ($(location).attr('pathname').match(/[^\/]+$/) != null) {
    if ($(location).attr('pathname').match(/[^\/]+$/).length > 0) {
        pagename = $(location).attr('pathname').match(/[^\/]+$/)[0].toLowerCase();
        console.log(pagename);
    }}
    //login
    $("#loginBtn").on("click", function() {
        const chkuserAccount = $("#userName").val();
        if(chkuserAccount=="persona"){
            window.location.href="../forms/department-ta-apply.html";
        }else if(chkuserAccount=="admin"){
            window.location.href="../tables/department-ta-apply-cal.html";
        }
        else{
            showSwal('check-login-error');
        }
    });
    //
    var usertype = getUrlVars()["usertype"];
    switch (usertype){
        case 'dept':
            $("li[data-row='menu-ta-apply'").show();
            $("li[data-row='menu-ta-stat'").hide();
            $("li[data-row='menu-ta-apply-list'").hide();
            $("li[data-row='menu-ta-apply-review'").show();
            $("li[data-row='menu-ta-apply-result'").show();
        break;
        case 'admin':
            $("li[data-row='menu-ta-apply'").hide();
            $("li[data-row='menu-ta-stat'").show();
            $("li[data-row='menu-ta-apply-list'").show();
            $("li[data-row='menu-ta-apply-review'").hide();
            $("li[data-row='menu-ta-apply-result'").hide();
            $("li[data-row='menu-manage'").show();
            $("li[data-row='menu-manage-auth'").show();
            $("li[data-row='menu-manage-error'").show();
        break;
    }
    if(pagename == 'department-ta-apply.html' || pagename == 'department-ta-apply-preview.html' || pagename == 'department-ta-apply-result.html'){
        $("li[data-row='menu-ta-apply'").show();
        $("li[data-row='menu-ta-stat'").hide();
        $("li[data-row='menu-ta-apply-list'").hide();
        $("li[data-row='menu-ta-apply-review'").show();
        $("li[data-row='menu-ta-apply-result'").show();
        $("li[data-row='menu-manage'").hide();
        $("li[data-row='menu-manage-auth'").hide();
        $("li[data-row='menu-manage-error'").hide();
        console.log("dept");
    }
    if(pagename == 'department-ta-apply-cal.html' || pagename == 'ta-apply-chart.html'){
        $("li[data-row='menu-ta-apply'").hide();
        $("li[data-row='menu-ta-stat'").show();
        $("li[data-row='menu-ta-apply-list'").show();
        $("li[data-row='menu-ta-apply-review'").hide();
        $("li[data-row='menu-ta-apply-result'").hide();
        $("li[data-row='menu-manage'").show();
        $("li[data-row='menu-manage-auth'").show();
        $("li[data-row='menu-manage-error'").show();
        console.log("admin");
    }
    //ta-apply
    $("#search-course").on("click", function() {
        const chkcoursenum = $("#search-coursenum").val();
        if(chkcoursenum=="102 83320"){
            $("#apply-form-group").css("display","block");
            $("input[data-row='checknewcourse-y']").prop("checked",true);
            $("input[data-row='newcourse-y']").show();
            $("input[data-row='newcourse-y-outside']").show();
            $("input[data-row='newcourse-n']").hide();
            $("input[data-row='checkclass-n']").prop("checked",true);
            $("input[data-row='class-y']").hide();
            $("input[data-row='class-n']").show();
            $("input[data-row='checkemi-n']").prop("checked",true);
        }else{
            showSwal('check-course-error');
        }
    });
    $("#ta-apply-submit").on("click", function() {
        window.location.href="../tables/department-ta-apply-preview.html";
    });
    //test-data
    $("input[data-row='newcourse-y']").hide();
    $("input[data-row='newcourse-y-outside']").hide();
    $("input[data-row='newcourse-n']").hide();
    $("input[data-row='checknewcourse-y']").on("click", function() {
        $("input[data-row='checknewcourse-n']").prop("checked",false);
        $(this).attr("checked",true);
        $("input[data-row='newcourse-y']").show();
        $("input[data-row='newcourse-y-outside']").show();
        $("input[data-row='newcourse-n']").hide();
    });
    $("input[data-row='checknewcourse-n']").on("click", function() {
        $("input[data-row='checknewcourse-y']").prop("checked",false);
        $(this).attr("checked",true);
        $("input[data-row='newcourse-y']").hide();
        $("input[data-row='newcourse-y-outside']").hide();
        $("input[data-row='newcourse-n']").show();
    });

    $("input[data-row='class-y']").hide();
    $("input[data-row='class-n']").hide();
    $("input[data-row='checkclass-y']").on("click", function() {
        $("input[data-row='checkclass-n']").prop("checked",false);
        $(this).attr("checked",true);
        $("input[data-row='class-y']").show();
        $("input[data-row='class-n']").hide();
    });
    $("input[data-row='checkclass-n']").on("click", function() {
        $("input[data-row='checkclass-y']").prop("checked",false);
        $(this).attr("checked",true);
        $("input[data-row='class-y']").hide();
        $("input[data-row='class-n']").show();
    });

    $("input[data-row='checkemi-y']").on("click", function() {
        $("input[data-row='checkemi-n']").prop("checked",false);
        $(this).attr("checked",true);
    });
    $("input[data-row='checkemi-n']").on("click", function() {
        $("input[data-row='checkemi-y']").prop("checked",false);
        $(this).attr("checked",true);
    });

});