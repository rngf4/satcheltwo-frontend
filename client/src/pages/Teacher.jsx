import { useGetTeacherClasses, useCreateClass } from "../services/api";
import { useEffect, useRef } from "react";
import { Route } from "react-router-dom";

function Teacher() {
  const createdClasses = useGetTeacherClasses();
  const createClass = useCreateClass();
  const classInputRef = useRef(null);

  function domCreateClass() {
    //grab the information from the boxes or literally just use form tags
    createClass({ name: classInputRef.current.value });
  }

  return (
    <>
      <div className="flex flex-column">
        <div className="flex flex-row pd-4">
          <h3>Your classes can be seen below</h3>
          <input ref={classInputRef} type="text" />
          <button onClick={domCreateClass}>create +</button>
        </div>
        <div>this would be the list of classes</div>
      </div>
    </>
  );
}

export default Teacher;
