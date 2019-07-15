export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d2c815a26f8b6017d598cf2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9nyrgyo9',
                  apiId: '5414e6e7-5a80-40c1-891b-64d22f82e0b4'
                },
                {
                  buildHookId: '5d2c815b2a3c88017536d955',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9qaau4ik',
                  apiId: '60dc946c-f48d-4589-81e3-3f1281ddf477'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Decodal/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9qaau4ik.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
