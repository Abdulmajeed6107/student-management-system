import { Col, Row , Alert} from "react-bootstrap";
import { getAllStudents, deleteStudent } from "../api/studentapi";
import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";

const HomePage = () => {
    //defining the hooks 
    //useState for getting all the students data
    const [student, setStudents] = useState([]);
    //state for handling the loading
    const [loading, setLoading] = useState(false);
    //state for handling the error
    const [error, setError] = useState(null);
    // hook to showing the messages
    const [message, setMessage] = useState(null);



    //function that will fetch the students data from the API
    const fetchStudents = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllStudents()
            //passing the data to hook useState
            setStudents(data.data);
        } catch (error) {
            setError("Error fetching students data");
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    //using useEffect for getting students data from API
    useEffect(() => {
        fetchStudents();
    }, []);

    const handleDelete = async (id) => {
        try {
            const data = await deleteStudent(id);
            //after deleting the data, now we need to filter
            setStudents(prev => prev.filter(s => s._id !== id))

            // showing the success message 
            setMessage({ text: data.message })
        } catch (err) {
            setMessage({ variant: 'danger', text: 'could not delete the student' })

        }
        setTimeout(() => setMessage(null)

            , 4000);
    }


    return (
        <div>
            <h1 className="text-center mt-5" >All Students Record</h1>
            {
                message && (
                    <Alert variant={message.variant} >{message.text}</Alert>
                )
            }
            {/*condition if there is no student data */}
            {student.length === 0 ? (
                <p>No students data found</p>
            ) : (
                <Row xs={1} md={2} lg={4}>
                    {student.map(s => (
                        <Col key={s._id}>
                            <StudentCard student={s} onDelete={handleDelete} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    )
}
export default HomePage;