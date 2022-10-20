import { useGetAllClasses, useJoinClass } from "../services/api";
import PageContainer from "../components/PageContainer";
import { Button } from "../components/Library";

function ClassElement({ data }) {
  const joinClass = useJoinClass();

  function joinClassButton() {
    if (joinClass) {
      joinClass(data);
    } else {
      console.log("wait please");
    }
  }

  return (
    <div className="flex flex-row">
      <h3>{data.name}</h3>
      <Button callback={joinClassButton}>join class</Button>
    </div>
  );
}

function Subscriptions() {
  const classes = useGetAllClasses();
  return (
    <>
      <PageContainer>
        {classes ? (
          classes.map((cl) => <ClassElement data={cl} key={cl._id} />)
        ) : (
          <>loading</>
        )}
      </PageContainer>
    </>
  );
}

export default Subscriptions;
