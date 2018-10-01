import * as React from 'react';



export interface Iprops{
    getWeather:any
    

}

class Form extends React.Component<Iprops> {

    public render(){

        return(
            
            <form onSubmit={this.props.getWeather}>
            <div className="form-row align-items-center">
    <div className="col-auto">
    
      <input type="text" name="City" className="form-control mb-2" id="inlineFormInput" placeholder="City..."/>
    </div>
    <div className="col-auto">
  
      
       
        <input type="text" name="Country" className="form-control mb-2" id="inlineFormInpup" placeholder="Country..."/>
      </div>
      <div className="col-auto my-3">
                <button>getWeather</button>
                </div>
                </div>
            
            </form>


            
        );

    }
}


  


export default Form;
