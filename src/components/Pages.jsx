import React from 'react'
import BuildRate from './boq/BuildRate'
import Construction from './boq/Construction'
import Equip from './boq/Equip'
import Est from './boq/Est'
import Lab from './boq/Lab'
import Sup from './boq/Sup'

const Pages = ({activePage, setActivePage}) => {
    console.log(activePage)
  return (
    <div className="activePage">
        {activePage.id === '1' ? (<BuildRate setActivePage={setActivePage} activePage={activePage}/>) : null}
        {activePage.id === '2' ? (<Est setActivePage={setActivePage} activePage={activePage}/>) : null}
        {activePage.id === '3' ? (<Lab setActivePage={setActivePage} activePage={activePage}/>) : null}
        {activePage.id === '4' ? (<Equip setActivePage={setActivePage} activePage={activePage}/>) : null}
        {activePage.id === '5' ? (<Construction setActivePage={setActivePage} activePage={activePage}/>) : null}
        {activePage.id === '6' ? (<Sup setActivePage={setActivePage} activePage={activePage}/>) : null}
    </div>
  )
}

export default Pages
