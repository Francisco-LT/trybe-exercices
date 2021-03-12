import { Component } from 'react';
import linkedinIcon from '../images/linkedinIcon.svg'
import githubIcon from '../images/githubIcon.svg'

class Footer extends Component {
  render() {
    return (
      <div className="footerMenu">
        <a
          href="https://www.linkedin.com/in/francisco-lira-torres/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={linkedinIcon} 
            alt="ícone do linkedin"
            className="icones"
          />
        </a>
        <a
          href="https://github.com/Francisco-LT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={githubIcon} 
            alt="ícone do github"
            className="icones"
          />
        </a>
      </div>
    )
  }
}

export default Footer;