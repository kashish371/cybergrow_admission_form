import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './invoiceForm1.css';
import cybergrowImg from './cybergrow.png';

class AdmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: '',
      courseDuration: '',
      courseFees: '',
      paidFees: '',
      balanceFees: '',
      studentName: '',
      fatherName: '',
      motherName: '',
      aadharNumber: '',
      mobileNumber: '',
      alternateNumber: '',
      gender: '',
      dob: '',
      email: '',
      qualification: '',
      occupation: '',
      permanentAddress: '',
      postcode: '',
      trainingCenterAddress: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  downloadPDF = () => {
    const input = document.getElementById('admission-form');
    const images = input.getElementsByTagName('img');
    const loadPromises = Array.from(images).map((img) => {
      return new Promise((resolve) => {
        if (img.complete) resolve();
        else {
          img.onload = resolve;
          img.onerror = resolve;
        }
      });
    });

    Promise.all(loadPromises).then(() => {
      html2canvas(input, {
        useCORS: true,
        scale: 3,
        scrollX: 0,
        scrollY: 0,
        width: input.scrollWidth,
        height: input.scrollHeight,
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const heightRatio = pdfHeight / imgHeight;
        const finalImgWidth = imgWidth * heightRatio;
        const finalImgHeight = imgHeight * heightRatio;
        pdf.addImage(imgData, 'PNG', 0, 0, finalImgWidth, finalImgHeight);
        pdf.save('admission_form.pdf');
      });
    });
  }

  render() {
    return (
      <Container className="watermark mt-5">
        <div id="admission-form" className="border p-4">
          <Row className="mb-4 align-items-center">
            <Col md={4}  className="text-left">
              <img 
                src={cybergrowImg}
                alt="Institute Logo" 
                style={{ maxWidth: '150px', marginLeft:'50px' }} 
              />
            </Col>
            <Col md={4} className="text-center">
              <h1>Admission Form</h1>
              <h2>Cybergrow Technology</h2>
            </Col>
            <Col md={4} className="text-right">
              <div className="border" style={{ width: '180px', height: '220px', marginLeft:'75px', marginTop:'25px' }}>
                <p style={{ paddingTop: '80px' , marginLeft:'35px'}}>Attach Photo Here</p>
              </div>
            </Col>
          </Row>
          <hr />
          <h5>Student Information:</h5>
          <Row className="mb-3">
            <Col>
              <label>Student Name:</label>
              <input 
                type="text" 
                name="studentName" 
                className="form-control" 
                value={this.state.studentName} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label>Father's Name:</label>
              <input 
                type="text" 
                name="fatherName" 
                className="form-control" 
                value={this.state.fatherName} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Mother's Name:</label>
              <input 
                type="text" 
                name="motherName" 
                className="form-control" 
                value={this.state.motherName} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label>Gender:</label>
              <select 
                name="gender" 
                className="form-control" 
                value={this.state.gender} 
                onChange={this.handleChange} 
                required
              >
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </Col>
            <Col>
              <label>Date of Birth:</label>
              <input 
                type="date" 
                name="dob" 
                className="form-control" 
                value={this.state.dob} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Email:</label>
              <input 
                type="email" 
                name="email" 
                className="form-control" 
                value={this.state.email} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
          <Row className="mb-3">
          
            <Col>
              <label>Mobile Number:</label>
              <input 
                type="text" 
                name="mobileNumber" 
                className="form-control" 
                value={this.state.mobileNumber} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Alternate Number:</label>
              <input 
                type="text" 
                name="alternateNumber" 
                className="form-control" 
                value={this.state.alternateNumber} 
                onChange={this.handleChange} 
              />
            </Col>
          </Row>
          
          <Row className="mb-3">
            <Col>
              <label>Qualification:</label>
              <input 
                type="text" 
                name="qualification" 
                className="form-control" 
                value={this.state.qualification} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Occupation:</label>
              <input 
                type="text" 
                name="occupation" 
                className="form-control" 
                value={this.state.occupation} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label>Permanent Address:</label>
              <input 
                type="text" 
                name="permanentAddress" 
                className="form-control" 
                value={this.state.permanentAddress} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Postcode:</label>
              <input 
                type="text" 
                name="postcode" 
                className="form-control" 
                value={this.state.postcode} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label>Authorized Training Center Address:</label>
              <input 
                type="text" 
                name="trainingCenterAddress" 
                className="form-control" 
                value={this.state.trainingCenterAddress} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
          <hr />
          <h5>Course Details:</h5>
          <Row className="mb-3">
            <Col>
              <label>Course:</label>
              <input 
                type="text" 
                name="course" 
                className="form-control" 
                value={this.state.course} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Course Duration:</label>
              <input 
                type="text" 
                name="courseDuration" 
                className="form-control" 
                value={this.state.courseDuration} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label>Course Fees:</label>
              <input 
                type="text" 
                name="courseFees" 
                className="form-control" 
                value={this.state.courseFees} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Paid Fees:</label>
              <input 
                type="text" 
                name="paidFees" 
                className="form-control" 
                value={this.state.paidFees} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Balance Fees:</label>
              <input 
                type="text" 
                name="balanceFees" 
                className="form-control" 
                placeholder={this.state.courseFees - this.state.paidFees}
                value={this.state.balanceFees} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <label>Authorized center seal and signature:</label>
              <input 
                id='bottom-fields'
                type="text" 
                name="course" 
                className="form-control" 
                value={this.state.course} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
            <Col>
              <label>Student's signature:</label>
              <input 
               id='bottom-fields'
                type="text" 
                name="courseDuration" 
                className="form-control" 
                value={this.state.courseDuration} 
                onChange={this.handleChange} 
                required 
              />
            </Col>
          </Row>
        </div>
        <Button variant="secondary" style={{width:'100vh', marginLeft:'98px'}} className="mt-3" onClick={this.downloadPDF}>
          Download as PDF
        </Button>
      </Container>
    );
  }
}

export default AdmissionForm;
