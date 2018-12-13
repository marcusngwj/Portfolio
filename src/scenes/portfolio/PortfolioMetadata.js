import { PathPortfolio } from 'Path';
import defaultImg from './img/default.png';
import p10000 from './img/p10000.png';
import p10001 from './img/p10001.png';
import p10002 from './img/p10002.png';

class PortfolioMetadata  {
	constructor() {
		this.projects = this.getProjects();
		this.workExperiences = this.getWorkExperiences();
	}

	getProjects() {
		return {
			10005: {title: 'Crowdfunding Website',
					desc: '',
					period: 'Aug 2018 - Nov 2018',
					image: defaultImg,
					url: PathPortfolio.PAGE_NOT_FOUND},

			10004: {title: 'P2P File Transfer',
					desc: '',
					period: 'Aug 2018 - Nov 2018',
					image: defaultImg,
					url: PathPortfolio.PAGE_NOT_FOUND},

			10003: {title: 'SpaXi',
					desc: 'Static Program Analyzer',
					period: 'Aug 2017 - Nov 2017',
					image: defaultImg,
					url: PathPortfolio.P10003},

			10002: {title: 'kboxLyricsBot',
					desc: 'Telegram Bot to search for song lyrics',
					period: 'Jan 2017',
					image: p10002,
					url: PathPortfolio.P10002},

			10001: {title: 'Taskell',
					desc: 'Desktop Task Manager Application',
					period: 'Aug 2016 - Nov 2016',
					image: p10001,
					url: PathPortfolio.P10001},

			10000: {title: 'Bomb Squard',
					desc: 'Multiplayer Android Mobile Quiz Game',
					period: 'May 2016 - Aug 2016',
					image: p10000,
					url: PathPortfolio.P10000}
		};
	}

	getWorkExperiences() {
		return {
			40001: {title: 'Taskell',
					desc: 'Desktop Task Manager Application',
					period: 'Aug 2016 - Nov 2016',
					image: defaultImg,
					url: PathPortfolio.PAGE_NOT_FOUND},

			40000: {title: 'Bomb Squard',
					desc: 'Multiplayer Android Mobile Quiz Game',
					period: 'May 2016 - Aug 2016',
					image: defaultImg,
					url: PathPortfolio.PAGE_NOT_FOUND}
		};
	}
}

export default PortfolioMetadata;