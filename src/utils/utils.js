/**
 * 动态计算rem
 */
export const initFontSize = (designWidth, maxWidth) => {
	var doc = document,
			win = window;
	var docEl = doc.documentElement;
	var tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = !maxWidth ? 540 : maxWidth;
		width = width > maxWidth ? maxWidth : width;

		// 直接采用简单的rem换算方法1rem=100px
		var rem = width * 100 / designWidth;

		document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
	};
	refreshRem();

	win.addEventListener('resize', function() {
		clearTimeout(tid); //防止执行两次
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener('pageshow', function(e) {
		if (e.persisted) { // 浏览器后退的时候重新计算
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === 'complete') {
		doc.body.style.fontSize = '16px';
	} else {
		doc.addEventListener('DOMContentLoaded', function(e) {
			doc.body.style.fontSize = '16px';
		}, false);
	}
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) {
    window.localStorage.clear();
    return;
  }
  window.localStorage.removeItem(name);
}