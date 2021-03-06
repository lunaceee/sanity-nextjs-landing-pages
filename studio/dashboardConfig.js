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
                  buildHookId: '604412651d11bbcefeada626',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-29uh2ahc',
                  apiId: 'b9de05b0-9003-450d-ab18-588288b52bf4'
                },
                {
                  buildHookId: '604412659a8050113fd21d05',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a4k4kk16',
                  apiId: 'ce1a18b6-9c8b-4ebd-ac26-8e350881df72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lunaceee/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a4k4kk16.netlify.app', category: 'apps'}
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
