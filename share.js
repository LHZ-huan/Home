var getWeixincofig = require("./getconfig.js");
getWeixincofig(shareweixin);
 
 
function shareweixin(data) {
 
 var data = JSON.parse(data);
 console.log(data);
 
 window.wx.config({
	 debug:true,
	 appId: data.appId,
	 timestamp: data.timestamp,
	 nonceStr: data.nonceStr,
	 signature: data.signature,
	 jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage']
 });
 
 wxShare();
}
 
function wxShare() {
 //检测api是否生效
 wx.ready(function() {
	 wx.checkJsApi({
	 jsApiList: ['getNetworkType','previewImage' ],
		 success: function(res) {
		 console.log(JSON.stringify(res));
	 }
	 });
	 
 });
}