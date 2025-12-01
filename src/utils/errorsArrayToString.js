const errorsArrayToString = errors => {
	return errors.map(err => err.msg).join(". ");
};

module.exports = errorsArrayToString;