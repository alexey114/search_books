import React from "react";
import Books from './components/Books';
import SortingBy from './components/SortingBy';
import Results from './components/Results.jsx';
// import BookCard from './components/BookCard.jsx';

const API_KEY = "AIzaSyBnggTekNbNBOc8PWu0fKLv6rV-P-UfgQE";

class App extends React.Component {    
  
  state = {
    imageLinks: undefined,  
    title: undefined,
    categories: undefined,
    authors: undefined,
    error: undefined
  } 
  

  receivingBooks = async (event) => {
    event.preventDefault();
    const booksSearch = event.target.elements.booksSearch.value; 

  if (booksSearch) {

    const api_url = await    
    fetch (`https://www.googleapis.com/books/v1/volumes?q=${booksSearch}&${API_KEY}`);
    const books = await api_url.json({});
    console.log(books);

    this.setState({
      totalItems:books.totalItems,
      smallThumbnail:books.items.[0].volumeInfo.thumbnail,
      title:books.items.[0].volumeInfo.title,
      categories:books.items.[0].volumeInfo.categories,
      authors:books.items.[0].volumeInfo.authors,
      error: undefined   
    }) ;
  } else {
    this.setState({
    imageLinks: undefined,  
    title: undefined,
    categories: undefined,
    authors: undefined,
    error: "введите название книги"
    });
  }
}



  render(){
    return(
      <div className="wrapper">
        <Books acceptingBooks = {this.receivingBooks}/>
        <SortingBy/>
        <Results
          totalItems={this.state.totalItems}
          smallThumbnail={this.state.smallThumbnail}
          title={this.state.title}
          categories={this.state.categories}
          authors={this.state.authors}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;