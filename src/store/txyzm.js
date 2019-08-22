var QcloudSms = require("qcloudsms_js");
var appid = 1400246462;  
var appkey = "0fdea44966c056df06dec704b93b701f";
var phoneNumbers = ["15012745523"];
var templateId = 401831;  
var smsSign = "keep毕设验证";  
var qcloudsms = QcloudSms(appid, appkey);
var ssender = qcloudsms.SmsSingleSender();
tempyzm=Math.floor(Math.random()*10000);
console.log(tempyzm)
var params = [tempyzm,"2"];
ssender.sendWithParam(86, phoneNumbers[0], templateId,
params, smsSign, "", "", callback); 
function callback(err, res, resData) {
  if (err) {
      console.log("err: ", err);
  } else {
      console.log("request data: ", res.req);
      console.log("response data: ", resData);
  }
}


