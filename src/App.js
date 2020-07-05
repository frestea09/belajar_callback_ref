import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.textInput = null
    this.setTextInput = this.setTextInput.bind(this)
    this.focusTextInput = this.focusTextInput.bind(this)
    this.showMe = this.showMe.bind(this)
  }
  setTextInput(inputElement){
    this.textInput = inputElement
  }
  focusTextInput(){
    if(this.textInput){
      this.textInput.focus()
    }
  }
  showMe(){
    console.log(this.textInput.value)
  }
  componentDidMount(){
    this.focusTextInput();
  }
  render(){
    return(
      <div className='App'>
        <h3>Hello World</h3>
        <input id='inputName' name='inputName' type='text' ref={this.setTextInput}/>
        <button onClick={this.showMe}>Show Me</button>
      </div>
    )
  }
}

export default App