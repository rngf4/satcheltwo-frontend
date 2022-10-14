import { useGetTeacherClasses, useCreateClass } from "../services/api";
import { useRef } from "react";

function Teacher() {
  const createClass = useCreateClass();
  const classInputRef = useRef(null);

  function domCreateClass() {
    createClass({ name: classInputRef.current.value });
  }

  return (
    <>
      <div className="m-4">
        <div className="flex flex-col">
          <div className="flex flex-row gap-4">
            <h3>Your classes can be seen below</h3>
            <input ref={classInputRef} type="text" />
            <button
              onClick={domCreateClass}
              className="p-1 bg-gray-800 rounded text-slate-200"
            >
              create +
            </button>
          </div>
          <CreatedClasses />
        </div>
      </div>
    </>
  );
}

function CreatedClasses() {
  const createdClasses = useGetTeacherClasses();
  return (
    <div className="flex flex-col">
      {createdClasses ? (
        createdClasses.map((cl) => {
          return <div>{cl.name}</div>;
        })
      ) : (
        <>loading</>
      )}
    </div>
  );
}

export default Teacher;
