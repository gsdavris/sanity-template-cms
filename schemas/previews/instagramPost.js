import React from "react";
import InstagramEmbed from "react-instagram-embed";

const InstagramPreview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }

  return (
    <InstagramEmbed
      url={url}
      clientAccessToken="219903692828103|763dcd079a28a8f09adaabde8734ab72"
      maxWidth={480}
      containerTagName="div"
      injectScript
    />
  );
};

export default InstagramPreview;