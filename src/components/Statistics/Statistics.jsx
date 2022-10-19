import css from "./Statistics.module.css"
import propTypes from 'prop-types'

export const Statistics = ({docx, mp3, pdf, mp4}) => {
    return <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
  
    <ul className={css.statList}>
      <li className={css.item}>
        <span className={css.label}>.docx</span> <br/>
        <span className={css.percentage}>{docx}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>.mp3</span> <br/>
        <span className={css.percentage}>{mp3}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>.pdf</span> <br/>
        <span className={css.percentage}>{pdf}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>.mp4</span> <br/>
        <span className={css.percentage}>{mp4}</span>
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