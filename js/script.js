function initHeaderState() {
    const headerBlock = document.querySelector('.header-block');
    const headerContent = document.querySelector('.header-content');
    const headerNavBtn = document.querySelector('.header-nav__btn');
    const headerSubNav = document.querySelector('.header-sub-nav');
    const headerSubNavCloseBtn = document.querySelector('.header-sub-nav__close-btn');

    if (!headerBlock || !headerNavBtn) return;

    const handleScroll = () => {
        if (window.scrollY > 0 && window.innerWidth > 1024) {
            headerBlock.classList.add('js-active');
        } else {
            headerBlock.classList.remove('js-active');
            headerSubNav.classList.remove('js-active');
        }
    };

	const handleDesktopMenu = () => {
        if (!headerSubNav) return;
        headerSubNav.classList.toggle('js-active');
        document.body.classList.toggle('no-scroll', headerSubNav.classList.contains('js-active'));
    };

    const handleMobileMenu = () => {
        if (!headerContent) return;
        headerContent.classList.toggle('js-active');
		const newHeaderNavBtn = document.querySelector('.header-nav__btn');
		newHeaderNavBtn.classList.toggle('js-open');
        document.body.classList.toggle('no-scroll', headerContent.classList.contains('js-active'));
    };

	if(window.innerWidth > 1024) {
		headerNavBtn.addEventListener('click', handleDesktopMenu);
		headerSubNavCloseBtn.addEventListener('click', handleDesktopMenu);
	} else if(window.innerWidth < 768) {
		headerNavBtn.addEventListener('click', handleMobileMenu);
	}

    window.addEventListener('scroll', handleScroll);

	window.addEventListener('resize', () => {
		if(window.innerWidth > 1024) {
			headerNavBtn.addEventListener('click', handleDesktopMenu);
			headerSubNavCloseBtn.addEventListener('click', handleDesktopMenu);
			headerNavBtn.classList.remove('js-open');
			headerContent.classList.remove('js-active');
		} else {
			headerNavBtn.removeEventListener('click', handleDesktopMenu);
			headerSubNavCloseBtn.removeEventListener('click', handleDesktopMenu);
			headerNavBtn.classList.remove('js-open');
			headerContent.classList.remove('js-active');
		}
	})
}

function initNavigation() {
	const navItems = document.querySelectorAll('.navigation-item');
	const indicator = document.querySelector('.indicator');

	function moveIndicator(element) {
		const offsetTop = element.offsetTop;
		indicator.style.transform = `translateY(${offsetTop}px)`;
	}

	navItems.forEach(item => {
    item.addEventListener('click', e => {
		navItems.forEach(i => i.classList.remove('active'));
		item.classList.add('active');
		moveIndicator(item);
		});
	});

	window.addEventListener('load', () => {
		const activeItem = document.querySelector('.navigation-item.active');
		moveIndicator(activeItem);
	});
}

function initVideoPopup() {
	const overlay = document.querySelector('.overlay');
	const popup = document.querySelector('.popup');
	const openVideoPopupBtn = document.querySelector('.btn-video-play');
	const closeVideoPopupBtn = document.querySelector('.overlay-close-btn');
	const video = document.getElementById('promo-sulanzh');

	function openVideoPopup() {
		overlay.classList.add('fadeIn');
		overlay.classList.remove('fadeOut');
		popup.classList.add('slideInDown');
		popup.classList.remove('slideOutUp');
		video.play();
	}

	function closeVideoPopup() {
		overlay.classList.add('fadeOut');
		overlay.classList.remove('fadeIn');
		popup.classList.remove('slideInDown');
		popup.classList.add('slideOutUp');
		video.pause();
	}
	
	openVideoPopupBtn.addEventListener('click', openVideoPopup);
	closeVideoPopupBtn.addEventListener('click', closeVideoPopup);

	overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeVideoPopup();
        }
    });

    // Закрытие по нажатию на Esc
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && overlay.classList.contains('fadeIn')) {
            closeVideoPopup();
        }
    });
}

