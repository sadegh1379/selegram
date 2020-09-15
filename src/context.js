import React , {createContext ,Component}  from 'react';
import {Data } from './data';


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
            subTotal += Number(item.payment);
            
        })

        this.setState(()=>{
            return{
                payment : subTotal ,
                
            }
        })
    }

    // add to cart
    addToCart = (id , count , color) =>{
        let tempProduct = [...this.state.data];
        const index= tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        product.inCart = true;
        const newProduct = {...product , buy_color: color , payment : product.main_price * count , count : JSON.parse(count)}
        
        this.setState(()=>{
            return{
                cart : [...this.state.cart , newProduct],
                data : tempProduct
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

     // find product in data********************************************
     findProduct = (id)=>{
        const product =  this.state.data.find(item => item.id === id);
        return product;
     }

    //  findProduct in Cart
     findProductCart = (id)=>{
        const product =  this.state.cart.find(item => item.id === id);
        return product;
     }

    // handle datail********************************************
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

    // change Phone Color Price *********************************
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

        this.setState(()=>{
            return{
                data : tempProduct
            }
        })
    }

    // add like
    addLike = (id)=>{
        let tempProduct = [...this.state.data];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        

        product.liked = product.liked + 1 ;
       

        this.setState(()=>{
            return{
                data : tempProduct ,
                detail : product
            }
        })
    }

     // seve (add book mark)
     addBookMark = (id)=>{
        let tempProduct = [...this.state.data];
        const index = tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
       

        product.saved = !product.saved ;
        
        this.setState(()=>{
            return{
                data : tempProduct ,
                detail : product
            }
        })
    }

       // decreament**********************************************
       decreament = (id)=>{
        let temp = [...this.state.cart];
        const index = temp.indexOf(this.findProductCart(id));
        const product = temp[index];
        if(product.count === 1){

           this.handleRemoveItem(id);
            
        }else{
            product.count = product.count - 1 ;
            product.payment = product.main_price * product.count ;


            this.setState(()=>{
               return{
                cart : temp ,
                
               } 
             } , ()=>this.setTotal())
        }
    
}

    // increament**********************************************
        increament = (id)=>{
            let temp = [...this.state.cart];
            const index = temp.indexOf(this.findProductCart(id));
            const product = temp[index];
            product.count = product.count + 1
            product.payment = product.main_price * product.count ;

            this.setState(()=>{
            return{
                cart : temp , 
                
            } 
            } , ()=>this.setTotal())
        }

    //  removeItem
    removeItem = (id) =>{
        let tempProduct = [...this.state.data];
        const index= tempProduct.indexOf(this.findProduct(id));
        const product = tempProduct[index];
        product.inCart = false;

        const cartData = [...this.state.cart];
        const newCartData = cartData.filter((item)=>item.id !== id);

        
        this.setState(()=>{
            return{
                cart : newCartData,
                data:tempProduct
            }
        } , ()=>this.setTotal())

    }

    render() {
        return (
            <context.Provider value={{
                    ...this.state,
                    handleDetail : this.handleDetail,
                    changeColor:this.changeColor,
                    addToCart : this.addToCart,
                    addLike : this.addLike,
                    addBookMark : this.addBookMark,
                    decreament: this.decreament,
                    increament : this.increament,
                    removeItem : this.removeItem,
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

const DataConsumer = context.Consumer;

export { DataProvider , DataConsumer , context};
