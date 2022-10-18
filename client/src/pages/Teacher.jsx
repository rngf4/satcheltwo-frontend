import {
  useGetTeacherClasses,
  useCreateClass,
  useCreateHomework,
} from "../services/api";
import { useRef } from "react";
import PageContainer from "../components/PageContainer";
import { Button } from "../components/Library";

function Teacher() {
  const createClass = useCreateClass();
  const classInputRef = useRef(null);

  function domCreateClass() {
    createClass({ name: classInputRef.current.value });
  }
  //https://mui.com/material-ui/react-modal/

  return (
    <>
      <PageContainer>
        <div className="m-4">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 justify-center">
              <h3>Your classes can be seen below</h3>
              <input ref={classInputRef} type="text" />
              <Button callback={domCreateClass}>create class</Button>
            </div>
            <CreatedClasses />
          </div>
        </div>
      </PageContainer>
    </>
  );
}

function CreatedClasses() {
  const createdClasses = useGetTeacherClasses();
  return (
    <div className="flex flex-col">
      {createdClasses ? (
        createdClasses.map((cl) => <ClassElement data={cl} />)
      ) : (
        <>loading</>
      )}
    </div>
  );
}

function ClassElement({ data }) {
  const createHomework = useCreateHomework();
  function domCreateHomework() {
    const finalDate = new Date();
    finalDate.setHours(finalDate.getHours() + 12);
    createHomework({
      title: "nice",
      description: "this is te description",
      set: new Date(),
      due: finalDate,
      classId: data._id,
    });
  }

  return (
    <div className="flex flex-row justify-center">
      <div>{data.name}</div>
      <Button callback={domCreateHomework}>create homework</Button>
    </div>
  );
}

export default Teacher;
