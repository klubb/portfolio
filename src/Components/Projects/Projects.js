import React, { Component } from 'react';
import './Projects.css'
import Modal from 'react-modal';
import Home from './media/home.png'
import {Link} from 'react-router-dom'

const customStyles = {
    content : {
      backgroundColor: 'white',
      marginTop: '100px',
      overflowY: 'hidden',
      boxShadow: '0px 0px, 1px 1px, 2px 2px, 3px 3px, 4px 4px, 5px 5px, 6px 6px, 7px 7px, 8px 8px, 9px 9px, 10px 10px, 11px 11px, 12px 12px',
      color: 'rgb(246, 90, 66)'
    }
  };

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    openModal = () => {
        this.setState({ open: true })
        this.props.hidden()
    }
    closeModal = () => {
        this.setState({ open: false })
        this.props.visible()
    }
    render() {
        return (
            
            <div id='projects-container'>
                <div className="projects-header">
                    <h1 className='projects'>Projects</h1>
                </div>
                <div className='project-section'>
                    <h1 className='blacky'>SKETCHFUL</h1>
                    <p>An interactive drawing and chat app that utilizes sockets to update live in real time to other clients.</p>
                    <br />
                    <p>Won "Most Technical" - awarded by DevMountain.</p>
                    <div>
                        
                    <a target='_blank' href='https://sketchful.live/#/'><button className='project-button2'>Live Site</button></a>
                    <a target='_blank' href='https://github.com/klubb/sketchful'><button className='project-button'>View More</button></a>
                    </div>
                </div>
                <Modal
                isOpen={this.state.open}
                onRequestClose={this.closeModal}
                style={customStyles}
                >
                <div className='modal-main'>
                    <div className="modal-left">
                        <div className="modal-title">
                            <h1 className="modal-title-text">KASPLOOT</h1>
                        </div>
                        <div className="modal-image">
                            <img src={Home} alt='' className='modal-image-style' />
                        </div>
                    </div>
                    <div className="modal-right">
                    
                    </div>
                </div>
                </Modal>
                <br /><br /><br /><br />
                <div className='project-section'>
                    <h1 className='blacky'>KODEWARS</h1>
                    <p>A CodeWars inspired Javascript Challenge Workspace to help people push their JavaScript Skills to the next level. Complete coding challenges, create challenges, compare your skills with others and track your progress.</p>
                    <br />

                    <div>

                    <a target='_blank' href='https://kodewars.net/#/'><button className='project-button2'>Live Site</button></a>
                    <a target='_blank' href='https://github.com/KennyCrump/clone-wars'><button className='project-button'>View More</button></a>
                    </div>
                </div>

                 
            </div>
            
        )
    }
}

export default Projects;