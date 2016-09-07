import got from 'got';
import cheerio from 'cheerio';

const baseUrl = 'http://www.vousmeritezcanalplus.com';

function getPostes(html) {
	const $ = cheerio.load(html);
	return $('li.offre_distribution').map((i, elem) => {
		const date = $(elem).children('.date').text();
		const poste = $(elem).children('.titre').text();
		var link = `${baseUrl}${$(elem).children('.lien_offre').attr('href')}`;
		return {date, poste, link};
	}).get();
}

function getPostesDetail(html) {
	const $ = cheerio.load(html);
	const header = $('div#offerHeader');
	const contrat = header.children('.offerHeaderBloc').children('.typeContrat');
	const duree = header.children('.offerHeaderBloc').next().children().next().first();
	const context = header.next().next();
	const mission = context.next().next();
	const profil = mission.next().next();
	const niveau = profil.next().next();
	const experience = niveau.next().next();
	return {
		duree: duree.text(),
		contrat: contrat.text(),
		context: context.text(),
		mission: mission.text(),
		profil: profil.text(),
		niveau: niveau.text(),
		experience: experience.text()
	};
}

async function scrap(options = {}) {
	options.nbPage = options.nbPage || 0;

	const nbPage = `?page=${options.nbPage + 1}`;
	const lol = await got(`${baseUrl}/offres-d-emploi.html${nbPage}`);
	const postes = getPostes(lol.body);

	return await Promise.all(postes.map(async poste => {
		const {body} = await got(poste.link);
		const posteDetail = getPostesDetail(body);
		return Object.assign(poste, posteDetail);
	}));
}

const mainExport = {
	scrap
};

export default mainExport;
module.exports = mainExport;
