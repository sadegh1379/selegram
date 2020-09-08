import React , {createContext ,Component}  from 'react';

const context = createContext()

 class DataProvider extends Component {
    constructor(props){
        super(props);

        this.state={
            kala:[{
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
            },
            {
                name:'sadegh',
                img:'./img/kala.png'                
            }
        ],
        select:'./img/ice.png'
        }
    }
    render() {
        return (
            <context.Provider value={{
                    ...this.state
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

const DataConsumer = context.Consumer;

export { DataProvider , DataConsumer , context};
