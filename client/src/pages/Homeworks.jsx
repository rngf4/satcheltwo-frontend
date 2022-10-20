import { useGetClasses } from "../services/api";

function HomeworkElement({ data }) {
  return (
    <div>
      {data.title} due: {data.due}
    </div>
  );
}

function Homeworks() {
  const classes = useGetClasses();
  const homeworks = [];
  console.log(homeworks);
  if (classes && classes.homeworks) {
    for (const cl of classes) {
      for (const homework of cl.homeworks) {
        homeworks.push(homework);
      }
    }
  }
  return (
    <>
      {homeworks ? (
        homeworks.map((homework) => <HomeworkElement data={homework} />)
      ) : (
        <>loading</>
      )}
    </>
  );
}

export default Homeworks;
