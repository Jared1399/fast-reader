import React, { Component } from 'react'
import axios from 'axios'


export default class Upload extends Component {

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }

    Selector = () =>{
        
        const fileSelector = document.getElementById('file-selector');
    
        fileSelector.addEventListener('change', (event) => {

                const fileList = event.target.files;

                console.log(fileList)

        });
    }

    onChangeHandler = event=>{
        
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
          })
    
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, { 
           
       })

    }

    

    render() {
        return (
            <div className="col-12 mt-5 mx-auto">
                <form action="/upload" method="POST">
                <input type="file" name="file" onChange={this.onChangeHandler} accept=".pdf, .txt" />
                    <div className="col-12 mt-2">
                    <button type="button" onClick={this.onClickHandler}>Upload</button> your text!
                    </div>
                    
                </form>

            </div>
        )
    }
}
