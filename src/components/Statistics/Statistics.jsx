// import css from "./Statistics.module.css"
import propTypes from 'prop-types'

export const Statistics = ({docx, mp3, pdf, mp4}) => {
    return <section className="statistics">
    <h2 className="title">Upload stats</h2>
  
    <ul className="stat-list">
      <li className="item">
        <span className="label">.docx</span>
        <span className="percentage">{docx}</span>
      </li>
      <li className="item">
        <span className="label">.mp3</span>
        <span className="percentage">{mp3}</span>
      </li>
      <li className="item">
        <span className="label">.pdf</span>
        <span className="percentage">{pdf}</span>
      </li>
      <li className="item">
        <span className="label">.mp4</span>
        <span className="percentage">{mp4}</span>
      </li>
    </ul>
  </section>
}

Statistics.propTypes = { 
    docx: propTypes.number.isRequired, 
    pdf: propTypes.number.isRequired, 
    mp3: propTypes.number.isRequired,
    mp4: propTypes.number.isRequired,
}