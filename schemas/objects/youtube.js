import Preview from '../previews/youtube';
import { MdOndemandVideo  } from 'react-icons/md';



export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',
    icon: MdOndemandVideo,
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'YouTube video URL'
      }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
  }