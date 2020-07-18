// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


import artist from './documents/artist'
import artwork from './documents/artwork'
import medium from './documents/medium'
import stil from './documents/stil'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    artwork,
    artist,
    medium,
    stil,

    /* Your types here! */
  ])
})
