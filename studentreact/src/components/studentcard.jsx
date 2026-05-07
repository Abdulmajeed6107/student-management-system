import { Card, Button, Container, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ student, onDelete }) => {
  const navigate = useNavigate();

  //function that create confirmation popup
  const handleDelete = () => {

    if (window.confirm(`Are you sure you want to delete "${student.name}"`)) {
      onDelete(student._id);
    }
  }
  const handleUpdate = () => {
    navigate(`/update/${student._id}`);
  }
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '2.25rem' }}>{student.name}</Card.Title>
          <div className="card-text">
            <p><strong>Student email:</strong> {student.email}</p>
            <p><strong>Student city:</strong> {student.city}</p>
            <p><strong>Student course:</strong> {student.course}</p>
          </div>
        </Card.Body>

        <Card.Footer className="text-muted pt-4">Marks: <Badge>{student.marks}</Badge>
          <Button variant="warning" className="float-end mx-2" onClick={handleUpdate}>Edit</Button>
          <Button variant="danger" className="float-end" onClick={handleDelete} >Delete</Button>
        </Card.Footer>
      </Card>
    </Container>
  )
}
export default StudentCard;