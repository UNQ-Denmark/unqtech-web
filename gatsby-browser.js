import './src/components/shared/global.css';
import { isBrowser } from './src/components/shared/utils';


const React = require("react")

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    if (!isBrowser()) return 
  return <div {...props}>{element}</div>
}