import React from "react";

// const Results = () => {  //handleCards
//     console.log(cards);
//     const items = cards.map((item, i) => {
//         let thumbnail = '';
//         if(item.volumeInfo.imageLinks.thumbnail) {
//             thumbnail = item.volumeInfo.imageLinks.thumbnail;
//         }

//         return (
//             <div className="col-lg-4" key={item.id}>
//                 <BookCard 
//                 thumbnail={ thumbnail} 
//                 title={ item.volumeInfo.title}
//                 pageCount={ item.volumeInfo.pageCount}
//                 language={ item.volumeInfo.language}
//                 authors={ item.volumeInfo.authors}
//                 publisher={ item.volumeInfo.publisher}
//                 description={ item.volumeInfo.description}
//                 previewLink={ item.volumeInfo.previewLink}
//                 infoLink={ item.volumeInfo.infoLink}
//                 />
//             </div>
//         );
//     });
//     if (loading) {
//         return (
//             <div className='d-flex justify-content-center mt-3'>
//                 <Spinner style={ {width: '3rem', height: '3rem'} }/>            
//             </div>
//         );
//         } else {
//             return (
//                 <div className='container my-5'>
//                     <div className="row"> { items}</div>
//                 </div>
//             );
//         }
//     };

//     return(
//         <div className='w-100 h-100'>
//             {Results()}
//             {mainHeader()}
//             <ToastContainer />
//         </div>
//     );

const Results = (props) => ( 
    <div className="Books_Results">
        {props.totalItems &&
            <div>
                <h3>Всего результатов: {props.totalItems} </h3>
                <section>
                    <img src="{props.smallThumbnail}" alt="Изображение"></img>
                    <h4> Название книги: {props.title}</h4>
                    <h5> Название категории: {props.categories}</h5>
                    <h6> Имя автора: {props.authors}</h6>
                </section>
            </div>
            }
            <p>{props.error}</p>
        </div>
    );
export default Results;

