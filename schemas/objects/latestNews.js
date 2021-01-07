export default {
    title: 'Latest News',
    name: 'latestNews',
    type: 'object',
    fields: [
      {
        title: 'Columns',
        name: 'columns',
        type: 'number',
        description: 'Set the column width, choose from 1 to 12',
        validation: Rule => Rule.required().min(1).max(12)
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required()
      },      
      {
        title: 'Subtitle',
        name: 'subtitle',
        type: 'string',
      },
      {
        title: 'Displayed Posts',
        name: 'dislayedPosts',
        type: 'number',
        description: 'Set the number of displayed posts',
        validation: Rule => Rule.required().min(1).max(10)
      }
    ],
    preview: {
        select: {
            title: 'title',
            dislayedPosts: 'dislayedPosts'
          },
          prepare({ title, dislayedPosts }) {
            return {
              title: `${title}`,
              subtitle: `Displayed Posts: ${dislayedPosts}`,
            };
          },
    },
  };
  