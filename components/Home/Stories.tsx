import React from "react";
import Story from "./Story";
import FbLogo from "./../../public/fb-logo.webp";
import NextLogo from "./../../public/next.svg";

const stories = [
  { name: "Kingsley", src: FbLogo, profile: NextLogo },
  { name: "Kingsley1", src: FbLogo, profile: NextLogo },
  ,
  { name: "Kingsley2", src: FbLogo, profile: NextLogo },
  { name: "Kingsley3", src: FbLogo, profile: NextLogo },
];

const Stories = () => {
  return (
    <div className="flex justify-center mx-auto mb-4 space-x-3 bg-white rounded-3xl">
      {stories.map((story) => (
        <Story
          name={story.name}
          src={story.src}
          profile={story.profile}
          key={story.name}
        />
      ))}
    </div>
  );
};

export default Stories;
