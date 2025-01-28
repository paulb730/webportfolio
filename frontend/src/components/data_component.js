

class child_components{

    constructor(type,props,children){

        this.type=type;
        this.props=props;
        this.children=children;
        

    }


}

class parent_component{

    constructor(key, classN, data) {
       
        this.key=key;
        this.classN=classN;
        this.data=data;
        
     }
   
    generate_components=(data_array)=>{
       
    
        try {
            data_array.push(new parent_component(this.key,this.classN,this.data));
        } catch (error) {
            console.log(error);
        }
    
          
    
    
    }


   


}





const child_in=new child_components()
const child=new child_components("h1",{className:"column1"},"HOLA MUNDO"   );

const test_obj=new parent_component
(
    "1","theme-1",child   
)


const test1_obj=new parent_component(  "2","theme-1",child) 


const array1=[]

test1_obj.generate_components(array1)
test_obj.generate_components(array1)




console.log(array1)
