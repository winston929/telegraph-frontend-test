const Utils = require('./utils');
const dateFormatter = require('./date-formatter');
const commentsFactory = require('./comments-factory');
const moreStoriesFactory = require('./more-stories-factory');

const init = async () => {
	if (new Utils().isHomePage() || !window.articleData.article) {
		return;
	}

	const { title, standfirst, date, body, image } = window.articleData.article.post;

	const titleElem = document.getElementById('title');
	if (titleElem) {
		titleElem.innerHTML = title;
	}

	const descriptionElem = document.getElementById('description');
	if (descriptionElem) {
		descriptionElem.innerHTML = standfirst;
	}

	const dateElem = document.getElementById('date');
	if (dateElem) {
		dateElem.innerHTML = dateFormatter(date, true);
	}

	const articleBodyElem = document.getElementById('article-body');
	if (articleBodyElem) {
		articleBodyElem.innerHTML = body;
	}

	const aricleImgElem = document.querySelectorAll('.article-img');
	if (aricleImgElem) {
		for (const elem of [...aricleImgElem]) {
			if (elem) {
				elem.src = image;
			}
		}
	}

	const articleCateory = window.articleData.article.post.category;
	moreStoriesFactory.init(articleCateory);

	await commentsFactory.loadCommentsData();
	commentsFactory.init(window.articleData.comments);
};

module.exports = {
	init,
};
