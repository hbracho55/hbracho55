
const CerrarSesion = (props) => {

    localStorage.removeItem("token");
    props.history.push("/");

    return null;
}
    
export default CerrarSesion;