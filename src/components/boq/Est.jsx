import React from 'react'
import { FaAngleLeft} from "react-icons/fa";

const items = [
  { id: '1', name: 'Earthwork', types: ['Site Clearance', 'Excavation of Trench', 'Earth Backfill', 'Removal of Surplus Materials'] },
  { id: '2', name: 'Foundation', types: ['Hardcore Fill', 'Soil Poisoning', 'Water Proof Membrane', 'Other'] },
  { id: '3', name: 'BlockWork', types: ['150mm thick', '230mm thick'] },
  { id: '4', name: 'Concrete', types: ['Class 10(1:3:6)', 'Class 15()', 'Class 20(1:2:4)', 'Class 25(1:1.5:3)', 'Class 30(1:1:2)'] },
  { id: '5', name: 'Formwork', types: ['Timber Formwork', 'Steel Formwork', 'Aluminum Forwork', 'Plywood Formwork', 'Fabric Forwork', 'Plastic Formwork'] },
  { id: '6', name: 'Tiles', types: ['Porcelain Tile', 'Ceramic Tile', 'Glass Tile', 'Marble Tile', 'Granite Tile', 'Carpet Tile'] },
  { id: '7', name: 'Painting', types: ['Enamel Painting', 'Emulsion Painting', 'Bituminious Painting', 'Anti-Corrosive Paiting', 'Oil Painting', 'Cellulose Painting', 'Cement Painting', 'Plastic Painting'] },
  { id: '8', name: 'Plastering', types: ['Stucco Plastering', 'Waterproofing Plastering', 'Lime Plastering', 'Composite Plastering', 'Cement Plastering'] },
  { id: '9', name: 'Re-Bars', types: ['Various Size'] },
  { id: '10', name: 'Haulage and Handling', types: ['Haulage and Handling of Sand', 'Haulage and Handling of Aggregates'] },
  { id: '11', name: 'Roofing Covering', types: ['Thach Roofing', 'Wood Shingles Roofing', 'Tiles', 'Asbestos Cement Sheet', 'Galvanised Corrugated Iron Sheet', 'Light Weight Roofing'] },
  { id: '12', name: 'Pavements', types: ['Asphalt Pavement', 'Stone Pavement', 'Brick Paving', 'Wood Paving', 'Tiles Paving'] },
 

]

const Est = ({activePage,setActivePage}) => {
  return (
    <div className='inner__wrapper'>
    <div className="buildTop">
      <div className="build__left">
        <button onClick={() => setActivePage(null)}><FaAngleLeft/></button>
        <h2>{activePage.name}</h2>
      </div>
      <div className="build__right"></div>
    </div>
    <div className="page__below"> 
      <div className="items__list">
        {items.map((item) => (
        <div className="below__page" key={item.id}>{item.name}</div>
        ))} 
      </div>
      <div className="selected__item">
          <h2>Select Item to proceed</h2>
      </div>
               
    </div>
</div>
  )
}

export default Est
