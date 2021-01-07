export default {
    title: 'Services Cards',
    name: 'servicesCards',
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
    ],
  };
  