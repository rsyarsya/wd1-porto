// payload.config.js
const { buildConfig } = require('payload')
const { postgresAdapter } = require('@payloadcms/db-postgres')
const { lexicalEditor } = require('@payloadcms/richtext-lexical')
const sharp = require('sharp')

module.exports = buildConfig({
  admin: {
    routes: {
      admin: '/admin',
    },
  },
  editor: lexicalEditor(),
  collections: [],
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-123',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
})