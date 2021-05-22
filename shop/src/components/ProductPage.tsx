import React, {useState} from "react";
import {Card, Typography, Box, Button, Grid} from "@material-ui/core";
import ps5 from "../images/placeholder.jpeg"
import {RouteComponentProps, withRouter} from "react-router-dom"
import "../styles/ProductPage.css";

type ProductPageParams = {
    id: string;
}

type ProductPageProps = RouteComponentProps<ProductPageParams>

interface State {
    isLoading: boolean
    title: string;
    price: number;
    description: string
}

const description: string = `
Konsola PS5 przenosi gaming na nowy poziom, którego nawet się nie spodziewasz.
Doświadcz błyskawicznego ładowania gier i aplikacji dzięki ultra szybkiemu dyskowi SSD. Poczuj rozgrywkę jak nigdy dotąd dzięki haptycznym, adaptacyjnym triggerom, dźwiękowi 3D oraz zupełnie nowej generacji gier.
Play Has No Limits™.

Prędkość światła

Wykorzystaj moc dostosowanego procesora, karty graficznej, dysku SSD ze zintegrowanym układem I/O, które redefiniują sposób działania konsoli PlayStation®.
Oszałamiające gry
Podziwiaj niesamowitą grafikę i poznaj nowe funkcje PS5™.
Zanurz się w rozgrywkę
Doświadcz nowego, głębszego poziomu rozgrywki dzięki haptycznym, adaptacyjnym triggerom i technologii dźwięku 3D.`

const ProductPage: React.FC<ProductPageProps> = ({match}) => {

    const [state, setState] = useState<State>({
        isLoading: true,
        title: "PlayStation 5",
        price: 2899.99,
        description: description
    })

    return (
        <Box className={"main-container"}>
            <Card style={{minWidth: "90vw", minHeight: "90vh", padding:"2vh 2vw 2vh 2vw"}}>
                <Box style={{display: "flex"}}>
                    <img src={ps5}/>
                    <Box style={{display: "flex", flexDirection:"row", minWidth: "50%", justifyContent:"flex-end"}}>
                        <Box style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <Typography variant={"h1"}>{state.title}</Typography>
                            <Typography variant={"h1"}>{state.price}zł</Typography>
                            <Button variant={"contained"}> Dodaj do koszyka</Button>
                        </Box>
                    </Box>
                </Box>
                <div style={{whiteSpace: "pre-line", textAlign: "left"}}>{state.description}</div>
            </Card>
        </Box>
    )
}

export default withRouter(ProductPage)