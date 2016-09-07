import test from 'ava';
import bots from './bots';

test('without name', t => {
	try {
		test(bots());
	} catch (err) {
		t.is(err.name, 'Error');
		t.is(err.message, 'You must provide a name');
	}
});

test('bot not a string', t => {
	try {
		test(bots([]));
	} catch (err) {
		t.is(err.name, 'Error');
		t.is(err.message, 'Bot must be a string');
	}
});
