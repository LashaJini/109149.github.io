import React from "react";
import "./Sphere.scss";

const Sphere = () => {
  React.useEffect(() => {
    let cubes = document.querySelectorAll(".cube");
    // let cube = document.querySelector(".cube");
    let radioGroup = document.querySelector(".radio-group");
    let currentClass = "";
    let mihi = "mihi";

    function changeSide() {
      let checkedRadio = radioGroup.querySelector(":checked");
      let showClass = "show-" + checkedRadio.value;
      if (currentClass) {
        cubes.forEach((cube) => cube.classList.remove(currentClass));
        cubes.forEach((cube) => cube.classList.remove("mihi"));
        // cube.classList.remove(currentClass);
      }
      cubes.forEach((cube) => cube.classList.add(showClass));
      cubes.forEach((cube) => cube.classList.add("mihi"));
      // cube.classList.add(showClass);
      currentClass = showClass;
    }
    // set initial side
    changeSide();

    radioGroup.addEventListener("change", changeSide);

    return () => radioGroup.removeEventListener("change", changeSide);
  }, []);

  return (
    <>
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--front">front</div>
          <div className="cube__face cube__face--back">back</div>
          <div className="cube__face cube__face--right">right</div>
          <div className="cube__face cube__face--left">left</div>
          <div className="cube__face cube__face--top">top</div>
          <div className="cube__face cube__face--bottom">bottom</div>
        </div>
        <div className="cube oi">
          <div className="0">0</div>
          <div className="1">1</div>
          <div className="2">2</div>
          <div className="3">3</div>
          <div className="4">4</div>
          <div className="5">5</div>
          <div className="6">6</div>
        </div>
      </div>
      <p className="radio-group">
        <label>
          <input type="radio" name="rotate-cube-side" value="front" checked />{" "}
          front
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="right" /> right
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="back" /> back
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="left" /> left
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="top" /> top
        </label>
        <label>
          <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
        </label>
      </p>
    </>
  );
};

export default Sphere;
