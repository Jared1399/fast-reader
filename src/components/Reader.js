import React, { Component } from 'react'

export default class Clock extends Component {


    state = {
        text:this.props.textInput,
        displayText:'Press play',
        count: 0,
        speed: 300,
        status: 'OnPause'
    }

    componentDidMount() {

        this.event = document.addEventListener("keyup", (e) =>{ 
            switch (e.keyCode){
                case 32:
                    if(this.state.status === 'OnPause'){
                        this.Play()
                    } else if (this.state.status === 'OnPlay'){
                        this.Pause()
                    }
                    break;

                case 38:
                    this.SpeedUp()
                    break;

                case 40:
                    this.SpeedDown()
                    break;

                default:
                    return
            }
        });

        if(this.state.status === 'OnPlay'){
            this.time = setInterval(() => { this.Clock() }, this.state.speed)
        } else if (this.state.status === 'OnPause'){
            console.log()
        }
        
    }
  
    componentWillUnmount() {
        clearInterval(this.time);
    }
  
    

    Clock = () => {

        let countPlus = this.state.count + 1

        let display = this.state.text[this.state.count];

        this.setState({
            displayText:display,
            count: countPlus
            
        })
        
    }


    SpeedUp = () =>{
        
       clearInterval(this.time)

        let speedUp =  this.state.speed-25

        this.setState({
            speed: speedUp
        })

        clearInterval(this.time)

        this.time = setInterval(() => { this.Clock() }, this.state.speed)

        if(this.state.status === 'OnPause'){
            this.setState({
                status:'OnPlay'
            })
        } else if (this.state.status === 'OnPlay') {
           console.log()
        }

    }

    SpeedDown = () =>{
        
        clearInterval(this.time)

        let speedDown =  this.state.speed+25

        this.setState({
            speed: speedDown
        })

        this.time = setInterval(() => { this.Clock() }, this.state.speed)

        if(this.state.status === 'OnPause'){
            this.setState({
                status:'OnPlay'
            })
        } else if (this.state.status === 'OnPlay') {
           console.log()
        }
    }

    Pause = () =>{

        if(this.state.status === 'OnPause'){
            console.log()
        } else if (this.state.status === 'OnPlay') {
            clearInterval(this.time)

            this.setState({
                status:'OnPause'
            })
        }
        
    }

    Play = () =>{

        if(this.state.status === 'OnPause'){
            this.time = setInterval(() => { this.Clock() }, this.state.speed)
            this.setState({
                status:'OnPlay'
            })
        } else if (this.state.status === 'OnPlay') {
           console.log()
        }

        
    }


    render() {

        return (
            <div className="d-flex flex-row justify-content-center align-items-center" style={container}>
  
                <div className="p-2">
                    <div className="d-flex flex-column">
                        <div className="p-2">
                            <button onClick={this.Pause} style={buttonStop} className="px-4 py-3 font-weight-bold text-monospace border-0">STOP</button>
                        </div>
                        <div className="p-2">
                            <button onClick={this.Play} style={buttonStart} className="px-4 py-3 font-weight-bold text-monospace border-0">START</button>
                        </div>
                    </div>                   
                </div>
                <div className="inner-border py-5" style={boxStyle}>
                    <div className="py-5">
                        {this.state.displayText}                    
                    </div>
                </div>
                <div className="p-2">
                    <div className="p-2">
                        <div className="d-flex flex-column">
                        <div className="p-2"><div onClick={this.SpeedUp} style={speedButtons} className="font-weight-bold" >+</div></div>
                        <div className="p-2"><div onClick={this.SpeedDown} style={speedButtons} className="font-weight-bold" >-</div></div>
                        </div>                   
                    </div>                  
                </div>

                
            </div>
        )
    }
}

let boxStyle = {
    backgroundColor: '#1B1C20',
    color:'#FCF0F0',
    width: '12em',
    display:'inline-block',
    borderRadius: '0.1em',
    fontSize:'3.5em',
}


let container = {
    marginTop: "8em"
}

let buttonStop = {
    backgroundColor:'#1B1C20',
    color:'#FCF0F0',
    width:'7em'

}

let buttonStart = {
    backgroundColor:'#FA813A',
    color:'#1B1C20',
    width:'7em' 
}

let speedButtons = {
    fontSize:'3em',
}