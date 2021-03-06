const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const NewsController = require('./controllers/NewsController')

module.exports = app => {
	app.post('/register', 
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)

	app.post('/login', 
		AuthenticationController.login)

	app.get('/news', 
		NewsController.getNews)

	app.post('/main-news/create', 
		NewsController.postNews)
}
