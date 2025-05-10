import {NgDocConfiguration} from '@ng-doc/builder';

const NgDocConfig: NgDocConfiguration = {
  routePrefix: 'docs',
  repoConfig: {
    url: 'https://github.com/ngx-eco/angular-colorful',
    mainBranch: 'master',
    releaseBranch: 'master',
  },
  keywords: {
    keywords: {
      tsdoc: {
        title: 'TsDoc',
        url: 'https://tsdoc.org/',
      },
    },
  },
  guide: {
    anchorHeadings: ['h1', 'h2', 'h3', 'h4'],
  },
};

export default NgDocConfig;
