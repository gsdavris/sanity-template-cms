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
              apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
              buildHookId: 'xxxyyyxxxyyyyxxxyyy',
              name: 'sanity-gatsby-blog-20-studio',
            },
            {
              title: 'Website',
              apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
              buildHookId: 'yyyyxxxxxyyyxxdxxx',
              name: 'sanity-gatsby-blog-20-web'
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