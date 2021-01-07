export default {
    widgets: [
      {
        name: 'sanity-tutorials'
      },
      {
        name: 'project-info'
      },
      {
        name: 'netlify',
        options: {
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: '629fe729-f60f-4e40-920e-7ce05993358a',
              buildHookId: '5ff759bcaa25d6013645d20c',
              name: 'sanity-template-cms',
            },
            {
              title: 'Website',
              apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
              buildHookId: 'yyyyxxxxxyyyxxdxxx',
              name: 'sanity-template'
            }
          ]
        }
      },
      {
        name: 'project-users'
      },
      {
        name: 'document-list',
        options: {
          title: 'Last edited documents',
          order: '_updatedAt desc',
        },
        layout: {
          width: 'auto',
        }
      },
      {
        name: 'document-list',
        options: {
          title: 'Last edited posts',
          order: '_updatedAt desc',
          types: ['post']
        }
      }
    ]
  }