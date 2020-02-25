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
                  buildHookId: '5e54e54313e65601da26b68b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-paayxk9c',
                  apiId: '0188b71c-2e8b-4c27-8aa7-8e7ff9f1db44'
                },
                {
                  buildHookId: '5e54e544081fa30172767dc4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e6j2tb7a',
                  apiId: 'f396ad5b-7084-420c-a34d-d1d76ba2fbbd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mehmetgunduz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e6j2tb7a.netlify.com', category: 'apps'}
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
