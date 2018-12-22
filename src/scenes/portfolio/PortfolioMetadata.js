import { PathPortfolio } from 'Path';
import { Skill, Tool, Exp, Misc } from './Keywords';

import defaultImg from './img/default.png';
import p10000 from './img/p10000.png';
import p10001 from './img/p10001.png';
import p10002 from './img/p10002.png';
import p10003 from './img/p10003.png';
import p10004 from './img/p10004.png';
import p10005 from './img/p10005.png';

import w40000 from './img/w40000.png';
import w40001 from './img/w40001.png';

class PortfolioMetadata  {
	constructor() {
		this.projects = this.getProjects();
		this.workExperiences = this.getWorkExperiences();
	}

	getProjects() {
		return {
			p10005: {title: 'Crowdfunding Website',
					 desc: 'Database Project',
					 period: 'Aug 2018 - Nov 2018',
					 image: p10005,
					 url: PathPortfolio.P10005,
					 tags: [Skill.SQL, Skill.POSTGRESQL, Skill.HTML, Skill.PHP, Skill.JAVASCRIPT, Tool.PHPPGADMIN, Tool.BITNAMI, Tool.DBEAVER, Tool.HEROKU, Exp.DATABASE],
					 keywords: [Exp.FULL_STACK, Exp.FRONT_END, Exp.BACK_END]
				    },

			p10004: {title: 'P2P File Transfer',
					 desc: 'Networking Project',
					 period: 'Aug 2018 - Nov 2018',
					 image: p10004,
					 url: PathPortfolio.P10004,
					 tags: [Skill.JAVA, Tool.DIGITAL_OCEAN, Misc.NETWORK_PROTOCOL],
					 keywords: []
				    },

			p10003: {title: 'SpaXi',
					 desc: 'Static Program Analyzer',
					 period: 'Aug 2017 - Nov 2017',
					 image: p10003,
					 url: PathPortfolio.P10003,
					 tags: [Skill.CPP, Skill.PYTHON, Skill.BASH, Skill.VBSCRIPT, Misc.SPA],
					 keywords: [Tool.HEROKU, Skill.REACT, Skill.HTML, Skill.CSS, Skill.SCSS, Skill.JAVASCRIPT]
				    },

			p10002: {title: 'kboxLyricsBot',
					 desc: 'Telegram Bot to search for song lyrics',
					 period: 'Jan 2017',
					 image: p10002,
					 url: PathPortfolio.P10002,
					 tags: [Skill.PYTHON, Misc.WEB_SCRAP, Tool.HEROKU, Misc.TELEGRAM_BOT, Misc.BEAUTIFUL_SOUP, Misc.GENIUS],
					 keywords: []
				    },

			p10001: {title: 'Taskell',
					 desc: 'Desktop Task Manager Application',
					 period: 'Aug 2016 - Nov 2016',
					 image: p10001,
					 url: PathPortfolio.P10001,
					 tags: [Skill.JAVA, Tool.ECLIPSE],
					 keywords: [Tool.PAPERPLANE, Skill.HTML, Skill.CSS, Exp.WEB]
				    },

			p10000: {title: 'Bomb Squard',
					 desc: 'Multiplayer Android Mobile Quiz Game',
					 period: 'May 2016 - Aug 2016',
					 image: p10000,
					 url: PathPortfolio.P10000,
					 tags: [Skill.JAVA, Skill.PHP, Skill.MYSQLI, Exp.ANDROID, Exp.MOBILE, Exp.DATABASE, Exp.FULL_STACK],
					 keywords: []
				    }
		};
	}

	getWorkExperiences() {
		return {
			w40001: {company: 'Micepad',
					 desc: 'iOS Development Internship',
					 period: 'Jan 2018 - Jun 2018',
					 image: w40001,
					 url: PathPortfolio.W40001,
					 tags: [Skill.OBJC, Tool.XCODE, Exp.IOS, Exp.MOBILE, Exp.FRONT_END, Exp.AGILE, Misc.IPHONE, Misc.IPAD],
					 keywords: []
				    },

			w40000: {company: 'Enviro-Hub Holdings Ltd',
					 desc: 'IT Helpdesk Internship',
					 period: 'May 2015 - Jul 2015',
					 image: w40000,
					 url: PathPortfolio.W40000,
					 tags: [],
					 keywords: []
				    }
		};
	}

	getTagList($id) {
		if ($id in this.projects) {
			return this.projects[$id].tags;
		}

		else if ($id in this.workExperiences) {
			return this.workExperiences[$id].tags;
		}
	}
}

export default PortfolioMetadata;