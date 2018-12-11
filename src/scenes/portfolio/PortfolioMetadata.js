
class PortfolioMetadata  {
	constructor() {
		this.projects = this.getProjects();
		this.workExperiences = this.getWorkExperiences();
	}

	getProjects() {
		return {
			10000: {title: 'Bomb Squard',
					desc: 'Multiplayer Android Mobile Quiz Game',
					period: 'May 2016 - Aug 2016'},
			10001: {title: 'Taskell',
					desc: 'Desktop Task Manager Application',
					period: 'Aug 2016 - Nov 2016'}
		};
	}

	getWorkExperiences() {
		return {
			40000: {title: 'Bomb Squard',
					desc: 'Multiplayer Android Mobile Quiz Game',
					period: 'May 2016 - Aug 2016'},
			40001: {title: 'Taskell',
					desc: 'Desktop Task Manager Application',
					period: 'Aug 2016 - Nov 2016'}
		};
	}
}

export default PortfolioMetadata;