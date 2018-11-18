import React, { Component } from 'react'
import './Header.css'
import Logo from './kaleblogo.png'
import SmallerLogo from './kaleblogo2.png'
import HamburgerMenu from 'react-hamburger-menu'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            hide: true
        }
    }

    handleClick = () => {
        this.setState({ open: !this.state.open })
        setTimeout(() => {
            this.setState({ hide: !this.state.hide })
        }, 500);
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    render() {
        return (
            <div id='header-container' className={this.props.animate ? 'center get-small' : 'center'}>
                {this.state.open ?
                    <div id='drop-down' className='show animated slideInDown faster'>
                        <div id='drop-list'>
                            <div className='drop-text' onClick={() => {
                                this.props.click('ProjectsScroll')
                                this.handleClose()
                            }}>PROJECTS</div>
                            <div className='drop-text' onClick={() => {
                                this.props.click('SkillsScroll')
                                this.handleClose()
                            }}>SKILLS</div>
                            <div className='drop-text' onClick={() => {
                                this.props.click('AboutScroll')
                                this.handleClose()
                            }}>ABOUT</div>
                            <div className='drop-text' onClick={() => {
                                this.props.click('ContactScroll')
                                this.handleClose()
                            }}>CONTACT</div>
                        </div>
                    </div>
                    :
                    <div id='drop-down2' className={this.state.hide ? 'hide animated slideOutUp faster' : 'animated slideOutUp faster'}>
                        <div id='drop-list'>
                            <div className='drop-text'>PROJECTS</div>
                            <div className='drop-text'>SKILLS</div>
                            <div className='drop-text'>ABOUT</div>
                            <div className='drop-text'>CONTACT</div>
                        </div>
                    </div>
                }
                <div id='mobile-view'>
                    <img className='logo-smaller' src={SmallerLogo} alt="" onClick={() => this.props.click('LandingScroll')} />
                    <div id='hamburger-container' className='center'>
                        <div style={{ cursor: 'pointer' }}>
                            <HamburgerMenu
                                isOpen={this.state.open}
                                menuClicked={this.handleClick}
                                width={15}
                                height={15}
                                strokeWidth={4}
                                rotate={0}
                                color='rgb(0, 103, 246)'
                                borderRadius={0}
                                animationDuration={0.3}
                            />
                        </div>
                    </div>
                </div>
                <div id='desktop-view'>
                    <div id='desktop-links'>
                        <img className={this.props.animate ? 'logo smaller-image' : 'logo'} src={Logo} alt="" onClick={() => this.props.click('LandingScroll')} />
                        <img className={this.props.animate ? 'logo-smaller smaller-image' : 'logo-smaller'} src={SmallerLogo} alt='' onClick={() => this.props.click('LandingScroll')} />
                        <h1 className='link-text' style={{ zIndex: '1' }} onClick={() => this.props.click('ProjectsScroll')}>PROJECTS</h1>
                        <h1 className='link-text' style={{ zIndex: '1' }} onClick={() => this.props.click('SkillsScroll')}>SKILLS</h1>
                        <h1 className='link-text' style={{ zIndex: '1' }} onClick={() => this.props.click('AboutScroll')}>ABOUT</h1>
                        <button className='cool-button' onClick={() => this.props.click('ContactScroll')}>CONTACT</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header