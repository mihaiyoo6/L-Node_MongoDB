var ImageModel = require('../../models/image');
describe('Image Model', function(){
	var image;
	it('should have a mongoose schema', function(){
		expect(ImageModel.schema).to.be.defined;
	});

	beforeEach(function(){
		image = new ImageModel({
			title: 'Test',
			description: 'Testing',
			filename: 'testfile.jpg'
		});
	});

	//TODO: write tests...
	describe('Schema', function(){
		it('should have a title string', function(){
			expect(image.title).to.be.defined;
		});
		it('should have a description string', function(){
			expect(image.description).to.be.defined;
		});
		it('should have a filename', function(){
			expect(image.filename).to.be.defined;
		});
		it('should have a viwes number default to 0 ', function(){
			expect(image.views).to.be.defined;
			expect(image.views).to.equal(0);
		});
		it('should hava a likes number default to 0', function(){
			expect(image.likes).to.be.defined;
			expect(image.likes).to.equal(0);
		});
		it('should have a time stamp date', function(){
			expect(image.timestamp).to.be.defined;
		});
	});

	describe('Virtuals', function(){
		describe('uniqueId', function(){
			it('should be defined', function(){
				expect(image.uniqueId);
			});
			it('should get filename without extension', function(){
				expect(image.uniqueId).to.equal('testfile');
			});
		});
	});

});