import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About'
import scrollToComponent from 'react-scroll-to-component'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY !== 0) this.setState({ animate: true })
    else this.setState({ animate: false })
  }

  handleClick = (section) => {
    if (section === 'LandingScroll') scrollToComponent(this.LandingScroll, { offset: -100, align: 'top', duration: 1000 })
    if (section === 'ProjectsScroll') scrollToComponent(this.ProjectScroll, { offset: -140, align: 'top', duration: 1000 })
    if (section === 'SkillsScroll') scrollToComponent(this.SkillsScroll, { offset: -100, align: 'top', duration: 1000 })
    if (section === 'AboutScroll') scrollToComponent(this.AboutScroll, { offset: -100, align: 'top', duration: 1000 })
    if (section === 'ContactScroll') scrollToComponent(this.ContactScroll, { offset: -90, align: 'top', duration: 1000 })
  }

  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <Header animate={this.state.animate} click={this.handleClick} />
        <section ref={(section) => { this.LandingScroll = section }}>
          <Landing click={this.handleClick} />
        </section>
        <section ref={(section) => { this.ProjectScroll = section }}>
          <Projects />
        </section>
        <section ref={(section) => { this.SkillsScroll = section }}>
          <Skills />
        </section>
        <section ref={(section) => { this.AboutScroll = section }}>
          <About />
        </section>
        <section ref={(section) => { this.ContactScroll = section }}>
          <Contact />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
