exports.myMiddleware = (req, res, next) => {
	req.name = 'Theran';
	next();
};

exports.homePage = (req, res) => {
	res.render('index');
};
