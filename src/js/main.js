'use strict';

const menuDrawer = {
	open: document.getElementById('MenuOpen'),
	close: document.getElementById('MenuClose'),
	wrapper: document.getElementById('Menu'),
	openEl: openEl,
	closeEl: closeEl
};

const themeMode = {
	btn: document.querySelector('.modes'),
	wrapper: document.querySelector('body'),
	changeMode: changeMode
};

function changeMode() {
	const wrapper = this.wrapper;
	this.btn.addEventListener('click', function() {
		wrapper.classList.toggle('dark_mode');
	});
};

function openEl() {
	const wrapper = this.wrapper;
	this.open.addEventListener('click', function() {
		wrapper.classList.add('active');
	});
};

function closeEl() {
	const wrapper = this.wrapper;
	this.close.addEventListener('click', function() {
		wrapper.classList.remove('active');
	});
}

function init() {
	menuDrawer.openEl();
	menuDrawer.closeEl();
	themeMode.changeMode();
};

init();