function initApp() {
    initHeaderState();
	initNavigation();
	initVideoPopup();
}

window.addEventListener('DOMContentLoaded', initApp);


/* Код на запуск видео и открытие этого видео в popup окне */
// const buttonVideoPopupOpen = document.querySelector('.button-video-popup-open');
// const btnOkPopup = document.querySelector('.btn-ok-popup');
// const btnStopPopup = document.querySelector('.btn-stop-popup');
// const wrapperVideoPopup = document.getElementById('fon-popup');
// const videoPopup = document.querySelector('.why-choose-us__video-popup');
// const popupVideoClose = document.querySelector('.popup-video-close');

// if (buttonVideoPopupOpen && wrapperVideoPopup && btnStopPopup && videoPopup) {
// 	buttonVideoPopupOpen.addEventListener('click', function () {
// 		if (typeof wrapperVideoPopup.play === 'function') {
// 			wrapperVideoPopup.play();
// 		}
// 		btnStopPopup.classList.add('active');
// 		videoPopup.classList.toggle('video-popup-active');
// 	});
// }
// if (btnStopPopup && wrapperVideoPopup && btnOkPopup) {
// 	btnStopPopup.addEventListener('click', function () {
// 		if (typeof wrapperVideoPopup.pause === 'function') {
// 			wrapperVideoPopup.pause();
// 		}
// 		btnOkPopup.classList.toggle('active');
// 		btnStopPopup.classList.toggle('active');
// 	});
// }
// if (btnOkPopup && wrapperVideoPopup && btnStopPopup) {
// 	btnOkPopup.addEventListener('click', function () {
// 		if (typeof wrapperVideoPopup.play === 'function') {
// 			wrapperVideoPopup.play();
// 		}
// 		btnOkPopup.classList.toggle('active');
// 		btnStopPopup.classList.toggle('active');
// 	});
// }
// if (popupVideoClose && wrapperVideoPopup && btnOkPopup && btnStopPopup && videoPopup) {
// 	popupVideoClose.addEventListener('click', function () {
// 		if (typeof wrapperVideoPopup.pause === 'function') {
// 			wrapperVideoPopup.pause();
// 		}
// 		btnOkPopup.classList.remove('active');
// 		btnStopPopup.classList.remove('active');
// 		videoPopup.classList.remove('video-popup-active');
// 	});
// }

/* end */

/* Запуск видео в блоке отделы продаж*/
// const salesOffice = document.querySelector('.sales-office');
// const btnOk = document.querySelector('.btn-ok');
// const btnStop = document.querySelector('.btn-stop');
// const wrapperVideo = document.getElementById('fon');

// if (salesOffice && btnOk && btnStop && wrapperVideo) {
// 	btnOk.addEventListener('click', function () {
// 		wrapperVideo.play();
// 		btnStop.classList.toggle('active');
// 		btnOk.classList.toggle('active');
// 		salesOffice.classList.toggle('left');
// 	});

// 	btnStop.addEventListener('click', function () {
// 		wrapperVideo.pause();
// 		btnOk.classList.toggle('active');
// 		btnStop.classList.toggle('active');
// 		salesOffice.classList.toggle('left');
// 	});
// }

// }
/* end */

/* end */


