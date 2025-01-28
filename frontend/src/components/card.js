import {  Card, CardBody, Col, Container, Row } from "react-bootstrap"
import { createElement } from "react"

//Structure of DATA 
//class_col=[[{key:"",classN:"",
//data:{type:"div,as,as",props:{classname:"",OnChange:(),}}}]]
//data_children=[{type:"",props:{},children:""}]

const data_component=(data)=>{
  return  JSON.parse(JSON.stringify(data)) 
}
const procedural_rows_columns=(array,children)=>{

    if (array.length==="0" || children.length==="0") {
      console.log("Empty Array, kindly fill it up!");
    }
    return(array.map((item)=>{
      return(
      <Row>  
        {
        item.map((element)=>{
          const data_obj=data_component(element.data);
          return(
          <Col key={element.key} xs={12} md={4} lg={4}className={element.classN}>
          {
          createElement(
            data_obj.type,
            data_obj.props,
            //create children 
            data_obj.children.map((element) => {
            const nested_data=data_component(element);
                return(
                  createElement(
                  nested_data.type,
                  nested_data.props,
                  nested_data.children)
                      )  
                                                })
          )
          }
          </Col>
          )
         })                  
        }
      </Row> 
            )
    }))
    


    }

const dynamic_card=(themecard,class_col,data_children)=>{
return (
    <Card className={themecard}>
    <CardBody>
    <Container>
    {procedural_rows_columns(class_col,data_children)}
    </Container>
    </CardBody>
    </Card>
   )  
  
}


export default dynamic_card
