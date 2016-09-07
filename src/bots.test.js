import test from 'ava';
import bots from './bots';

test('without name', t => {
	try {
		bots();
	} catch (err) {
		t.is(err.name, 'Error');
		t.is(err.message, 'You must provide a name');
	}
});

test('bot not a string', t => {
	try {
		bots([]);
	} catch (err) {
		t.is(err.name, 'Error');
		t.is(err.message, 'Bot must be a string');
	}
});

test('bot does not exit', t => {
	try {
		bots('eric phung and samuel joset');
	} catch (err) {
		t.is(err.message, 'Bot does not exist');
	}
});

test('bot canalplus', async t => {
	const botCanalplus = bots('canalplus');
	t.true(typeof botCanalplus.scrap === 'function');
	const jobs = await botCanalplus.scrap();
	t.truthy(jobs.length);
});
