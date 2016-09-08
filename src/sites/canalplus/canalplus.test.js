import test from 'ava';
import botCanalplus from './canalplus';

test('bot canalplus', async t => {
	t.true(typeof botCanalplus.scrap === 'function');
	const jobs = await botCanalplus.scrap();
	t.truthy(jobs.length);
});
