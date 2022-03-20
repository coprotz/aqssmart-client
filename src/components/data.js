export const items = [
    { 
      id: '1', 
      name: 'Earthwork', 
      types: [
        { 
          id: '1',
          name: 'Site Clearance with Average Depth of 150 mm', 
          materials: { id: '1', name: '', price: 0, qty: 0, unit: '' },
          costs:[
            { name: 'hauling', cost: 0 }, 
            { name: 'compaction', cost: 0 },
            { name: 'watering', cost: 0 },         
            { name: 'tools', cost: 10 }
          ], 
          labour: {name: 'Site Clearance', rate: 1800, qty: 1, unit: 'sqm'},
          unit: 'sqm'
        },
        { 
          id: '2',
          name: 'Excavation in earth not exceeding 1.5 m deep for trenches and pits', 
          costs:[
            { name: 'hauling', cost: 0 }, 
            { name: 'compaction', cost: 0 },
            { name: 'watering', cost: 0 },           
            { name: 'tools', cost: 10 }
          ],
          labour: {name: 'Site Excavation', rate: 2166, unit: 'sqm'},
          materials: { id: '1', name: '', price: 0, qty: 0, unit: '' },
          unit: 'sqm'
        },
        { 
          id: '3',
          name: 'Earth backfilling consilidate and compact', 
          costs:[
            { name: 'hauling', cost: 0 }, 
            { name: 'compaction', cost: 0 },
            { name: 'watering', cost: 0 },           
            { name: 'tools', cost: 50 }
          ], 
          labour: {name: 'Earth Backfill', rate: 9000, unit: 'cum'},
          materials: { id: '1', name: '0', price: 0,  qty: 0, unit: '' },
          unit: 'cum'
        },
        { 
          id: '4',
          name: 'Removal of Surplus Materials', 
          costs:[
            { name: 'hauling', cost: 10000 }, 
            { name: 'compaction', cost: 0 },
            { name: 'watering', cost: 0 },           
            { name: 'tools', cost: 50 }
          ],
          labour: {name: 'Surplus Remover', rate: 8000, qty: 1, unit: 'cum'},
          materials: { id: '1', name: '', price: 0, unit: '' },
          unit: 'cum'
        },
        { 
          id: '5',
          name: 'Selected fill and compacted in 150 mm thick layers', 
          materials: { id: '1', name: 'murram', price: 5000, qty: 1, unit: 'cum' },
          costs: 
          [
            { name: 'hauling', cost: 5000 }, 
            { name: 'compaction', cost: 4000 },
            { name: 'roller & watering', cost: 1000 },          
            { name: 'tools', cost: 50 }
          ],    
          labour: {name: 'Selected Fill & Compact', rate: 8000, qty: 1, unit: 'cum'},    
          unit: 'cum'
        },
      ]
    }, 
    { 
      id: '2', 
      name: 'Foundation', 
      types: [
        { 
          id: '1',
          name: 'Hardcore Fill',
          materials: { id: '1', name: 'hardcore stones', price: 25500, qty: 1.25, unit: 'cum' },
          costs: 
          [
            { name: 'hauling', cost: 0 }, 
            { name: 'compaction', cost: 0 },
            { name: 'roller & watering', cost: 0 },          
            { name: 'tools', cost: 50 }
          ],    
          labour: {name: 'Hadcore Fill & Compact', rate: 9050, qty: 1, unit: 'cum'},
          unit: 'cum'
        },
        { 
          id: '2',
          name: 'Soil Poisoning',
          materials: { id: '1', name: 'Adrian', price: 1500, qty: 7, unit: 'cum' },
          costs: 
          [
            { name: 'hauling', cost: 0 }, 
            { name: 'compaction', cost: 0 },
            { name: 'roller & watering', cost: 0 },          
            { name: 'tools', cost: 50 }
          ],    
          labour: {name: 'Poisoning Pourer', rate: 3600, unit: 'sqm'},
          unit: 'sqm'
        },
        { 
          id: '3',
          name: 'Water Proof Membrane',
          materials: { id: '1', name: 'DPM', price: 1500, qty: 7, unit: 'cum' },
          costs: 
          [
            { name: 'hauling', cost: 0 }, 
            { name: 'compaction', cost: 0 },
            { name: 'roller & watering', cost: 0 },          
            { name: 'tools', cost: 50 }
          ],    
          labour: {name: 'Poisoning Pourer', rate: 3600, unit: 'sqm'},
          unit: 'sqm'
        },
        ]
    }, 
    { 
      id: '3', 
      name: 'BlockWork', 
      types: [
        { id: '1',name: '150mm thick'},
        { id: '2',name: '230mm thick'},     
        ]
    }, 
    { 
      id: '4', 
      name: 'Concrete', 
      types: [
        { id: '1',name: 'Class 10(1:3:6)'},
        { id: '2',name: 'Class 15()'},
        { id: '3',name: 'Class 20(1:2:4)'},
        { id: '4',name: 'Class 25(1:1.5:3)'},
        { id: '5',name: 'Class 30(1:1:2)'},
      ]
    }, 
    { 
      id: '5', 
      name: 'Formwork', 
      types: [
        { id: '1',name: 'Timber Formwork'},
        { id: '2',name: 'Steel Formwork'},
        { id: '3',name: 'Aluminum Forwork'},
        { id: '4',name: 'Plywood Formwork'},
        { id: '5',name: 'Fabric Forwork'},
        { id: '6',name: 'Plastic Formwork'},
      ]
    }, 
    { 
      id: '6', 
      name: 'Tiles', 
      types: [
        { id: '1',name: 'Porcelain Tile'},
        { id: '2',name: 'Ceramic Tile'},
        { id: '3',name: 'Glass Tile'},
        { id: '4',name: 'Marble Tile'},
        { id: '5',name: 'Carpet Tile'},
      ]
    }, 
    { 
      id: '7', 
      name: 'Painting', 
      types: [
        { id: '1',name: 'Enamel Painting'},
        { id: '2',name: 'Emulsion Painting'},
        { id: '3',name: 'Bituminious Painting'},
        { id: '4',name: 'Anti-Corrosive Paiting'},
        { id: '5',name: 'Oil Painting'},
        { id: '6',name: 'Cellulose Painting'},
        { id: '7',name: 'Cement Painting'},
        { id: '8',name: 'Plastic Painting'},
      ]
    },
    { 
      id: '8', 
      name: 'Plastering', 
      types: [
        { id: '1',name: 'Stucco Plastering'},
        { id: '2',name: 'Waterproofing Plastering'},
        { id: '3',name: 'Lime Plastering'},
        { id: '4',name: 'Composite Plastering'},
        { id: '5',name: 'Cement Plastering'},
      
      ]
    },
    { 
      id: '9', 
      name: 'Re-Bars', 
      types: [
        { id: '1',name: 'Various Size'},   
      ]
    },
    { 
      id: '10', 
      name: 'Haulage and Handling', 
      types: [
        { id: '1',name: 'Haulage and Handling of Sand'},
        { id: '2',name: 'Haulage and Handling of Aggregates'},    
      ]
    },
    { 
      id: '11', 
      name: 'Roofing Covering', 
      types: [
        { id: '1',name: 'Thach Roofing'},
        { id: '2',name: 'Wood Shingles Roofing'},
        { id: '3',name: 'Tiles'},
        { id: '4',name: 'Asbestos Cement Sheet'},
        { id: '5',name: 'Galvanised Corrugated Iron Sheet'},
        { id: '6',name: 'Light Weight Roofing'},
      
      ]
    },
    { 
      id: '12', 
      name: 'Pavements', 
      types: [
        { id: '1',name: 'Asphalt Pavement'},
        { id: '2',name: 'Stone Pavement'},
        { id: '3',name: 'Brick Paving'},
        { id: '4',name: 'Wood Paving'},
        { id: '5',name: 'Tiles Paving'},
      
      ]
    },
  
  ]

  export const labors = [
    { 
      id: '1', 
      name: 'Mason', 
      types: [
          { id: '1', name: 'Block Mason', rate: 6000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
          { id: '2', name: 'Stone Masson', rate: 7500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
          { id: '3', name: 'Paving Brick Mason', rate: 2500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },         
         
      ]   
    },  
    { 
        id: '2', 
        name: 'Earthworks', 
        types: [
            { id: '1', name: 'Site Clearance', rate: 1800, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '2', name: 'Site Excavation', rate: 2166, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '3', name: 'Earth Backfill', rate: 9000, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '4', name: 'Selected Fill & Compact', rate: 8000, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '5', name: 'Surplus Remover', rate: 8000, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },            
        ]   
    },

    { 
        id: '3', 
        name: 'Foundation', 
        types: [         
            { id: '1', name: 'Hardcore stones', rate: 9050, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '1', name: 'Poisoning Pourer', rate: 3600, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },           
        ]   
    },
    { 
        id: '4', 
        name: 'Concrete and Steel', 
        types: [         
            { id: '1', name: 'Steel Fixer', rate: 540, unit: 'kg', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '2', name: 'Concrete Finisher', rate: 3000, unit: 'hr', labours: ['Juma', 'Rashidi', 'Omary'] }          
        ]   
    },

    { 
        id: '5', 
        name: 'Wall Finishers & Decorators', 
        types: [
            { id: '1', name: 'Cement Plastered Finisher', rate: 6000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '2', name: 'Painter', rate: 4000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '3', name: 'Cement Textured Finisher', rate: 5500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '4', name: 'Gypsum Plaster Finisher', rate: 2000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '5', name: 'Glass Mosaic Finisher', rate: 4000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '6', name: 'Ceramic Tile Installer', rate: 1650, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '7', name: 'Wood Installer', rate: 2000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },  
            { id: '8', name: 'Vinly Installer', rate: 2500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
            { id: '9', name: 'Alucobond Installer', rate: 2500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
            { id: '10', name: 'Marble Installer', rate: 3000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },          
        ]   
    },
    { 
        id: '6', 
        name: 'Floor Finishers & Decorators', 
        types: [
            { id: '1', name: 'Porcelean Tile Installer', rate: 1450, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '2', name: 'Cement Screed', rate: 4000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },         
            { id: '3', name: 'Wood Installer', rate: 2000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },  
            { id: '4', name: 'Terrazo', rate: 2500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },   
            { id: '5', name: 'Carpet Tiles Installer', rate: 1800, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },          
        ]   
    },
    { 
        id: '7', 
        name: 'Roof Finishers & Decorators', 
        types: [
            { id: '1', name: 'Solar Tiles Installer', rate: 5550, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '2', name: 'Asphalt Shingles Installer', rate: 4000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },         
            { id: '3', name: 'Metal Roofing Installer', rate: 3000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },  
            { id: '4', name: 'Stone-coated Steel Installer', rate: 3500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '5', name: 'Slate Installer', rate: 4200, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
            { id: '6', name: 'Clay and Concrete Tiles Installer', rate: 3500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
            { id: '7', name: 'Green Roofing Installer', rate: 4500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
                  
        ]   
    },
    { 
        id: '8', 
        name: 'Electrician & Plumber', 
        types: [
            { id: '1', name: 'Cable Installer', rate: 650, unit: 'm', labours: ['Juma', 'Rashidi', 'Omary'] },
            { id: '2', name: 'Pipe Fitter', rate: 1200, unit: 'm', labours: ['Juma', 'Rashidi', 'Omary'] },  
                  
        ]   
    },

   
   
  ]


  export const equipments = [
    { 
      id: '1', 
      name: 'Breakers, Crushers & Drillers', 
      types: [
        { 
          id: '1',
          name: 'Auger Machine', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day', 
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '2',
          name: 'Compressor', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '3',
          name: 'DTH Drilling Machine', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '3',
          name: 'Excavator with Rock Breaker', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day', 
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '4',
          name: 'HDD Machine', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '5',
          name: 'Mobile Crusher', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '6',
          name: 'Pilling Mchine', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '7',
          name: 'Backhoe Loader with Chisel', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '8',
          name: 'Stone Crusher', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day', 
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
      ]
    }, 
    { 
      id: '2', 
      name: 'Concrete Equipment & Plants', 
      types: [
        { 
          id: '1',
          name: 'Batching Plant', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '2',
          name: 'Boom Placer', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '3',
          name: 'Concrete Pump', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '4',
          name: 'Concrete Mixer', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '5',
          name: 'Transit Mixer', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '6',
          name: 'Hot Mix Plant', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
  
      ]
    }, 
    { 
      id: '3', 
      name: 'Cranes & Lifts', 
      types: [
        { 
          id: '1',
          name: 'Boom Lift', 
          unit: 'tonne',
          capacity: 0.333, 
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '2',
          name: 'Crawler Crane', 
          unit: 'tonne',
          capacity: 0.333, 
          rate: 350000,   
          duration:'day', 
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        }, 
        { 
          id: '3',
          name: 'Farana Crane', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day', 
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '4',
          name: 'Forklift', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        }, 
        { 
          id: '5',
          name: 'Hydra Crane', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day', 
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        }, 
        { 
          id: '6',
          name: 'Scissor Lift', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        }, 
        { 
          id: '7',
          name: 'Telescopic Crane', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '8',
          name: 'Tower Crane', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        ]
    }, 
    { 
      id: '4', 
      name: 'Generators & Tractors', 
      types: [
        { 
          id: '1',
          name: 'DG Sets', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '2',
          name: 'Tractor Dozer', 
          capacity: 0.333,
          unit: 'tonne', 
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
     
      ]
    }, 
    { 
      id: '5', 
      name: 'Loaders, Excavators & Tippers', 
      types: [
        { 
          id: '1',
          name: 'Backhoe Loader', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '2',
          name: 'Excavator', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day', 
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '3',
          name: 'Skid Steel Loader', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '4',
          name: 'Tipper', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '5',
          name: 'Wheel Loader', 
          capacity: 0.333,
          unit: 'tonne', 
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
      
      ]
    }, 
    { 
      id: '6', 
      name: 'Road Equipment', 
      types: [
        { 
          id: '1',
          name: 'Double Drum Roller', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '2',
          name: 'Single Drum Roller', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '3',
          name: 'Paver', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '4',
          name: 'PTR Roller', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '5',
          name: 'Grader', 
          capacity: 0.333, 
          unit: 'tonne',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
       
      ]
    }, 
    { 
      id: '7', 
      name: 'Trailers & Tankers', 
      types: [
        { 
          id: '1',
          name: 'Trailer', 
          capacity: 0.333, 
          unit: 'ton',
          rate: 350000,   
          duration:'day',
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
        { 
          id: '2',
          name: 'Water Tankers', 
          capacity: 0.333, 
          unit: 'ton',
          rate: 350000,   
          duration:'day', 
          dealers: ['Jembe', 'Monica', 'Amzuu'],       
        },
     
      ]
    },
  
  ]


  export const materials = [
    { 
      id: '1', 
      name: 'Earthwork', 
      types: [
        { 
          id: '1',
          name: 'Murram',           
          price: 10000,         
          unit: 'cum',
          suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
     
      ]
    }, 
    { 
      id: '2', 
      name: 'Foundation', 
      types: [
        { 
            id: '1',
            name: 'Hardcore stones',           
            price: 25000,         
            unit: 'cum',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },

        { 
            id: '2',
            name: 'Adrian Solution',           
            price: 3500,         
            unit: 'litre',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },

    ]
       
    }, 
    { 
      id: '3', 
      name: 'BlockWork', 
      types: [
        { 
            id: '1',
            name: 'Solid Block 5"',           
            price: 1000,         
            unit: 'Pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '2',
            name: 'Solid Block 4"',           
            price: 800,         
            unit: 'Pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '3',
            name: 'Pving Brick 3"',           
            price: 400,         
            unit: 'Pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '4',
            name: 'Paving Brick 2"',           
            price: 300,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        
        ]
    }, 
    { 
      id: '4', 
      name: 'Masonry', 
      types: [
        { 
            id: '1',
            name: 'Sand',           
            price: 15000,         
            unit: 'cum',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '2',
            name: 'Aggregates',           
            price: 25000,         
            unit: 'cum',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '3',
            name: 'Cement',           
            price: 15000,         
            unit: 'bag',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
      
      ]
    }, 
    { 
      id: '5', 
      name: 'Timbers & Boards', 
      types: [
        { 
            id: '1',
            name: 'Hardwood 2 x 2"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '2',
            name: 'Hardwood 2 x 4"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '3',
            name: 'Hardwood 2 x 6"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '4',
            name: 'Hardwood 2 x 8"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '5',
            name: 'Hardwood 1 x 8"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '6',
            name: 'Hardwood 1 x 10"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '7',
            name: 'Hardwood 1 x 12"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '8',
            name: 'Softwood 2 x 2"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '9',
            name: 'Softwood 2 x 4"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '10',
            name: 'Softwood 2 x 6"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '11',
            name: 'Softwood 2 x 8"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '12',
            name: 'Softwood 1 x 8"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '13',
            name: 'Softwood 1 x 10"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '14',
            name: 'Softwood 1 x 12"',           
            price: 15000,         
            unit: 'm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '15',
            name: 'MDF 6mm',           
            price: 15000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '16',
            name: 'MDF 8mm',           
            price: 15000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '17',
            name: 'MDF 12mm',           
            price: 15000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '18',
            name: 'MDF 20mm',           
            price: 15000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '19',
            name: 'Gypsum Board 2 x 4"',           
            price: 15000,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '20',
            name: 'Plywood Board 2 x 4"',           
            price: 15000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '21',
            name: 'Acrylic Board 2 x 4"',           
            price: 15000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },      
      ]
    }, 
    { 
      id: '6', 
      name: 'Tiles', 
      types: [
        { 
            id: '1',
            name: 'Porcelain Tiles',           
            price: 30000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        }, 
        { 
            id: '2',
            name: 'Ceramic Tiles',           
            price: 30000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '3',
            name: 'Glass Tiles',           
            price: 30000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '4',
            name: 'Marble Tiles',           
            price: 30000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '5',
            name: 'Carpet Tiles',           
            price: 30000,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },     
      ]
    }, 
    { 
      id: '7', 
      name: 'Painting and Painting Materials', 
      types: [
        { 
            id: '1',
            name: 'Enamel Painting',           
            price: 7500,         
            unit: 'litre',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        }, 
        { 
            id: '2',
            name: 'Emulsion Painting',           
            price: 2000,         
            unit: 'litre',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        }, 
        { 
            id: '3',
            name: 'Bituminious Painting',           
            price: 8750,         
            unit: 'litre',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '4',
            name: 'Anti-Corrosive Painting',           
            price: 8750,         
            unit: 'litre',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '5',
            name: 'Oil Painting',           
            price: 6250,         
            unit: 'litre',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },  
        { 
            id: '6',
            name: 'Painting Roller',           
            price: 6250,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '7',
            name: 'Painting Brush',           
            price: 6250,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        }, 
        { 
            id: '8',
            name: 'Gypsum Powder',           
            price: 6250,         
            unit: '20kg bag',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        }, 
        { 
            id: '9',
            name: 'Lime Powder',           
            price: 6250,         
            unit: '20kg bag',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },   
      ]
    },
    { 
      id: '9', 
      name: 'Construction Chemicals', 
      types: [
        { 
            id: '1',
            name: 'Concrete Hardeners',           
            price: 6250,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '2',
            name: 'Protective & Decorative Coating',           
            price: 6250,         
            unit: 'litre',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '3',
            name: 'Concrete Curing',           
            price: 6250,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '4',
            name: 'Epoxy Coating',           
            price: 6250,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '5',
            name: 'Mould Releasing Agents',           
            price: 6250,         
            unit: 'litre',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '6',
            name: 'Polymer Mix Plaster',           
            price: 6250,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '7',
            name: 'Ready Mix Plaster',           
            price: 6250,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '8',
            name: 'Polymer Modified Plaster',           
            price: 6250,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '9',
            name: 'Bonding Admixrures',           
            price: 6250,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '10',
            name: 'Water Proofing Additives',           
            price: 6250,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },     
      
      ]
    },
    { 
      id: '9', 
      name: 'Steel and Metal', 
      types: [
        { 
            id: '1',
            name: 'Re-bars',           
            price: 1450,         
            unit: 'kg',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        }, 
        { 
            id: '2',
            name: 'Metal Sheet 1mm',           
            price: 1450,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '3',
            name: 'Metal Sheet 2mm',           
            price: 1450,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        }, 
        { 
            id: '4',
            name: 'Metal Sheet 3mm',           
            price: 1450,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '5',
            name: 'Metal Sheet 4mm',           
            price: 1450,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '6',
            name: 'Black Pipe 2"',           
            price: 1450,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '7',
            name: 'Black Pipe 3"',           
            price: 1450,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '8',
            name: 'Black Pipe 4"',           
            price: 1450,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '9',
            name: 'Iron Mesh',           
            price: 1450,         
            unit: 'sqm',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
         
      ]
    },
    { 
      id: '10', 
      name: 'Personal Protective Equipment', 
      types: [
        { 
            id: '1',
            name: 'Protective Gloves',           
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '2',
            name: 'Hearing Protection',           
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '3',
            name: 'Full Face Shields',           
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '4',
            name: 'Chemical Splash Goggles',           
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '5',
            name: 'Respiratory Protection',           
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '6',
            name: 'First Aid Kits',           
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '7',
            name: 'Protective Boots',           
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '8',
            name: 'Protective Hats',           
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
          
      ]
    },
    { 
      id: '11', 
      name: 'Tools & Equipments', 
      types: [
        { 
            id: '1',
            name: 'Bolster',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '2',
            name: 'Boning Rod',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '3',
            name: 'Brick Hammer',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '4',
            name: 'Bump Cutter',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '5',
            name: 'Chisel',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '6',
            name: 'Circular Saw',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '7',
            name: 'Concrete Mixer',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '8',
            name: 'Cordless Drill',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
        { 
            id: '9',
            name: 'Generator',
            price: 1450,         
            unit: 'pc',
            suppliers: ['Jonas', 'Mbaruku', 'Sadiki']
        },
      
      ]
    },  
  
  ]

//   export const labors = [
//     { 
//       id: '1', 
//       name: 'Mason', 
//       types: [
//           { id: '1', name: 'Block Mason', rate: 6000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//           { id: '2', name: 'Stone Masson', rate: 7500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//           { id: '3', name: 'Paving Brick Mason', rate: 2500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },         
         
//       ]   
//     },  
//     { 
//         id: '2', 
//         name: 'Earthworks', 
//         types: [
//             { id: '1', name: 'Site Clearance', rate: 500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '2', name: 'Site Excavation', rate: 750, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '3', name: 'Earth Backfill', rate: 1000, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '4', name: 'Selected Fill & Compact', rate: 1800, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '5', name: 'Surplus Remover', rate: 1800, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },            
//         ]   
//     },

//     { 
//         id: '3', 
//         name: 'Foundation', 
//         types: [
//             { id: '1', name: 'Site Clearance', rate: 500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '2', name: 'Site Excavation', rate: 750, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '3', name: 'Earth Backfill', rate: 1000, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '4', name: 'Selected Fill & Compact', rate: 1800, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },  
//             { id: '5', name: 'Hadcore Fill & Compact', rate: 2250, unit: 'cum', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '6', name: 'Poisoning Pourer', rate: 1800, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },           
//         ]   
//     },
//     { 
//         id: '4', 
//         name: 'Concrete and Steel', 
//         types: [         
//             { id: '1', name: 'Steel Fixer', rate: 540, unit: 'kg', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '2', name: 'Concrete Finisher', rate: 3000, unit: 'hr', labours: ['Juma', 'Rashidi', 'Omary'] }          
//         ]   
//     },

//     { 
//         id: '5', 
//         name: 'Wall Finishers & Decorators', 
//         types: [
//             { id: '1', name: 'Cement Plastered Finisher', rate: 6000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '2', name: 'Painter', rate: 4000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '3', name: 'Cement Textured Finisher', rate: 5500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '4', name: 'Gypsum Plaster Finisher', rate: 2000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '5', name: 'Glass Mosaic Finisher', rate: 4000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '6', name: 'Ceramic Tile Installer', rate: 1650, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '7', name: 'Wood Installer', rate: 2000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },  
//             { id: '8', name: 'Vinly Installer', rate: 2500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
//             { id: '9', name: 'Alucobond Installer', rate: 2500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
//             { id: '10', name: 'Marble Installer', rate: 3000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },          
//         ]   
//     },
//     { 
//         id: '6', 
//         name: 'Floor Finishers & Decorators', 
//         types: [
//             { id: '1', name: 'Porcelean Tile Installer', rate: 1450, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '2', name: 'Cement Screed', rate: 4000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },         
//             { id: '3', name: 'Wood Installer', rate: 2000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },  
//             { id: '4', name: 'Terrazo', rate: 2500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },   
//             { id: '5', name: 'Carpet Tiles Installer', rate: 1800, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },          
//         ]   
//     },
//     { 
//         id: '7', 
//         name: 'Roof Finishers & Decorators', 
//         types: [
//             { id: '1', name: 'Solar Tiles Installer', rate: 5550, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '2', name: 'Asphalt Shingles Installer', rate: 4000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },         
//             { id: '3', name: 'Metal Roofing Installer', rate: 3000, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },  
//             { id: '4', name: 'Stone-coated Steel Installer', rate: 3500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '5', name: 'Slate Installer', rate: 4200, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
//             { id: '6', name: 'Clay and Concrete Tiles Installer', rate: 3500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
//             { id: '7', name: 'Green Roofing Installer', rate: 4500, unit: 'sqm', labours: ['Juma', 'Rashidi', 'Omary'] }, 
                  
//         ]   
//     },
//     { 
//         id: '8', 
//         name: 'Electrician & Plumber', 
//         types: [
//             { id: '1', name: 'Cable Installer', rate: 650, unit: 'm', labours: ['Juma', 'Rashidi', 'Omary'] },
//             { id: '2', name: 'Pipe Fitter', rate: 1200, unit: 'm', labours: ['Juma', 'Rashidi', 'Omary'] },  
                  
//         ]   
//     },

   
   
//   ]
  