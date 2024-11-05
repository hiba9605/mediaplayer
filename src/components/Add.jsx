// rafce
import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI'


const Add = ({setAddResponseFromHome}) => {

  const [invalidYouTubeLink,setInvalidYouTubeLink]=useState(false)
  const [videoDetails,setVideoDetails]=useState({
    caption:"",
    imgUrl:"",
    youtubeLink:""
  })
  console.log(videoDetails);
  


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedlinkFromYputubeLink=(userInputYoutubeLink)=>{
    // steps creating embed link from youtube link
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split('v=')[1].slice(0,11));
      const videoId=userInputYoutubeLink.split("v=")[1].slice(0,11)
      setInvalidYouTubeLink(false)
      setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      
    }else{
      // alert("invalid youtube link .....please try with other")
      setInvalidYouTubeLink(true)
      setVideoDetails({...videoDetails,youtubeLink:""})
    }

  }

  const handleUploadVideo= async()=>{
    // object destructure:const {key1,key2..}=object name
    const {caption,imgUrl,youtubeLink}=videoDetails
    if(caption && imgUrl && youtubeLink) {
      // store videodetails permanently
      // alert("preceed to store video details permanently")
      try{
        const result= await saveVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          // video added to json files
          alert("video uploaded successfully")
          handleClose()

          // pass result to view component
          setAddResponseFromHome(result)
        }else{
          console.log(result);
          
        }
        
      }catch(err){
        console.log(err);
        
      }

    }else{
      alert("please fill the form")
    }
  }


  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='border rounded p-3'>
         <FloatingLabel  controlId="floatingCaption" label="Video-Caption">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video-Caption" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video-Image Url">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video-Image url" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingLink" label="Video-Youtube Url">
        <Form.Control onChange={e=>extractingEmbedlinkFromYputubeLink(e.target.value)} type="text" placeholder="Video-Youtube Url" />
      </FloatingLabel>
      {
        invalidYouTubeLink &&
        <div className="text-danger fw-bolder mt-2">invalid youtube link......please try with other</div>
      }

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='bg-info' variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add