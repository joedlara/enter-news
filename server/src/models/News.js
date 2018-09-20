module.exports = (sequelize, DataTypes) => {
		const News = sequelize.define('News', {
			title: DataTypes.STRING,
			author: DataTypes.STRING,
			category: DataTypes.STRING,
			newsImageUrl: DataTypes.STRING,
			youtubeId: DataTypes.STRING,
			tags: DataTypes.STRING,
			story: DataTypes.TEXT,

		})
		return News
	}
