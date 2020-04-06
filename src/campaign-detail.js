import { useRouteMatch } from 'react-router-dom';
import * as bs from 'react-bootstrap';

export default function ProductDetail(props) {
    const match = useRouteMatch("/campaign/:campaign")
    //const context = React.useContext(AppContext)

    const campaigns = context.products.find(({ id }) => id === parseInt(match.params.id))


    if (campaigns == null) {
        return (
            <bs.Container>
                Campaign not found.
            </bs.Container>
        )
    }
    else {
        return (
            <bs.Container>
                <bs.Row>
                    <bs.Col md="8" className="my-4">
                        
                    </bs.Col>
                    <bs.Col md="4">
                        
                    </bs.Col>
                </bs.Row>
                <bs.Row>

                </bs.Row>
            </bs.Container>
        )
    }
}