/* accordion */
// if (document.querySelector('.accordion') && window.innerWidth < 600) {
// 	class ItcAccordion {
// 		constructor(target, config) {
// 			this._el = typeof target === 'string' ? document.querySelector(target) : target;
// 			const defaultConfig = {
// 				alwaysOpen: true,
// 				duration: 350
// 			};
// 			this._config = Object.assign(defaultConfig, config);
// 			this.addEventListener();
// 		}
// 		addEventListener() {
// 			this._el.addEventListener('click', (e) => {
// 				const elHeader = e.target.closest('.accordion__header');
// 				if (!elHeader) {
// 					return;
// 				}
// 				if (!this._config.alwaysOpen) {
// 					const elOpenItem = this._el.querySelector('.accordion__item_show');
// 					if (elOpenItem) {
// 						elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
// 					}
// 				}
// 				this.toggle(elHeader.parentElement);
// 			});
// 		}
// 		show(el) {
// 			const elBody = el.querySelector('.accordion__body');
// 			if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
// 				return;
// 			}
// 			elBody.style.display = 'block';
// 			const height = elBody.offsetHeight;
// 			elBody.style.height = 0;
// 			elBody.style.overflow = 'hidden';
// 			elBody.style.transition = `height ${this._config.duration}ms ease`;
// 			elBody.classList.add('collapsing');
// 			el.classList.add('accordion__item_slidedown');
// 			elBody.offsetHeight;
// 			elBody.style.height = `${height}px`;
// 			window.setTimeout(() => {
// 				elBody.classList.remove('collapsing');
// 				el.classList.remove('accordion__item_slidedown');
// 				elBody.classList.add('collapse');
// 				el.classList.add('accordion__item_show');
// 				elBody.style.display = '';
// 				elBody.style.height = '';
// 				elBody.style.transition = '';
// 				elBody.style.overflow = '';
// 			}, this._config.duration);
// 		}
// 		hide(el) {
// 			const elBody = el.querySelector('.accordion__body');
// 			if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
// 				return;
// 			}
// 			elBody.style.height = `${elBody.offsetHeight}px`;
// 			elBody.offsetHeight;
// 			elBody.style.display = 'block';
// 			elBody.style.height = 0;
// 			elBody.style.overflow = 'hidden';
// 			elBody.style.transition = `height ${this._config.duration}ms ease`;
// 			elBody.classList.remove('collapse');
// 			el.classList.remove('accordion__item_show');
// 			elBody.classList.add('collapsing');
// 			window.setTimeout(() => {
// 				elBody.classList.remove('collapsing');
// 				elBody.classList.add('collapse');
// 				elBody.style.display = '';
// 				elBody.style.height = '';
// 				elBody.style.transition = '';
// 				elBody.style.overflow = '';
// 			}, this._config.duration);
// 		}
// 		toggle(el) {
// 			el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
// 		}
// 	}

// 	new ItcAccordion(document.querySelector('.accordion'), {
// 		alwaysOpen: false
// 	});
// }



/* смена слайдов между секциями */
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const sections = gsap.utils.toArray(".section");
// const figure = document.querySelector(".figure");
// const figureContainer = document.querySelector(".figure-container1");
// const whyChooseUs = document.querySelector(".why-choose-us");
// const header = document.querySelector(".header");
// const homeScreen = document.querySelector(".home-screen");

// let animating = false;
// let currentIndex = 0;

// function gotoSection(index) {
// 	if (animating) return;
// 	animating = true;

// 	// запомним предыдущую секцию (по currentIndex) перед переписыванием
// 	const prevIndex = currentIndex;
// 	const prevSection = sections[prevIndex];

// 	index = gsap.utils.wrap(0, sections.length, index);
// 	currentIndex = index;

// 	const section = sections[index];

// 	// === Старая логика: оставляем управление классом на homeScreen ===
// 	if (homeScreen) {
// 		if (section.classList.contains("why-choose-us")) {
// 			homeScreen.classList.add("hidden-elements");
// 		} else if (section.classList.contains("home-screen")) {
// 			homeScreen.classList.remove("hidden-elements");
// 		}
// 	}

