import React from "react";
import { Howl } from "howler";

/**
 * @author 109149
 * @time Thu 08 Apr 2021 17:47:07 +04
 *
 * @param {string[]} src - Array of path/url pointing to audio file with different formats.
 * @param {number} [volume=1] - Volume of audio file.
 * @param {boolean}  [loop=false] - Whether play audio on loop or not.
 * @returns {object}
 */
const useHowler = ({ src, volume = 1, loop = false }) => {
  const [sound] = React.useState(
    new Howl({
      src,
      volume,
      loop,
      preload: true,
      html5: true,
      onend: function () {
        // console.log("done playing!");
      },
    })
  );

  return { sound };
};

export default useHowler;
