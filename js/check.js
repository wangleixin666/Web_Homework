
    function checkInput(sef,n){
        if(n==0){
            if(sef.value=='请输入关键字'){
                sef.value = '';
            }
        }else{
            if(sef.value==''){
                sef.value = '请输入关键字';
            }
        }
    }
