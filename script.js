var rect = document.getElementsByTagName('rect');
console.log(rect);

var menu = document.getElementsByClassName('main-menu__second-lvl');
console.log(menu);

for (var i = 0; i < rect.length; i++) {
	rect[i].onclick = f1;
}

function f1() {
	var el = this.nextElementSibling.classList;
	if (el.contains('disclosure-list__arrow')) {
		el.remove('disclosure-list__arrow');
		el.add('disclosure-list__arrow-out');
		menu[0].style.display = 'none';
	} else if (el.contains('disclosure-list__arrow-out')) {
		el.remove('disclosure-list__arrow-out');
		el.add('disclosure-list__arrow');
		menu[0].style.display = 'block';
	} else {
		el.add('disclosure-list__arrow');
		menu[0].style.display = 'block';
	}
}

var mobMenu = document.getElementById('menu-icon-id');
mobMenu.onclick = f2;

var mobMenuClose = document.getElementById('main-menu_mob-cross-id');
console.log(this);
mobMenuClose.onclick = f3;

function f2() {
	var a = document.getElementById('main-menu_mob-id');

	a.style.display = 'block';
}

function f3() {
	var a = document.getElementById('main-menu_mob-id');
	console.log(a);
	a.style.display = 'none';
}

var videoWrap = document.getElementsByClassName('content-middle__video');
console.log(videoWrap);

// var videoIframe = document.getElementsByClassName('content-middle__youtube');

for (var i = 0; i < videoWrap.length; i++) {
	videoWrap[i].onclick = hidePoster;
}

function hidePoster() {
	var el = this.classList;
	videoWrap[i].style.display = 'none';
}
