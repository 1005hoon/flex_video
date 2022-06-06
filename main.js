const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const btnClose = aside.querySelector(".btn-close");

articles.forEach((article, index) => {
	article.addEventListener("mouseenter", (e) => {
		e.currentTarget.querySelector("video").play();
	});

	article.addEventListener("mouseleave", (e) => {
		e.currentTarget.querySelector("video").pause();
	});

	article.addEventListener("click", (e) => {
		const title = e.currentTarget.querySelector("h2").innerText;
		const text = e.currentTarget.querySelector("p").innerText;
		const videoSrc = e.currentTarget.querySelector("video").getAttribute("src");

		aside.querySelector("h2").innerHTML = title;
		aside.querySelector("p").innerHTML = text;
		aside.querySelector("video").setAttribute("src", videoSrc);
		aside.classList.add("on");
	});

	btnClose.addEventListener("click", (e) => {
		aside.classList.remove("on");
	});
});
