var sidebar = require('../helpers/sidebar');

module.exports = {
	index: function (req, res){
		var viewModel={
			images:[
				{
					uniqueId:		1,
					title:			'Sample Image 1',
					description:	'',
					filename:		'1.png',
					views:			0,
					likes:			0,
					timestamp:		Date.now
				},{
					uniqueId:		2,
					title:			'Sample Image 2',
					description:	'',
					filename:		'2.png',
					views:			0,
					likes:			0,
					timestamp:		Date.now
				},{
					uniqueId:		3,
					title:			'Sample Image 3',
					description:	'',
					filename:		'3.png',
					views:			0,
					likes:			0,
					timestamp:		Date.now
				},{
					uniqueId:		4,
					title:			'Sample Image 4',
					description:	'',
					filename:		'4.png',
					views:			0,
					likes:			0,
					timestamp:		Date.now
				}
			]
		};
		sidebar(viewModel, function(viewModel){
			res.render('index', viewModel);
		});
	}
};