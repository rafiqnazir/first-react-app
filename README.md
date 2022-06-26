- App.js : main js file

- There are only `1` defaut exports per file 

- data is sent using javascript object called `props` from parent to child

-  `Props`
```
import PropTypes from 'prop-types' // proptype is used for type_checking

export default function Header(props) {


}

// default value if not passed
Header.defaultProps = {
    title: "Default Prop",

}
// defining types, if these types are not matched or some required params aren't passed then we will not show
// any error rather a warning will be displayed in console
Header.propTypes = {
    title : PropTypes.string,
    drop_down: PropTypes.bool,
    is_admin: PropTypes.bool.isRequired,
}

// to call Header function
<Header title={"My header"},is_admin={false} />
```
- if proptypes are not matching then the program will still work, but we will get warning in console. This helps indebugging

#### Important Hooks
- `useNavigate `, `useParams`