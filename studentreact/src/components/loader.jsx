import { Spinner } from "react-bootstrap";

const Loader = ()=>{
 <Spinner animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
}
export default Loader;