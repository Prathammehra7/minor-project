import React from 'react'

import SectionHead from './SectionHead'
import {CgGym} from 'react-icons/cg'
import {values} from '../data'
import Card from '../Ul/Card'

const Trainers = () => {
  return (
<section className='values'>
    <div className='container values__container'>
        <div className='values__left'>
            <div className='values__image'>
           <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </div>
        </div>
        <div className='values__right'>
            <SectionHead  icon={<CgGym/>}title="Trainers" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nisi nobis enim unde pariatur nulla.</p>
            <div className="values__wrapper">
                {
                    values.map(({id, trainer, title, desc})=>{
                        return <Card key={id} className="values__value">
                       <img src={trainer} alt="" />
                        <h4>{title}</h4>
                        <small>{desc}</small>
                            </Card>
                    })
                }
            </div>
        
        </div>
    </div>
</section>

    )
}

export default Trainers