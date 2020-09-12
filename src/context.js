import React , {createContext ,Component}  from 'react';
import {Data , Detail} from './data';


const context = createContext();


 class DataProvider extends Component {
    constructor(props){
        super(props);

        this.state={
            data : Data,
            detail : Data[0] ,
            cart : [],
            payment : 0 ,
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

     // set total************************************

     setTotal = ()=>{
        let subTotal = 0 ;
        this.state.cart.map((item)=>{
            subTotal += Number(item.main_price)
        })

        this.setState(()=>{
            return{
                payment : subTotal ,
                
            }
        })
    }

    // add to cart
    addToCart = (item) =>{
        this.setState(()=>{
            return{
                cart : [...this.state.cart , item]
            }
        }  , ()=>this.setTotal())
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

    // change Phone Color Price 

    changeColor = (id , color) =>{
        let tempProduct = [...this.state.data];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        const productD = this.state.detail;

        switch (color) {
            case 'grey':
                product.main_price = product.price.grey;
                productD.main_price = product.price.grey;

                product.main_color = color;
                productD.main_color = color;

                break;
            case 'white':
                product.main_price = product.price.white;
                productD.main_price = product.price.white;

                product.main_color = color;
                productD.main_color = color;
                break;
            case 'red':
                product.main_price = product.price.red;
                productD.main_price = product.price.red;

                product.main_color = color;
                productD.main_color = color;
                break;
            case 'blue':
                product.main_price = product.price.blue;
                productD.main_price = product.price.blue;

                product.main_color = color;
                productD.main_color = color;
                break;
            default :
                alert("رنگ مورد نظر موجود نیست");
                
                break;
        }

        // console.log(product);

        this.setState(()=>{
            return{
                data : tempProduct
            }
        })
    }

    render() {
        return (
            <context.Provider value={{
                    ...this.state,
                    handleDetail : this.handleDetail,
                    changeColor:this.changeColor,
                    addToCart : this.addToCart,
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

const DataConsumer = context.Consumer;

export { DataProvider , DataConsumer , context};
