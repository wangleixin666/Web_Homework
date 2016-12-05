  
news_searcha61926a = new vsb_news_search();
news_searcha61926a.isShowCode=false;
news_searcha61926a.tooltipid = 'tooltipa61926a';
news_searcha61926a.apptag = 'intextspana61926a';
news_searcha61926a.frametag = 'intextframea61926a';
news_search_entrya61926a = new vsb_news_search_entry();
news_search_entrya61926a.formname = "a61926a";
news_search_entrya61926a.news_search_obj = news_searcha61926a; 
news_search_entrya61926a.querytxtsize = 155
news_search_entrya61926a.yzmts ="您的查询过于频繁，请输入验证码后继续查询";
news_search_entrya61926a.qdstyle ="";
news_search_entrya61926a.qdname = "确定";
news_search_entrya61926a.qxstyle = "";
news_search_entrya61926a.qxname = "取消";    
function checkDataa61926a(formname)
{    
    return news_search_entrya61926a.checkdata(formname)   
}