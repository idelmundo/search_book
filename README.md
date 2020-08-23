
   
  <p>
  <img src="https://media.giphy.com/media/h4ULnZjUYtkEw3u903/giphy.gif"width="450"/></p>
  <hr>
  
  ## Table Of Contents
  |   |       | |
| ------------- |:-------------:| -----:|
| [E-mail](#email)| [Project Title](#Project-title)| [Description](#description)|
| [Installation](#installation)| [Usage](#usage)| [License](#license)|
| [Contribute](#contribute)| [Tests](#tests)| [Questions](#questions)|
  <hr>

  ## Email 
  idelmundo@gmail.com
  <hr>
      
  ## Project title 
  clickyGame
  <hr>

  ## Description 
 Mern application that uses google books API to search for a book title. Users can view, save and delete the book. The user can search for any book in the search bar. 
here's an example of how we are using API to query. We use react hooks to set books object.  

    ``` const loadBooks = () => {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        console.log(event.target)
        setBookSearch({ ...bookSearch, [name]: value })
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(bookSearch)
        API.bookSearch(bookSearch.title) 
    ```

  <hr>

  ## Installation 
  To get this app running clone this repository and run npm i then you're ready to go.
  <hr>


  ## License 
  MIT
  <hr>

  ## Contribute
  Github and my readMe generator 
  <hr>

  ## Tests 
  js
  <hr>

  ## Questions 
  
  <hr>

  ![license](https://img.shields.io/badge/license-MIT-orange.svg)
        