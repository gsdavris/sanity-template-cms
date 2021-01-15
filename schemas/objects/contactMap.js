export default {
    title: 'Contact Map',
    name: 'contactMap',
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
        },
        {
        title: 'Location Name',
        name: 'name',
        type: 'string',
        },      
        {
        title: 'Street name',
        name: 'street',
        type: 'string',
        },
        {
        name: 'streetNo', 
        type: 'string',
        title: 'Street number'
        },     
        {
        title: 'City',
        name: 'city',
        type: 'string',
        },      
        {
        title: 'Postal Code',
        name: 'postal',
        type: 'string',
        },           
    ],
  };