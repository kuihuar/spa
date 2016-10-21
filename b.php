<!doctype html>
<!--
	spa.html
	spa browser document
-->
<html>
<head>
	<!-- ie9+ rendering support for latest standards-->
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>SPA Starter Four</title>
	<!-- stylesheets -->
	<link rel="stylesheet" href="css/spa.css" type="text/css"/>
	<link rel="stylesheet" href="css/spa.shell.css" type="text/css"/>
	<link rel="stylesheet" href="css/spa.chat.css" type="text/css"/>
	<link rel="stylesheet" href="css/spa.avtr.css" type="text/css"/>
	<!-- third-party javascript -->
	<script type="text/javascript" src="socket.io/socket.io.js"></script>
	<script type="text/javascript" src="js/jq/taffydb-2.6.2.js"></script>
	<script type="text/javascript" src="js/jq/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="js/jq/jquery.uriAnchor-1.1.3.js"></script>
	<script type="text/javascript" src="js/jq/jquery.event.gevent-0.1.9.js"></script>
	<script type="text/javascript" src="js/jq/jquery.event.ue-0.3.2.js"></script>
	<!-- our javascript -->
	<script type="text/javascript" src="js/spa.js"></script>
	<script type="text/javascript" src="js/spa.util.js"></script>
	<script type="text/javascript" src="js/spa.data.js"></script>
	<script type="text/javascript" src="js/spa.fake.js"></script>
	<script type="text/javascript" src="js/spa.model.js"></script>
	<script type="text/javascript" src="js/spa.util_b.js"></script>
	<script type="text/javascript" src="js/spa.shell.js"></script>
	<script type="text/javascript" src="js/spa.chat.js"></script>
	<script type="text/javascript" src="js/spa.avtr.js"></script>
	<script type="text/javascript">
		$(function(){ spa.initModule( $('#spa') ); });
	</script>
</head>
<body>
	<div id="spa"></div>
</body>
</html>