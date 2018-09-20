const {News} = require('../models')

module.exports = {
	async getNews (req, res) {
		try{
			const newsAll = await News.findAll({
				limit: 10
			})
			res.send(newsAll)
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured trying to fetch news'
			})
		}
	},
	async postNews (req, res) {
		try{
			const news = await News.create(req.body)
			res.send(news)
		} catch (err) {
			res.status(500).send({
				error: 'An error has occured trying to post news'
			})
		}
	}
}
