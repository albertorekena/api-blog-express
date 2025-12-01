const isIdNumber = (req, res, next) => {
	const id = req.params.id;

	if (isNaN(id)) {
		return res.status(404).json({success:false, message:"The id only can be a number."});
	}

	next();
};

module.exports = isIdNumber;