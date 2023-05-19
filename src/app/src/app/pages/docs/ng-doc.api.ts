import {NgDocApi} from '@ng-doc/core';

export const api: NgDocApi = {
  title: 'API',
  scopes: [
    {
      name: 'angular-colorful',
      route: 'docs/angular-colorful',
      include: 'src/angular-colorful/**/*.ts',
    },
  ],
};

export default api;
