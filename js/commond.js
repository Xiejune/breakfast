console.log('檔案讀取')
// 點擊漢堡清單
const btn_hamburger = document.querySelector('#btn-hamburger')
// 清單
const menu = document.querySelector('#menu')
btn_hamburger.onclick = () => {
  if (btn_hamburger.firstElementChild.className.includes('fa-list-ul')) {
    // 展開清單
    menu.classList.add('expand')
    // 轉換 icon (關閉)
    btn_hamburger.firstElementChild.classList.replace('fa-list-ul', 'fa-xmark')
    // 增加轉場特效
    if (btn_hamburger.firstElementChild.className.includes('animate__rotateOut_new')) {
      btn_hamburger.firstElementChild.classList.replace('animate__rotateOut_new', 'animate__rotateIn')
    } else {
      btn_hamburger.firstElementChild.classList.add('animate__rotateIn')
    }
  } else {
    // 關閉清單
    menu.classList.remove('expand')
    // 轉換 icon (清單)
    btn_hamburger.firstElementChild.classList.replace('fa-xmark', 'fa-list-ul')
    // 增加轉場特效
    btn_hamburger.firstElementChild.classList.replace('animate__rotateIn', 'animate__rotateOut_new')
  }
}

// 8.只要導覽列在最頂端才會變顏色(透明度)
const navbar = document.querySelector('#navbar')
document.onscroll = () => {
  // console.log(window.scrollY)
  // 螢幕尺寸大於 1200 才會作用
  if (window.innerWidth >= 1200) {
    // 卷軸不在最頂端
    if (window.scrollY !== 0) {
      navbar.classList.add('change-bg')
    } else {
      navbar.classList.remove('change-bg')
    }
  } else {
    navbar.classList.remove('change-bg')
  }
}

// 抓取 "關於" 的按鈕
const btn_about = document.querySelector('#about .button button')
// 抓取按鈕的線
const span_about = document.querySelectorAll('#about .col .button span')
// 滑鼠移入按鈕
btn_about.onmouseenter = () => {
  span_about[0].classList.replace('animate__slideOutLeft', 'animate__slideInLeft')
  span_about[1].classList.replace('animate__slideOutRight', 'animate__slideInRight')
}

// 滑鼠移開按鈕
btn_about.onmouseleave = () => {
  span_about[0].classList.replace('animate__slideInLeft', 'animate__slideOutLeft')
  span_about[1].classList.replace('animate__slideInRight', 'animate__slideOutRight')
}

// 抓取 "最新消息: 輪播圖2" 的按鈕
const btn_swiper2 = document.querySelector('#btn-swiper2')
// 抓取按鈕的線
const span_swiper2 = document.querySelectorAll('#swiper2 .button span')
// 滑鼠移入按鈕
btn_swiper2.onmouseenter = () => {
  span_swiper2[0].classList.replace('animate__slideOutLeft', 'animate__slideInLeft')
  span_swiper2[1].classList.replace('animate__slideOutRight', 'animate__slideInRight')
}

// 滑鼠移開按鈕
btn_swiper2.onmouseleave = () => {
  span_swiper2[0].classList.replace('animate__slideInLeft', 'animate__slideOutLeft')
  span_swiper2[1].classList.replace('animate__slideInRight', 'animate__slideOutRight')
}

// 抓取 "介紹" 的按鈕
const btn_main = document.querySelector('#btn-main')
// 抓取按鈕的線
const span_main = document.querySelectorAll('#main .button span')
// 滑鼠移入按鈕
btn_main.onmouseenter = () => {
  span_main[0].classList.replace('animate__slideOutLeft', 'animate__slideInLeft')
  span_main[1].classList.replace('animate__slideOutRight', 'animate__slideInRight')
}

// 滑鼠移開按鈕
btn_main.onmouseleave = () => {
  span_main[0].classList.replace('animate__slideInLeft', 'animate__slideOutLeft')
  span_main[1].classList.replace('animate__slideInRight', 'animate__slideOutRight')
}