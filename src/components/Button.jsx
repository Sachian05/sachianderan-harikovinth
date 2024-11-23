/**
 * @copyright 2024 Sachianderan Hari Kovinth
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from 'prop-types';


/**
 * Primary Button
 */

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  const downloadFile = () => { const link = document.createElement('a'); link.href = `https://sachian05.github.io/sachianderan-harikovinth/sachianderan-harikovinth-resume.pdf`; // Update with your PDF file path 
  link.setAttribute('download', 'sachianderan-harikovinth-resume.pdf'); // Specify the file name for download 
  document.body.appendChild(link); link.click(); document.body.removeChild(link); };
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + classes}
      >
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}


/**
 * Outline Button
 */

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
      >
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </a>
    )
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
        }
      </button>
    )
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

export {
  ButtonPrimary,
  ButtonOutline
}