// 	// === Новая логика: ставим/убираем hidden-elements у .why-choose-us
// 	// только когда переходим именно С home-screen -> WHY или ОБРАТНО
// 	if (whyChooseUs && prevSection) {
// 		// если переходим с .home-screen на .why-choose-us — добавляем класс
// 		if (prevSection.classList.contains("home-screen") && section.classList.contains("why-choose-us")) {
// 			whyChooseUs.classList.add("hidden-elements");
// 		}
// 		// если возвращаемся с .why-choose-us на .home-screen — убираем класс
// 		else if (prevSection.classList.contains("why-choose-us") && section.classList.contains("home-screen")) {
// 			whyChooseUs.classList.remove("hidden-elements");
// 		}
// 		// (Опционально) если хотите, чтобы при входе в любую другую секцию класс убирался:
// 		// else {
// 		//     whyChooseUs.classList.remove("hidden-elements");
// 		// }
// 	}

// 	gsap.to(window, {
// 		scrollTo: { y: sections[index], autoKill: false },
// 		duration: 1,
// 		ease: "power2.inOut",
// 		onComplete: () => (animating = false),
// 	});
// }

// ====== Смена слайдов ======
// sections.forEach((section, i) => {

// 	ScrollTrigger.create({
// 		trigger: section,
// 		start: "bottom bottom",
// 		onEnter: () => {
// 			if (!animating) gotoSection(i + 1);
// 		}
// 	});

// 	ScrollTrigger.create({
// 		trigger: section,
// 		start: "top bottom",
// 		onEnterBack: () => {
// 			if (!animating) gotoSection(i);
// 		}
// 	});
// });

// ScrollTrigger.matchMedia({
// 	// ====== Версия для ширины > 768px ======
// 	"(min-width: 769px)": function () {
// 		// Плавное изменение figure
// 		gsap.fromTo(figure,
// 			{ height: "59.75rem" },
// 			{
// 				height: "16.125rem",
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: ".why-choose-us",
// 					start: "top bottom",
// 					end: "top top",
// 					scrub: true
// 				}
// 			}
// 		);

// 		// Плавное изменение figure-container1
// 		gsap.fromTo(figureContainer,
// 			{ bottom: "69.4375rem" },
// 			{
// 				ease: "power2.out",
// 				bottom: "0rem",
// 				scrollTrigger: {
// 					trigger: ".why-choose-us",
// 					start: "top bottom",
// 					end: "top top",
// 					scrub: true
// 				}
// 			}
// 		);
// 	},

// 	// ====== Версия для ширины < 500px ======
// 	"(max-width: 768px)": function () {
// 		// Здесь можно сделать другую анимацию или просто выставить финальные стили

// 		gsap.fromTo(figure,
// 			{ height: "900px" },   // начальная высота
// 			{
// 				height: "143px",     // конечная высота
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: ".why-choose-us",
// 					start: "top bottom",
// 					end: "top top",
// 					scrub: true
// 				}
// 			}
// 		);
// 		// Анимация для figureContainer
// 		gsap.fromTo(figureContainer,
// 			{ bottom: "20rem" },   // начальное значение
// 			{
// 				bottom: "0rem",      // конечное значение
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: ".why-choose-us",
// 					start: "top bottom",
// 					end: "top top",
// 					scrub: true
// 				}
// 			}
// 		);
// 	}
// });


// ScrollTrigger.matchMedia({

// 	"(min-width: 993px)": function () {

