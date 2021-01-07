export default {
    title: 'Call to action',
    name: 'callToAction',
    type: 'object',
    validation: Rule =>
      Rule.custom(
        (fields = {}) =>
          !fields.route || !fields.link || 'Only one link type is allowed'
      ),
    fieldsets: [
      {
        title: 'Link',
        name: 'link',
      },
    ],
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
        title: 'Internal link',
        description: 'Use this to link between pages on the website',
        name: 'route',
        type: 'reference',
        to: [{ type: 'route' }],
        fieldset: 'link',
      },
      {
        title: 'External link',
        name: 'link',
        type: 'url',
        fieldset: 'link',
      },
      {
        name: 'content',
        type: 'text',
        title: 'Content',
      },
      {
        title: 'Button Text',
        name: 'buttonText',
        type: 'string',
      }
    ],
    preview: {
      select: {
        title: 'title',
        routeTitle: 'route.title',
        slug: 'route.slug.current',
        link: 'link',
      },
      prepare({ title, routeTitle = '', slug, link }) {
        const subtitleExtra = slug
          ? `Slug:/${slug}/`
          : link
          ? `External link: ${link}`
          : 'Not set';
        return {
          title: `${title}`,
          subtitle: `${routeTitle} ${subtitleExtra}`,
        };
      },
    },
  };
  