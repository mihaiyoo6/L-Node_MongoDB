var fs = require('fs'),
    path = require('path');

module.exports = {
    index: function(req, res) {
        var viewModel={
            image:{
                uniqueId: 1,
                title: 'Sample image 1',
                description: 'This is a sample',
                filename: '1.png',
                views: 0,
                likes: 0,
                timestamp: Date.now
            },
            comments:[
                {
                    image_id: 1,
                    email: 'test@tesing.com',
                    name:'Test Tester',
                    gravatar: 'http://lorempixel.com/75/75/animals/1',
                    comment: 'This is a test comment...'
                },{
                    image_id: 1,
                    email: 'test@tesing.com',
                    name:'Test Tester',
                    gravatar: 'http://lorempixel.com/75/75/animals/2',
                    comment: 'This is a test 2 comment...'
                }
            ]
        };
        res.render('image', viewModel);
    },
    create: function(req, res) {
        var saveImage = function(){
            var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
                imgUrl = '';
            for(var i = 0; i < 6; i+=1){
                imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            var tempPath = req.files.file.path,
                ext = path.extname(req.files.file.name).toLowerCase(),
                targetPath = path.resolve('./public/upload/' + imgUrl + ext);

            if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
                fs.rename(tempPath, targetPath, function (err){
                    if(err) throw err;
                    res.redirect('/images/' + imgUrl);
                });
            }else{
              fs.unlink(tempPath,function  (err) {
                if(err) throw err;
                res.json(500, {error: 'Only image files are allowed.'});
              });
            }
        };

        saveImage();
    },
    like: function(req, res) {
        res.send('The image:like POST controller');
    },
    comment: function(req, res) {
        res.send('The image:comment POST controller');
    }
};