// 		/*  */
// 		gsap.fromTo(".sales-office__image-one > .image > img",
// 			{
// 				width: "130%",
// 				height: "130%"
// 			},
// 			{
// 				width: "100%",
// 				height: "100%",
// 				ease: "power2.in",
// 				scrollTrigger: {
// 					trigger: ".sales-office",
// 					start: "top center",
// 					end: "center center",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office__image-one > .image > img",
// 			{
// 				width: "100%",
// 				height: "100%"
// 			},
// 			{
// 				width: "130%",
// 				height: "130%",
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: ".sales-office",
// 					start: "center center",
// 					end: "bottom top",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office__video .video-block__video",
// 			{
// 				width: "140%",
// 				height: "140%"
// 			},
// 			{
// 				width: "100%",
// 				height: "100%",
// 				duration: 5,
// 				ease: "power2.in",
// 				scrollTrigger: {
// 					trigger: ".sales-office",
// 					start: "top center",
// 					end: "center center",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office__video .video-block__video",
// 			{
// 				width: "100%",
// 				height: "100%"
// 			},
// 			{
// 				width: "140%",
// 				height: "140%",
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: ".sales-office",
// 					start: "center center",
// 					end: "bottom top",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office__image-two > .image > img",
// 			{
// 				width: "120%",
// 				height: "120%"
// 			},
// 			{
// 				width: "100%",
// 				height: "100%",
// 				ease: "power2.in",
// 				scrollTrigger: {
// 					trigger: ".sales-office",
// 					start: "top center",
// 					end: "center center",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office__image-two > .image > img",
// 			{
// 				width: "100%",
// 				height: "100%"
// 			},
// 			{
// 				width: "120%",
// 				height: "120%",
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: ".sales-office",
// 					start: "center center",
// 					end: "bottom top",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office__image-three > .image > img",
// 			{
// 				width: "110%",
// 				height: "110%",
// 				left: "-5%"
// 			},
// 			{
// 				width: "100%",
// 				height: "100%",
// 				left: "0",
// 				ease: "power2.in",
// 				scrollTrigger: {
// 					trigger: ".sales-office-sec",
// 					start: "top center",
// 					end: "center center",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office__image-three > .image > img",
// 			{
// 				width: "100%",
// 				height: "100%",
// 				left: "0"
// 			},
// 			{
// 				width: "110%",
// 				height: "110%",
// 				left: "-5%",
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: ".sales-office-sec",
// 					start: "center center",
// 					end: "bottom top",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office-contact-block__image .image img",
// 			{
// 				width: "120%",
// 				height: "120%"
// 			},
// 			{
// 				width: "100%",
// 				height: "100%",
// 				ease: "power2.in",
// 				scrollTrigger: {
// 					trigger: ".sales-office-sec",
// 					start: "top center",
// 					end: "center center",
// 					scrub: true,
// 				}
// 			}
// 		);

// 		gsap.fromTo(".sales-office-contact-block__image .image img",
// 			{
// 				width: "100%",
// 				height: "100%"
// 			},
// 			{
// 				width: "120%",
// 				height: "120%",
// 				ease: "power2.out",
// 				scrollTrigger: {
// 					trigger: ".sales-office-sec",
// 					start: "center center",
// 					end: "bottom top",
// 					scrub: true,
// 				}
// 			}
// 		);

// 	}
// });

