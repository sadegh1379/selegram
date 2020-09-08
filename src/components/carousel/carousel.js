function Item(props)
{
    return (
        <Paper>
            <p>{props.item.name}</p>
        
            <img style={{width:'100px'}} src={props.item.img} alt=""/>
        </Paper>
    )
}

 {/* <Carousel
            autoPlay={false}
            
            >
            {
                data.kala.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel> */}