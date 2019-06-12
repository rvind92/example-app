module.exports = (error, errMsg, response) => {
	console.error({ error, errMsg })
	return response.status(400).json({
		error: errMsg
	})
}
