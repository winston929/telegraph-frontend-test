const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('home', {
		meta: JSON.stringify(req.app.get('meta'))
	});
});

router.get('/*', (req, res) => {
	const article = req.app.get('article');
	const isMatchPath = article.post.path === req.params[0];
	const data = { 
		meta: JSON.stringify(req.app.get('meta')), 
		article: JSON.stringify(isMatchPath ? article : ''), 
		posts: JSON.stringify(isMatchPath ? req.app.get('posts') : '') 
	};


	res.render('home', data);
});

module.exports = router;
