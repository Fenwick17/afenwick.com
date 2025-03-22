import { defineType, defineArrayMember } from 'sanity';

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Code', value: 'code' },
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'type',
                type: 'string',
                title: 'Link Type',
                options: {
                  list: [
                    { title: 'Internal', value: 'internal' },
                    { title: 'External', value: 'external' },
                  ],
                  layout: 'radio', // Optional: makes selection easier
                  direction: 'horizontal', // Optional: places options side by side
                },
              },
              {
                name: 'internalLink',
                type: 'reference',
                title: 'Internal Page',
                to: [{ type: 'blog' }],
                hidden: ({ parent }) => parent?.type !== 'internal', // Hide unless internal is selected
              },
              {
                name: 'href',
                type: 'url',
                title: 'External URL',
                hidden: ({ parent }) => parent?.type !== 'external', // Hide unless external is selected
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab',
                description: 'Only applies to external links',
                hidden: ({ parent }) => parent?.type !== 'external', // Hide unless external is selected
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineArrayMember({
      type: 'code',
      title: 'Code Block',
      options: {
        withFilename: true,
      },
    }),
  ],
});
