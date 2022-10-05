import { useGetAllClasses } from "../services/api"

function Subscriptions() {
    const classes = useGetAllClasses()
    return (<>
        {classes ? classes.map(cl => {
            return <div key={cl._id}>{cl.name}</div>
        }) : <div>loading classes</div>}
    </>)
}

export default Subscriptions