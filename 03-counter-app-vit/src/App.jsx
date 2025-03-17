import PropTypes from "prop-types"

export const App = ({title, subTitle}) =>{
    return(
        <>
        <h1>{ title }</h1>
        <h2>{ subTitle }</h2>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  };
