const dateFormatter = require('./date-formatter');

describe( 'Date Formatter', () => {
	describe('On article', () => {
		it("should return correct date and time", () => {
			const formattedDate = dateFormatter('2021-04-15T20:09:02.000Z', true);
			expect(formattedDate).toEqual('Thursday 15 April 2021, 9:09pm');
		});

        it("should return correct date and time", () => {
			const formattedDate = dateFormatter('2019-04-23T18:25:43.511Z', true);
			expect(formattedDate).toEqual('Tuesday 23 April 2019, 7:25pm');
		});

        it("should return correct date and time", () => {
			const formattedDate = dateFormatter('2020-10-13T10:26:48.511Z', true);
			expect(formattedDate).toEqual('Tuesday 13 October 2020, 11:26am');
		});
	});

    describe('On comments section', () => {
		it("should return correct date and time", () => {
			const formattedDate = dateFormatter('2021-04-15T20:09:02.000Z');
			expect(formattedDate).toEqual('15 Apr 2021 9:09PM');
		});

        it("should return correct date and time", () => {
			const formattedDate = dateFormatter('2019-04-23T18:25:43.511Z');
			expect(formattedDate).toEqual('23 Apr 2019 7:25PM');
		});

        it("should return correct date and time", () => {
			const formattedDate = dateFormatter('2020-10-13T10:26:48.511Z');
			expect(formattedDate).toEqual('13 Oct 2020 11:26AM');
		});
	});
});
