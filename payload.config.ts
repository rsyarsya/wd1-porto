import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      slug: 'contacts',
      admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'status', 'createdAt'],
        description: 'Contact form submissions from the website',
      },
     
      access: {
        // Siapa aja bisa create (public form submission)
        create: () => true,
        
        // Hanya admin yang bisa read/update/delete
        read: ({ req: { user } }) => !!user,
        update: ({ req: { user } }) => !!user,
        delete: ({ req: { user } }) => !!user,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'message',
          type: 'textarea',
          required: true,
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'New', value: 'new' },
            { label: 'Read', value: 'read' },
            { label: 'Replied', value: 'replied' },
          ],
          defaultValue: 'new',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'submittedAt',
          type: 'date',
          admin: {
            position: 'sidebar',
            readOnly: true,
          },
          defaultValue: () => new Date().toISOString(),
        },
      ],
      hooks: {
        afterChange: [
          async ({ doc, req, operation }) => {
            if (operation === 'create') {
              console.log('✅ New contact submission:', {
                name: doc.name,
                email: doc.email,
                at: new Date().toLocaleString(),
              })
              
              // TODO: Kirim email notification ke admin
              // (sudah dihandle di API route)
            }
          },
        ],
      },
    },
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
 
  cors: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ],

  csrf: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  ],
})