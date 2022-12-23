import React from 'react'
import { SiBuffer } from 'react-icons/si'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Card from '../Ul/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'


const Programs = () => {
  return (

    <section className='programs' >
      <div className="container programs__container">
        <SectionHead icon={<SiBuffer/>} title="programs" />

      <div className="programs__wrapper">
        {
          programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id} >
                <span>{icon}</span>
                <h4>{title}</h4>
                <h5>{info}</h5>
              <Link to={path} className="btn sm">Learn More 
              <AiFillCaretRight/>
              </Link>
              </Card>

            )
          })
        }
        </div>
      </div>
    </section>


  )
}

export default Programs