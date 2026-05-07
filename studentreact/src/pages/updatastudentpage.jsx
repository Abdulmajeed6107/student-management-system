import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";

const UpdateStudentPage = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [course, setCourse] = useState("");
   const [marks, setMarks] = useState("");
   const [city, setCity] = useState("");

   
   useEffect(() => {
      const fetchStudent = async () => {
         try {
            const response = await axios.get(`http://localhost:5000/api/students/getstudent/${id}`);
            const student = response.data.data;
            setName(student.name);
            setEmail(student.email);
            setCourse(student.course);
            setMarks(student.marks);
            setCity(student.city);
         } catch (error) {
            console.error("Error fetching student:", error);
            alert("Failed to fetch student data.");
         }
      };
      fetchStudent();
   }, [id]);

   const handleUpdate = async (e) => {
      e.preventDefault();
      try {
         await axios.put(`http://localhost:5000/api/students/update/${id}`, {
            name,
            email,
            course,
            marks,
            city
         });
         alert("Student updated successfully!");
         navigate("/");
      } catch (error) {
         console.error("Error updating student:", error);
         alert("Failed to update student.");
      }
   };

   return (
      <Row className="justify-content-center mt-5">
         <Col md={6} lg={8}>
            <div className="card p-4 shadow">
               <h2 className="mb-4 text-center">Update Student</h2>
               <Form onSubmit={handleUpdate}>
                  <Form.Group className="mb-3">
                     <Form.Label>Name</Form.Label>
                     <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />

                     <Form.Label className="mt-3">Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                     <Form.Label className="mt-3">Course</Form.Label>
                     <Form.Control type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} required />

                     <Form.Label className="mt-3">Marks</Form.Label>
                     <Form.Control type="text" placeholder="Marks" value={marks} onChange={(e) => setMarks(e.target.value)} required />

                     <Form.Label className="mt-3">City</Form.Label>
                     <Form.Control type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
                  </Form.Group>
                  <div className="d-grid mt-4">
                     <Button variant="warning" type="submit" size="lg">
                        Update Student
                     </Button>
                  </div>
               </Form>
            </div>
         </Col>
      </Row>
   );
};

export default UpdateStudentPage;