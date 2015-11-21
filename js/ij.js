var ljq = document.createElement("script");
ljq.type = "text/javascript";
ljq.src = "http://code.jquery.com/jquery-2.1.4.min.js";
document.getElementsByTagName('head').item(0).appendChild(ljq);

setTimeout(function(){
	//$(document).ready(function(){
		console.log(window.location.href);
		show_info();

		if(at_home())
		{
			var current_time = new Date();
			if(current_time.getHours() > 6)
			{
				click_dsc();
			}
			else
			{
				setTimeout(function(){
					click_dsc();
				}, 1000*60*60*7);
			}
			
		}
		
		if(at_dsc())
		{
			if(have_hot_class())
			{
				click_joke();
				setTimeout(function(){
					if(at_joke())
					{
						$($($(".WB_feed_handle")[0]).find("li")[1]).find("a").children("span").click();
						setTimeout(function(){
							$(".WB_publish .W_btn_a")[0].click();
						}, randomInt(1000*6, 1000*9));
					}

					setTimeout(function(){
								window.location.href = "weibo.com";	
					}, randomInt(1000*60*60*2, 1000*60*60*4));

				}, randomInt(1000*6, 1000*9));
			}
			
		}
	//});
}, randomInt(1000*6, 1000*9));

function at_home()
{
	if($("#v6_pl_content_publishertop").length > 0)
	{
		return true;
	}
	return false;
}

function at_dsc()
{
	if($(".DSC_header").length > 0)
	{
		return true;
	}
	return false;
}

function at_joke()
{
	if($(".DSC_navblock .li_item").length > 19)
	{
		return true;
	}
	return false;
}

function have_hot_class()
{
	if($("#Pl_Discover_TextList__6").length > 0)
	{
		return true;
	}
	return false;
}

function show_info()
{
	var html = "";
	html = '<div id="plc_info">';

	html += '<p>';
	html += 'location.href：' + window.location.href;
	html += '</p>';

	html += '<p>';
	html += '用户名：';
	var user_name = $(".gn_name .S_txt1").text();
	html += user_name;
	html += '</p>';

	html += '</div>';
	html += '<p>';
	html += '位于：';
	if(at_home())
	{
		html += "首页";
	}
	if(at_dsc())
	{
		html += "发现";
	}
	html += '</p>';

	$("#plc_frame").before(html);
}

function click_dsc()
{
	$(".W_ficon.ficon_found.S_ficon").click();
}

function click_joke()
{
	$(".tlink.S_txt1")[19].click();
}

function randomInt(l, u)
{
	return Math.floor(Math.random()*(u - l + 1) + l);
}
