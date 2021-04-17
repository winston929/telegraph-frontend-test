const dateFormatter = require('./date-formatter');

let currentSortType;

const sortByNewest = (commentsArr) => {
	return [...commentsArr].sort((a, b) => new Date(b.date) - new Date(a.date));
};

const sortByLikes = (commentsArr) => {
	return [...commentsArr].sort((a, b) => b.likes - a.likes);
};

const loadCommentsData = async () => {
	try {
		const commentsResponse = await fetch('https://my-json-server.typicode.com/telegraph/frontend-exercise/comments');
		const commentsData = await commentsResponse.json();
		window.articleData.comments = commentsData;
	} catch (error) {
		window.articleData.comments = '';
	}
};

const createCommentsSection = (commentsArr) => {
	const commentsElem = document.getElementById('comments');
	if (commentsElem) {
		commentsElem.style.display = 'block';
	}

	const commentsValueElem = document.getElementById('comments-value');
	if (commentsValueElem) {
		commentsValueElem.innerHTML = window.articleData.comments.length;
	}

	const commentsSectionElem = document.getElementById('comments-section');
	if (!commentsSectionElem) {
		return;
	}

	commentsSectionElem.innerHTML = '';

	for (const commentObj of commentsArr) {
		const { name, date, body, likes } = commentObj;
		const commentElem = document.createElement('div');
		commentElem.className = 'comment-element';

		const nameElem = document.createElement('div');
		nameElem.className = 'comment-name';
		nameElem.innerHTML = name;
		commentElem.appendChild(nameElem);

		const commentDateElem = document.createElement('div');
		commentDateElem.className = 'comment-date';
		commentDateElem.innerHTML = dateFormatter(date);
		commentElem.appendChild(commentDateElem);

		const commentLikesElem = document.createElement('div');
		commentLikesElem.className = 'comment-likes';
		commentLikesElem.innerHTML = likes + ' Likes';
		commentElem.appendChild(commentLikesElem);

		const commentBodyElem = document.createElement('div');
		commentBodyElem.className = 'comment-body';
		commentBodyElem.innerHTML = body;
		commentElem.appendChild(commentBodyElem);

		commentsSectionElem.appendChild(commentElem);

		const hr = document.createElement('hr');
		commentsSectionElem.appendChild(hr);
	}
};

const init = (commentsArr) => {
	if (commentsArr) {
		currentSortType = 'newest';
		createCommentsSection(sortByNewest(commentsArr));

		const commentLikesElem = document.getElementById('comments-likes');
		if (commentLikesElem) {
			commentLikesElem.onclick = () => {
				if (currentSortType !== 'likes') {
					currentSortType = 'likes';
					createCommentsSection(sortByLikes(commentsArr));
				}
			};
		}

		const commentNewestElem = document.getElementById('comments-newest');
		if (commentNewestElem) {
			commentNewestElem.onclick = () => {
				if (currentSortType !== 'newest') {
					currentSortType = 'newest';
					createCommentsSection(sortByNewest(commentsArr));
				}
			};
		}
	}
};

module.exports = {
	init,
	loadCommentsData,
	sortByNewest,
	sortByLikes,
};
