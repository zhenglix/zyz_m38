 
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="IE=edge" >
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <title>Aliplayer</title>
  <link rel="stylesheet" href="aliplayer-min.css" />
  <script type="text/javascript" charset="utf-8" src="bplayer.js"></script>
  <script type="text/javascript" charset="utf-8" src="https://player.alicdn.com/aliplayer/presentation/js/aliplayercomponents.min.js"></script>
</head>
<body>
<div class="prism-player" id="player-con"></div>
<script>
  var player = new Aliplayer({
  "id": "player-con",
  "source": "<?php echo($_REQUEST['url']);?>",
  "width": "100%",
  "height": "100%",
  "autoplay": true,
  "isLive": false,
    components: [{
      name: 'MemoryPlayComponent',
      type: AliPlayerComponent.MemoryPlayComponent,
    }]
  }, function (player) {
$('.prism-play-btn').on('click', function(event) {

	$(".prism-controlbar").toggleClass('bar-open');

});});
function endedHandle()
{var newUrl = "";player.loadByUrl(newUrl);}
player.on("ended", endedHandle);
</script>
</body>
</html>
