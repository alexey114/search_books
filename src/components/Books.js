import React from "react";

const books = (props) => (
            <div className="Books_Search">
                <h1>Поиск книг</h1>
                <form onSubmit={props.acceptingBooks}>
                    <input type="text" name="booksSearch" placeholder="Название, автор и т.п."/>
                        <button>Поиск</button>
                </form>
            </div> 
        );

export default books;