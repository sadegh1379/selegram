import React , {createContext ,Component}  from 'react';
import {Data , Detail} from './data';


const context = createContext();


 class DataProvider extends Component {
    constructor(props){
        super(props);

        this.state={
            data : [],
            detail : Detail ,
            kala:[{
                name:'sadegh',
                img:'./img/kala.png',
                    images:[{
                        img:'./img/ice.png',
                    },
                    {
                        img:'./img/ice.png',
                    },
                    {
                        img:'./img/ice.png',
                    },
                    {
                        img:'./img/ice.png',
                    },
                    {
                        img:'./img/ice.png',
                    }
                ]                
            },
            {
                name:'sadegh',
                img:'./img/kala.png'                
            },
            {
                name:'sadegh',
                img:'./img/kala.png'                
            },
            {
                name:'sadegh',
                img:'./img/kala.png'                
            },
            {
                name:'sadegh',
                img:'./img/kala.png'                
            },
            {
                name:'sadegh',
                img:'./img/kala.png'                
            },
            {
                name:'sadegh',
                img:'./img/kala.png'                
            },
            {
                name:'sadegh',
                img:'./img/kala.png'                
            }
        ],
        select:'./img/ice.png'
        }
    }

    componentDidMount(){
        this.handleset();
    }

     // handle set************************************************
     handleset =  () =>{
        let tempProducts = []
     
         Data.forEach(item => {
             const singleItem = {...item};
             tempProducts = [...tempProducts , singleItem];
         }
          )
 
          this.setState(()=>{
              return{
                  data : tempProducts,
                 
              }
          })
 
          
     }

     // find product********************************************

     findProduct = (id)=>{
        const product =  this.state.data.find(item => item.id === id);
        return product;
     }

    // handle datail************************************

    handleDetail = (id)=>{
        
        let tempProduct = [...this.state.data];
        const index= tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];

        this.setState(()=>{
            return{
                detail:product ,
                
            }
        })

    }

    render() {
        return (
            <context.Provider value={{
                    ...this.state,
                    handleDetail : this.handleDetail
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

const DataConsumer = context.Consumer;

export { DataProvider , DataConsumer , context};
