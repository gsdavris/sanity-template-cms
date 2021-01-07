import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdDashboard, MdStore, MdShoppingCart, MdWidgets, MdBookmark, MdBusiness, MdFeaturedPlayList, MdPerson, MdAssignment, MdFolderSpecial } from 'react-icons/md';
import { CgWebsite }  from 'react-icons/cg';
import { FaLink }  from 'react-icons/fa';


const hiddenDocTypes = listItem =>
!['page', 'route', 'site-config', 'product', 'category', 'vendor', 'post', 'author', 'postCategory', 'service'].includes(
  listItem.getId()
)

export default () =>
  S.list()
    .title('Content')
    .items([        
        S.listItem()
        .title('Site')        
        .icon(CgWebsite)
        .child(
            S.list()
            .title('Site')
            .items([
                S.listItem()
                .title('Site config')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id('config')
                    .schemaType('site-config')
                    .documentId('global-config')
                ),
                S.listItem()
                .title('Pages')
                .icon(MdDashboard)
                .schemaType('page')
                .child(S.documentTypeList('page').title('Pages')),
                S.listItem()
                .title('Routes')
                .icon(FaLink)
                .schemaType('route')
                .child(S.documentTypeList('route').title('Routes')),
                S.listItem()
                .title('Services')
                .icon(MdWidgets)
                .schemaType('service')
                .child(S.documentTypeList('service').title('Services')),
            ]),            
        ),
        S.listItem()
        .title('Store')        
        .icon(MdStore)
        .child(
            S.list()
            .title('Store')
            .items([
                S.listItem()
                .title('Products')
                .icon(MdShoppingCart)
                .schemaType('product')
                .child(S.documentTypeList('product').title('Products')),
                S.listItem()
                .title('Categories')
                .icon(MdBookmark)
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),
                S.listItem()
                .title('Vendors')
                .icon(MdBusiness)
                .schemaType('vendor')
                .child(S.documentTypeList('vendor').title('Vendors')),
            ]),            
        ),
        S.listItem()
        .title('Blog')        
        .icon(MdFeaturedPlayList)
        .child(
            S.list()
            .title('Blog')
            .items([
                S.listItem()
                .title('Posts')
                .icon(MdAssignment)
                .schemaType('post')
                .child(S.documentTypeList('post').title('Posts')),
                S.listItem()
                .title('Categories')
                .icon(MdFolderSpecial)
                .schemaType('postCategory')
                .child(S.documentTypeList('postCategory').title('Categories')),
                S.listItem()
                .title('Authors')
                .icon(MdPerson)
                .schemaType('author')
                .child(S.documentTypeList('author').title('Authors')),
            ]),            
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])