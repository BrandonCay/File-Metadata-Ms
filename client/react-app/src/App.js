import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  } from "module";
import './App.css';

/********* 
  Notes:
  -by default, size may be to fit which prevents centering. BS Components are styled
   versions of html versions. Therefore, one treats them as elements in a flex-container. Form is container to send info not a row.
  */
const FormFile=Form.File;
const FormGroup=Form.Group;
const FormRow=Form.Row;
const FormLabel=Form.Label;
const FormControl=Form.Control;

function App() {
  return (
    <div>
    <Container fluid={true} style={{margin:"0"}}>
         {/*} <Form action="/api/form" method="post" encType="multipart/form-data">
            <Row className="justify-content-sm-center align-items-center" style={{height:'100vh'}}>      
              <Col sm="2">
                  <FormFile name="upfile" custom={false}/>
              </Col>    
              <Col sm="1">
                  <Button variant="primary" type="submit">Submit</Button>        
              </Col>
          </Row>
  </Form>*/}
              <Row className="justify-content-center align-items-center" style={{height:'100vh', width:"100vw", margin:"0"}}>
                <Col sm="5"style={{padding:"1%", border:"2px solid gray", borderRadius:"5px", background:'white'}}>
                <Form action="/api/form" method="post" encType="multipart/form-data">
                  <FormGroup as={Row} className="justify-content-center" style={{background:''}}>
                  <Col sm="5" style={{background:''}}>
                      <h1 style={{textAlign:"center", background:''}}>
                        File Uploader
                      </h1>
                      <p style={{textAlign:'center', margin:0}}>
                          files supported: .txt, .jpeg, .png
                      </p>
                  </Col>
                  </FormGroup>
                  <FormGroup as={Row}>
                    <Col>
                      <FormLabel htmlFor="upFile" srOnly={true}>file uploader</FormLabel>
                      <FormFile name="upfile" id="upFile"custom={false} style={{width:'100%'}} required/>
                 
                    </Col>
                 </FormGroup>
                  <FormGroup as={Row}>
                    <Col>
                      <Button variant="primary" type="submit" style={{width:'100%'}}>Submit</Button>
                     </Col>
                  </FormGroup>
                </Form>
                </Col>
              </Row>
    </Container>
                  <div className="backG"></div>
                  <div className="backG" id="backG2"></div>
                  </div>
  );
}

/*
      <div className="App">
          <form action="/api/form" method="post" enctype="multipart/form-data">
              <label htmlFor="fileInput"></label>
              <input type="file" name="upfile" id="file"/>
              <input type="submit"/>
          </form>
      </div>
*/
export default App;
