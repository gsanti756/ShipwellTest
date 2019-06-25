/** @jsx jsx */
import { jsx } from '@emotion/core'
import logoImage from 'static/images/shipwell-logo.png'
import { container } from './styles'

const Header = () => (
  <div css={container}>
    <img src={logoImage} alt='logo' />
  </div>
)

export default Header
