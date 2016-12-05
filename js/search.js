
String.prototype.trim　= function()       
{              
    var t = this.replace(/(^\s*)|(\s*$)/g, "");     
    return t.replace(/(^　*)|(　*$)/g, "");     
}  
function subsearchdataa61926a()
{ 
    if(document.a61926a.INTEXT.value.trim()=="")
    {
        alert("请输入查询关键字！");
        return false;
    }
    if(checkDataa61926a(document.a61926a))
    {
       return true;  
    }
    return false;
}       