import {NgDocConfiguration} from '@ng-doc/builder';

const NgDocConfig: NgDocConfiguration = {
	pages: 'src/app/src/app',
	routePrefix: 'docs',
	repoConfig: {
		url: 'https://github.com/ngx-eco/angular-colorful',
		mainBranch: 'master',
		releaseBranch: 'master',
	},
	keywords: {
		tsdoc: {
			title: 'TsDoc',
			path: 'https://tsdoc.org/',
		},
	},
	guide: {
		anchorHeadings: ['h1', 'h2', 'h3', 'h4'],
	},
};

export default NgDocConfig;
