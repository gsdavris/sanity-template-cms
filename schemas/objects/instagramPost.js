import { FaInstagram  } from 'react-icons/fa';
import InstagramPreview from "../previews/instagramPost";

export default {
    type: "object",
    name: "instagramPost",    
    icon: FaInstagram,
    title: "Instagram Post",
    fields: [
      {
        name: "url",
        type: "url",
        description: "Visit an Instagram post in a browser and copy the URL."
      }
    ],
    preview: {
      select: { url: "url" },
      component: InstagramPreview
    }
  };