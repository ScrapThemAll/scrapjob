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
}

export default main;
module.exports = main;
