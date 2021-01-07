export default {
    title: 'Contact Us',
    name: 'contactUs',
    type: 'object',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        name: 'locations',
        type: 'array',
        title: 'Locations',
        of: [
          { type: 'address' },
        ],
      },    
    ],
  };
  