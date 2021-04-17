const commentsFactory = require('./comments-factory');

describe('Utils', () => {
	describe('sortByNewest', () => {
		it('should sort in correct order', () => {
			const obj = [
				{
					date: '2021-04-15T20:09:02.000Z',
				},
				{
					date: '2019-04-23T18:25:43.511Z',
				},
				{
					date: '2020-10-13T10:26:48.511Z',
				},
			];

			const result = [
				{
					date: '2021-04-15T20:09:02.000Z',
				},
				{
					date: '2020-10-13T10:26:48.511Z',
				},
				{
					date: '2019-04-23T18:25:43.511Z',
				},
			];

			const sortedObj = commentsFactory.sortByNewest(obj);
			expect(sortedObj).toEqual(result);
		});

		it('should sort in correct order', () => {
			const obj = [
				{
					date: '2019-04-23T22:26:43.511Z'
				},
				{
					date: '2019-04-23T19:26:41.511Z'
				},
				{
					date: '2019-04-23T18:26:48.511Z'
				},
				{
					date: '2019-04-24T08:23:49.511Z'
				},
				{
					date: '2019-04-24T07:26:42.511Z'
				},
			];

			const result = [
                {
					date: '2019-04-24T08:23:49.511Z'
				},
                {
					date: '2019-04-24T07:26:42.511Z'
				},
                {
					date: '2019-04-23T22:26:43.511Z'
				},
                {
					date: '2019-04-23T19:26:41.511Z'
				},
                {
					date: '2019-04-23T18:26:48.511Z'
				}
			];

			const sortedObj = commentsFactory.sortByNewest(obj);
			expect(sortedObj).toEqual(result);
		});
	});

	describe('sortByLikes', () => {
		it('should sort in correct order', () => {
			const obj = [
				{ likes: 233 },
				{ likes: 99 },
				{ likes: 2 },
				{ likes: 1232 },
				{ likes: 58 },
				{ likes: 26 },
			];

			const result = [
				{ likes: 1232 },
				{ likes: 233 },
				{ likes: 99 },
				{ likes: 58 },
				{ likes: 26 },
				{ likes: 2 },
			];

			const sortedObj = commentsFactory.sortByLikes(obj);
			expect(sortedObj).toEqual(result);
		});

		it('should sort in correct order', () => {
			const obj = [
				{ likes: 91 },
				{ likes: 7 },
				{ likes: 33 },
				{ likes: 4 },
				{ likes: 58 },
			];

			const result = [
				{ likes: 91 },
				{ likes: 58 },
				{ likes: 33 },
				{ likes: 7 },
				{ likes: 4 },
			];

			const sortedObj = commentsFactory.sortByLikes(obj);
			expect(sortedObj).toEqual(result);
		});
	});
});
