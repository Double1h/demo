$(function(){
	var valuText;
      // 文本输入框默认值的清空和填满
      $('input[type="text"]').focus(function(event) {      	
      	valuText=$(this).val();
      	$(this).val("");
      });
      $('input[type="text"]').blur(function(event){
            if($(this).val()===''){
            	$(this).val(valuText);
            }
      });
      // 表单验证
      // 必填验证// 字数验证 //是否为数字验证
      var requried_0=$('.receivingInformation  .requried_0');
      var requried_1=$('.receivingInformation  .requried_1');
      var requriedText= $('.receivingInformation .requried');
      //函数用于验证区号及固定电话
         function test_requried_1(){
                        if(isNaN(requried_1.eq(0).val())||isNaN(requried_1.eq(1).val())){
                              alert("区号或电话号码必须为数字");
                              return false;
                        }else{
                              if(requried_1.eq(0).val().length!=4&&requried_1.eq(0).val().length!=5){
                                    alert('请输入正确的区号');
                                    return false;
                              }
                              if(requried_1.eq(1).val().length!=7){
                                    alert('请输入正确的电话号码');
                                    return false;
                              }
                        }
                        return true;
                  
        }
        // test_requried_1（）函数结束
        // 确认收货信息表单的验证
      $('.submitBtn').click(function(event) {
           if(requriedText.eq(0).val()==='最多输入26个汉字'){
                 alert('详细地址不能为空');
                 return false;
           }else if(requriedText.eq(0).val().length>52){
            alert('详细地址不能超过26个汉字');
            return false;
           }else if(requriedText.eq(1).val()==='最多10个汉字'){
            alert('收货人不能为空');
            return false;
           }else if(requriedText.eq(1).val().length>20){
            alert('收货人不得超过10个汉字');
            return false;
           }
        if(requried_0.val()==='如18826277348'){
                  if(requried_1.eq(0).val()==='区号'||requried_1.eq(1).val()==='电话号码'){
                              alert('手机或固定电话不能为空');
                              return false;
                        }
                  var flag=test_requried_1();
                  if(flag===false){
                      return false;
                  }
      }else{
                 if(isNaN(requried_0.val())){
                          alert("手机必须为数字");
                          return false;
                 }else{
                  if(requried_0.val().length!=11){
                        alert('请正确输入手机号');
                        return false;             
                  }
                  var flag=test_requried_1();
                  if(flag===false){
                      return false;
                  }
                 }   
           } 

           alert('收货地址已保存');
           return true;                                          
      });
      // 发票信息表单验证
      var invoiceText=$('.invoiceInformation span input');
      $('.invoiceInformation .saveBtn').click(function(event) {
            $(".invoiceInformation input[type='checkbox']").is(':checked')
            if(!$(".invoiceInformation input[type='checkbox']").is(':checked')){
                  $(".invoiceInformation input[type='checkbox']")[0].checked = true;
            }
             if(invoiceText.val()=='阿斯顿'){
                  alert('请输入正确信息');
                  return false;
             }
             alert('发票信息保存');
             return true;
      });
      
});