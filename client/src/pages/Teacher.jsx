import { useGetTeacherClasses, useCreateClass } from "../services/api";
import { useEffect } from "react";
import { Route } from "react-router-dom";

function Teacher() {
  const createdClasses = useGetTeacherClasses();
  const createClass = useCreateClass();

  function domCreateClass() {
    //grab the information from the boxes or literally just use form tags
    createClass({ name: "nice" });
  }

  return (
    <>
      <div className="flex flex-column">
        <div className="flex flex-row">
          <h3>Your classes can be seen below</h3>
          <button onClick={domCreateClass}>create +</button>
        </div>
        <div>this would be the list of classes</div>
      </div>
    </>
  );
}

export default Teacher;
