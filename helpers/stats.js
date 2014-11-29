var models = require('../models');
	async = require('async');

	module.exports = function(callback){
		async.parallel([
			function(next){
				models.Image.count({}, next);
			},
			function(next){
				models.Comment.count({}, next);
			},
			function(next){
				models.Image.aggregate({$group:{
					_id: '1',
					viewsTotal: {$sum: '$views'}
				}}, function(err, result){
					var viewsTotal = 0;
					if(result.length > 0){
						viewsTotal +=result[0].viewsTotal;
					}
					next(null, viewsTotal);
				});
			},
			function(next){
				models.Image.aggregate({$group:{
					_id: '1',
					likestotal: {$sum: '$likes'}
				}}, function(err, result){
					var likestotal = 0;
					if(result.length > 0){
						likestotal += result[0].likestotal;
					}
					next(null, likestotal);
				});
			}
		],function(err, results){
			callback(null,{
				images:		results[0],
				comments:	results[1],
				views:		results[2],
				likes:		results[3]
			});
		});
	};