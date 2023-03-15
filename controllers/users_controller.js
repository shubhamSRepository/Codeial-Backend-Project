module.exports.profile = function(req,res){
    res.end("profile page");
}

module.exports.posts = function(req,res){
    res.end('<h1> User posts will be shown here </h1>');
}