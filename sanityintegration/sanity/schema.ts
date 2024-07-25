import { type SchemaTypeDefinition } from 'sanity'
// import { schemaTypes } from './schemaTypes'
import { someDocument } from './someDocument'
import { arrayMenu } from './menu'
// import {defineConfig} from 'sanity'
// import { schemaTypes } from './schemaTypes'
// import { someDocument } from './someDocument'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [arrayMenu],
}
   