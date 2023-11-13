import React, { useContext } from "react";
import Navigation from '../navigation';
import Heading from '../heading';
import Footer from '../footer';
import { useState, useEffect, useRef, useMemo } from "react";
import { CardGroup, CardHeader, Row, Card, CardBody, CardText, CardTitle, Button, Col, FormGroup, Form, Label, Input } from 'reactstrap';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from "jodit-react";


const CreateNews = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const [news, setNews] = useState({}); 
    
    const [formValue, setformValue] = React.useState({
        title: '',
        description: '',
        labels: ''
      });

    const handleChange = (e) => {
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
          });
    }

    const notify = () => toast("Wow so easy !");
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        const news = {
            title: formValue.title,
            description: content, 
            labels: formValue.labels
        };

        console.log("News = "+news.title, news.description, news.labels);
      
        try {
          // make axios post request
          toast.info("Creating news, please wait!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: true,
            theme: "dark",
          });
          const response = await axios({
            method: "post",
            url: "/api/v1/news",
            data: news,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(res=>{
                console.log(res);
                console.log(res.data);
                setTimeout(() => {
                    toast.success("Successfuly created news!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: true,
                      theme: "light",
                    });
                  }, 1);
                navigate("/checkout", {state : {
                    title: res.data.title,
                    description: res.data.description, 
                    file: res.data.file, 
                    id: res.data.id,
                    createdBy: res.data.createdBy,
                    createdOn: res.data.createdOn,
                    labels: res.data.labels
                    
                }}) 
            })
        } catch(error) {
          console.log(error);
          toast.error("Something went wrong, please try again!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: true,
            theme: "dark",
          });
        
        }
      }


    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />
            <Navigation/>
            <Heading/>
            <hr/>
            <h2 style={{textAlign:'center'}}>News </h2>
            <Row>
                <Col sm="2"/>{/* <Button type="" className="btn btn-warning" onClick={gotToNextPage}>Checkout</Button></Col> */}
                <Col sm="8">
                    <Card
                        className="my-2"
                        color="warning"
                        outline
                    > 
                        <CardHeader style={{fontWeight:'bold'}}>
                            <CardGiftcardIcon style={{textAlign:'left'}}/>
                            <span style={{textAlign:'center'}}> Create News</span>
                        </CardHeader>
                        <CardBody className="my-2" color="warning">                  
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Title *</Label>
                                    <Input 
                                        id="title"
                                        type="text" 
                                        placeholder="Enter Title"
                                        name="title" 
                                        className="form-control" 
                                        value={formValue.title}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Label style={{marginTop:'10px', paddingTop:'5px'}}>Description *</Label>
                                    <JoditEditor 
                                    id="description"
                                    name="description"
                                    ref={editor}
                                    value={content}
                                    uploader="true"
                                    tabIndex={1} // tabIndex of textarea
                                    onChange={newContent => setContent(newContent)}
                                    />
                                    
                                    <Label style={{marginTop:'10px', paddingTop:'5px'}}>Labels </Label>
                                    <Input 
                                        id="labels"
                                        type="text" 
                                        placeholder="Enter comma seperated labels"
                                        name="labels" 
                                        className="form-control" 
                                        value={formValue.labels}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Button type="submit" className="btn btn-success" style={{marginRight:'5px',marginTop:'10px', paddingTop:'5px'}}>Submit</Button>
                                    <Button type="reset" className="btn btn-warning" style={{marginRight:'5px',marginTop:'10px', paddingTop:'5px'}} onClick={()=>setformValue({})}>Reset</Button>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

export default CreateNews;