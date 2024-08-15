import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Made with &hearts; by <a href="https://defcon007.com" target="_blank">Defcon</a> |  <a href="https://github.com/prompted365/postman-to-openapi-online" target="_blank">GitHub</a> | Built with: <a href="https://github.com/zeit/next.js" target="_blank">Next.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
