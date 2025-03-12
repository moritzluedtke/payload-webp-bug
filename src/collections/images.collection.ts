import { CollectionConfig } from 'payload'

export const Images: CollectionConfig = {
  slug: 'images',
  admin: {
    useAsTitle: 'title',
    group: 'Content Libraries',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ['image/png', 'image/gif', 'image/jpeg', 'application/postscript', 'image/svg+xml'],
    formatOptions: {
      format: 'jpeg',
    },
    imageSizes: [
      {
        name: 'small',
        formatOptions: {
          format: 'webp', // ERROR LINE
        },
        width: 800,
      },
    ],
  },
}
