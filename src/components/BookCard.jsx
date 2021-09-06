// import React, {useState} from 'react'
// import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';

// const BookCard = ( { 
//     thumbnail
//     title
//     pageCount
//     language
//     authors
//     publisher
//     description
//     previewLink
//     infoLink
// }) => {
//     // States
//     const [modal, setModal] = useState(false);
//     const toggle = () => setModal (!modal);

//         return (
//         <Card style={ {width: '233px'}} className='m-auto'>
//             <Cardimg 
//             top 
//             style={{width: '100%', height: '233px'} } 
//             src={thumbnail} 
//             alt='card image'
//             />

//             <CardBody>
//                 <CardTitle className='card-title'>{ title} </CardTitle>
//                 <Button onClick={toggle}>More info</Button>
//             </CardBody>
//             <Modal isOpen={ modal } toggle = { toggle }>
//                 <div className="modal-header d-flex justify-content-center">
//                     <h5 className='modal-title text-center' id='exampleModalLabel'>{ title}</h5>
//                 </div>
//             </Modal>
                
//         </Card>
//         );
// };

// export default BookCard