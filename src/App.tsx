import React, {useState} from 'react'
import './App.css'
import {Rating, RatingValueType} from './components/Rating/Rating'
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
import {Accordion} from './components/Accordion/Accordion'
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff'
import {OnOff} from './components/OnOff/OnOff'


export const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className="App">
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            />

            {/*<Rating value={2}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

