function safeCheck(botName) {
	if (!botName) {
		throw new Error('You must provide a name');
	}
	if (typeof botName !== 'string') {
		throw new Error('Bot must be a string');
	}
}

function main(name) {
	safeCheck(name);
	try {
		return require(`./sites/${name}/${name}`);
	} catch (err) {
		throw new Error('Bot does not exist');
	}
}

export default main;
module.exports = main;
