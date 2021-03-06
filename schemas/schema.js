// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
// Document types
import category from './documents/category'
import vendor from './documents/vendor'
import product from './documents/product'
import post from './documents/post'
import postCategory from './documents/postCategory'
import author from './documents/author'
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
import service from './documents/service'
import location from './documents/location'

// Object types
import productVariant from './objects/productVariant'
import richText from './objects/richtext'
import figure from './objects/figure'
import embedHTML from './objects/embedHTML'
import youtube from './objects/youtube'
import instagramPost from './objects/instagramPost'
import blockContent from './objects/blockContent'
import callToAction from './objects/callToAction'
import contactUs from './objects/contactUs'
import latestNews from './objects/latestNews'
import contactMap from './objects/contactMap'
import contactForm from './objects/contactForm'
import servicesCards from './objects/servicesCards'
import servisesCarousel from './objects/servisesCarousel'

// Local types
import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    vendor,
    category,
    post,
    postCategory,
    author,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    richText,
    figure,
    embedHTML,
    youtube,
    instagramPost,
    page,
    route,
    siteConfig,
    service,
    callToAction,
    location,
    contactUs,
    latestNews,
    contactMap,
    contactForm,
    servicesCards,
    servisesCarousel
  ]),
})
