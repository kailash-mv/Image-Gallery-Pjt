import React from "react";

const imageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-black mb-10 mx-auto">
      <img
        src={image.webformatURL}
        alt=""
        className="w-full h-min opacity-100"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-purple-400">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong> Views: </strong>
            {image.views}
          </li>
          <li>
            <strong> Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong className="text-red-600"> Likes: </strong>
            {image.likes}
          </li>
          {/* <li>
            <strong>
              <a href="" target="_blank">
                Image Link
              </a>
            </strong>
          </li> */}
        </ul>
      </div>
      <div className="px-4 py-4 ">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full 
        px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default imageCard;