/* function initAccordionScroll() {
	const accordionItems = gsap.utils.toArray('.why-choose-us__advantage-two');
	const baseFigureHeight = "16.0625rem"; // 👈 базовая высота figure-container

	let currentIndex = 0;

	accordionItems.forEach((item, i) => {
		const body = item.querySelector('.advantage-two-content .advantage-two-content__text');
		const figure = item.querySelector('.figure-container');

		if (i !== 0) {
			item.classList.remove('show');
			gsap.set(body, {
				height: 0,
				opacity: 0,
				visibility: 'hidden',
				overflow: 'hidden'
			});
			gsap.set(figure, {
				height: baseFigureHeight,
				overflow: 'hidden',
				opacity: 1,
				visibility: 'visible'
			});
		} else {
			item.classList.add('show');
			gsap.set(body, {
				height: 'auto',
				opacity: 1,
				visibility: 'visible',
				overflow: 'hidden'
			});
			gsap.set(figure, {
				height: 'auto',
				overflow: 'hidden',
				opacity: 1,
				visibility: 'visible'
			});
		}
	});

	let isAnimating = false;

	ScrollTrigger.create({
		trigger: '.why-choose-us',
		start: 'top top',
		end: () => `+=${accordionItems.length * 100}%`,
		scrub: true,
		pin: true,
		pinSpacing: true,
		anticipatePin: 1,
		invalidateOnRefresh: true,

		onUpdate: (self) => {
			if (isAnimating) return;

			const progress = self.progress;
			const sectionLength = 1 / accordionItems.length;
			const index = Math.min(
				accordionItems.length - 1,
				Math.floor(progress / sectionLength)
			);

			if (index !== currentIndex) {
				const prev = currentIndex;
				currentIndex = index;

				const prevItem = accordionItems[prev];
				const prevBody = prevItem.querySelector('.advantage-two-content .advantage-two-content__text');
				const prevFigure = prevItem.querySelector('.figure-container');

				const currentItem = accordionItems[index];
				const currentBody = currentItem.querySelector('.advantage-two-content .advantage-two-content__text');
				const currentFigure = currentItem.querySelector('.figure-container');

				isAnimating = true;

				// закрываем старые
				gsap.to(prevBody, {
					height: 0,
					opacity: 0,
					visibility: 'hidden',
					duration: 0.6,
					ease: 'power2.inOut'
				});
				gsap.to(prevFigure, {
					height: baseFigureHeight,
					duration: 0.6,
					ease: 'power2.inOut',
					onComplete: () => {
						prevItem.classList.remove('show');

						// открываем новые
						currentItem.classList.add('show');

						// TEXT
						gsap.set(currentBody, { height: 'auto', opacity: 1, visibility: 'visible' });
						const bodyHeight = currentBody.offsetHeight;

						// FIGURE
						gsap.set(currentFigure, { height: 'auto' });
						const figureHeight = currentFigure.offsetHeight;

						// анимация FIGURE: base → auto
						gsap.fromTo(currentFigure,
							{ height: baseFigureHeight },
							{
								height: figureHeight,
								duration: 0.5,
								ease: 'power2.inOut',
								onComplete: () => gsap.set(currentFigure, { height: 'auto' })
							}
						);

						// анимация TEXT: 0 → auto
						gsap.fromTo(currentBody,
							{ height: 0, opacity: 0, visibility: 'hidden' },
							{
								height: bodyHeight,
								opacity: 1,
								visibility: 'visible',
								duration: 0.7,
								ease: 'power2.inOut',
								onComplete: () => {
									gsap.set(currentBody, { height: 'auto' });
									isAnimating = false;
								}
							}
						);
					}
				});
			}
		}
	});

	ScrollTrigger.refresh();
}

initAccordionScroll(); */






/* боковая панель навигации */
// const navIndicator = document.querySelector(".nav-indicator");
// const navItems = document.querySelectorAll(".navigation-item");

// gsap.utils.toArray("section[id]").forEach(section => {
// 	ScrollTrigger.create({
// 		trigger: section,
// 		start: "top center",
// 		end: "bottom center",
// 		onEnter: () => setActive(section.id),
// 		onEnterBack: () => setActive(section.id)
// 	});
// });

// function setActive(id) {
// 	navItems.forEach(el => el.classList.remove("active"));
// 	const link = document.querySelector(`.navigation-item a[href="#${id}"]`);
// 	const activeItem = link?.closest(".navigation-item");

// 	if (activeItem) {
// 		activeItem.classList.add("active");

// 		const parent = activeItem.closest(".navigation-links");
// 		const itemRect = activeItem.getBoundingClientRect();
// 		const parentRect = parent.getBoundingClientRect();

// 		const offset = itemRect.top - parentRect.top;
// 		const indicatorHeight = itemRect.width;
// 		const indicatorWidth = itemRect.height;

// 		gsap.to(navIndicator, {
// 			duration: 0.8,
// 			x: -offset,
// 			width: indicatorWidth,
// 			height: indicatorHeight,
// 			ease: "power2.out"
// 		});
// 	}
// }

// setActive(document.querySelector(".navigation-item.active a").getAttribute("href").substring(1));


