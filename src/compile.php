<?php
// compile order:
$files = [
    '_AVAYA_HTML_.html',
    'libs/xmlToJSON.js',
    'libs/AvayaClientServices.min.js',
    'avayaGlobal.js',
    'links.js',
    'webChatConfig.js',
    'webChatLogon.js',
    'webChatUI.js',
    'webChatSocket.js',
    'estimatedWaitTime.js',
    'webChat.js',
    'oceanaCoreData.js',
    'customerJourneyCommon.js',
];
$stringize = ['_AVAYA_HTML_.html'];
$str = '';
$lines = 0;
$here = __FILE__;
chdir(str_replace('compile.php', '', $here));
foreach($files as $i=>$file){
    $str .= '/* ---- File (' . ($i+1) . '): ' . $file . '; compiled ' . date('Y-m-d H:i:s') . ' by /src/compile.php ---- */' . "\n";
    $a = file($file);
    $lines += count($a);
	if(in_array($file, $stringize)){
		$var = explode('.', $file);
		$var = $var[0];
		$str .= 'var '. $var . ' = ' . "\n";
		foreach($a as $n => $line){
			$apos = false;
			$line = str_replace("\n" , '', $line);
			$line = str_replace("\r" , '', $line);
			for($i = 0; $i < strlen($line); $i++){
				if(!$apos && !preg_match('/\s/', $line{$i})){
					$str .= '\'';
					$apos = true;
				}
				$str .= $line{$i};
			}
			if(!$apos)$str .= '\'';
			$str .= ($n === count($a) - 1 ? '\';' : '\' + ') . "\n";
		}
	}else{
		$str .= implode('', $a);
	}
    $str .= "\n\n";


}
ob_start();
if(false){ ?><script><?php } ?>

// append the HTML to to document body
$(document).ready(function(){
    $('body').append(_AVAYA_HTML_);
});
<?php if(false){ ?></script><?php }
$end = ob_get_contents();
ob_end_clean();


$start = '/* Presidio concatenated file sfullman@presidio.com.  File manifest: ' . "\n    ";
$start .= implode("\n    ", $files);
$start .= "\n" . '*/' . "\n";

$str = $start . $str . $end;
$fp = fopen('../vendor/presidio-avaya/chat-main-1.0.js', 'w');
fwrite($fp, $str);
fclose($fp);
print("\nFile write completed!");



