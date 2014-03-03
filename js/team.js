$(function () {
	setInterval(function () {
		$("#team li.member").each(function () {
			if(Math.random() > .8) {
				var name = $(this).attr("id");
				var $img = $(this).find("img");
				var curSrc = $img.attr("src");
				var newSrc;
				if(curSrc.match("/a/")){
					newSrc = curSrc.replace("/a/", "/b/");
				}else{
					newSrc = curSrc.replace("/b/", "/a/");
				}
				$img.attr("src", newSrc);
			}
		})
	}, 1000);
});