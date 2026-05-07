import { Form, Col, Row, Button } from "react-bootstrap"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//array for courses list 
const courses = ['Mern stack', 'React', 'AI', 'Web', 'Graphic'];

const AddstudentPage = () => {

    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [marks, setMarks] = useState("");
    const [city, setCity] = useState("");

    const navigate = useNavigate();

    const addStudent = async () => {

        try {
            console.log({ name, email, course, marks, city });
            if (!name || !email || !course || !marks || !city) {
                alert("All fields are required");
                return;
            }

            const response = await axios.post('http://localhost:5000/api/students/add', {
                name,
                email,
                course,
                marks,
                city,
            })
            console.log(response.data);
            alert('Student added successfully')
            navigate("/");

        } catch (error) {
            console.log(error.response?.data || error.message);
        }



    };
    return (
        <Row className="justify-content-center">
            <Col md={6} lg={8}>
                <h1>Add Student</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <Form.Label>Course</Form.Label>
                        <Form.Select name="course" value={course}
                            onChange={(e) => setCourse(e.target.value)} >
                            <option>Select Course</option>
                            {courses.map((c) => <option>{c}</option>)
                            }
                        </Form.Select>
                        <Form.Label>Marks</Form.Label>
                        <Form.Control type="email" placeholder="Marks (0-100)" value={marks}
                            onChange={(e) => setMarks(e.target.value)} />
                        <Form.Label>City</Form.Label>
                        <Form.Control type="email" placeholder="City" value={city}
                            onChange={(e) => setCity(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="Add" onClick={addStudent} >
                        Add
                    </Button>
                </Form>
            </Col>

        </Row>
    )
}
export default AddstudentPage