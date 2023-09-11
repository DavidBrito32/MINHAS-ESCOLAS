import { useContext } from "react";
import { HooksContext} from "../../context/hooksProvider";
const Home = () => {

    const { boasVindas } = useContext(HooksContext);



    return (
        <>
            <h1>Home</h1>
            <p>{boasVindas}</p>
        </>
    )
}

export default Home;