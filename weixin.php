<?php
 
	 require_once "weixin.php";
	 $jssdk = new JSSDK(appId, appSecretecret);
	 $signPackage = $jssdk->GetSignPackage();
	  
	 class Config{ 
		 var $appId; 
		 var $timestamp; 
		 var $nonceStr; 
		 var $signature; 
		 var $url;
	 } 
	  
	 $config = new Config(); 
	  
	 $config -> appId = $signPackage["appId"]; 
	 $config -> timestamp = $signPackage["timestamp"]; 
	 $config -> nonceStr = $signPackage["nonceStr"]; 
	 $config -> signature = $signPackage["signature"];
	 $config -> url = $signPackage["url"]; 
	  
	 echo json_encode($config);
?>