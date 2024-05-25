
import "./style.css"
import Button from 'react-bootstrap/Button';

const GoTo = ( {name})=>{
/* `/products/category/${item._id}` */
    return(

      <Button style={{marginBottom:"20PX"}} variant="outline-info">{name}</Button>

    )
}
export default GoTo