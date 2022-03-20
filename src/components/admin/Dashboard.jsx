import React from 'react'
import Charts from '../Charts'

const Dashboard = ({user, userDealers, userEquips, userSuppliers, userMaterials, userLabors}) => {

  const dealerCreate = userDealers.length * 1500
  const dealerPending = userDealers.filter((f)=> f.status ==='Pending').length * 1500
  const dealerApproved = userDealers.filter((f)=> f.status ==='Approved').length * 1500
  const dealerRejected = userDealers.filter((f)=> f.status ==='Rejected').length * 1500
  const dealerTotal = dealerApproved + dealerPending + dealerRejected

  const userEquipCreated = userEquips.length
  const userEquipPending = userEquips.filter((f)=> f.status ==='Pending').length
  const userEquipApproved = userEquips.filter((f)=> f.status ==='Approved').length
  const userEquipRejected = userEquips.filter((f)=> f.status ==='Rejected').length

  const equipCreate = userEquipCreated * 500
  const equipPending = userEquipPending * 500
  const equipApproved = userEquipApproved * 500
  const equipRejected = userEquipRejected * 500
  const equipTotal = equipApproved + equipPending + equipRejected

  const userSupplierCreated = userSuppliers.length
  const userSupplierPending = userSuppliers.filter((f)=> f.status ==='Pending').length
  const userSupplierApproved = userSuppliers.filter((f)=> f.status ==='Approved').length
  const userSupplierRejected = userSuppliers.filter((f)=> f.status ==='Rejected').length

  const supplierCreate = userSupplierCreated * 1500
  const supplierPending = userSupplierPending * 1500
  const supplierApproved = userSupplierApproved * 1500
  const supplierRejected = userSupplierRejected * 1500
  const supplierTotal = supplierApproved + supplierPending + supplierRejected

  const userMaterialCreated = userMaterials.length
  const userMaterialPending = userMaterials.filter((f)=> f.status ==='Pending').length
  const userMaterialApproved = userMaterials.filter((f)=> f.status ==='Approved').length
  const userMaterialRejected = userMaterials.filter((f)=> f.status ==='Rejected').length

  const materialCreate = userMaterialCreated * 100
  const materialPending = userMaterialPending * 100
  const materialApproved = userMaterialApproved * 100
  const materialRejected = userMaterialRejected * 100
  const materialTotal = materialApproved + materialPending + materialRejected

  const userLaborCreated = userLabors.length
  const userLaborPending = userLabors.filter((f)=> f.status ==='Pending').length
  const userLaborApproved = userLabors.filter((f)=> f.status ==='Approved').length
  const userLaborRejected = userLabors.filter((f)=> f.status ==='Rejected').length

  const laborCreate = userLaborCreated * 1000
  const laborPending = userLaborPending * 1000
  const laborApproved = userLaborApproved * 1000
  const laborRejected = userLaborRejected * 1000
  const laborTotal = laborApproved + laborPending + laborRejected

  const total1 = dealerCreate + supplierCreate + equipCreate + laborCreate + materialCreate;
  const total2 = dealerPending + supplierPending + equipPending + laborPending + materialPending;
  const total3 = dealerApproved + supplierApproved + equipApproved + laborApproved + materialApproved;
  const total4 = dealerRejected + supplierRejected + equipRejected+ laborRejected + materialRejected;
  const total5 = dealerTotal + supplierTotal + equipTotal + laborTotal + materialTotal

  const totalDue = total3 - 20000 


  return (
    <div className='dashboard'>
      <div className="dash__1">
        <div className="dash__1__1">
          <div className="dash__card">
            <div className="dash__card__title">
              <h2>Equipment</h2>
            </div>
            <div className="dash__card__body">
              <div className="dash__body__1">
                <span>Created</span>
                <span>{userEquipCreated}</span>
              </div>
              <div className="dash__body__1">
                <span>Pending</span>
                <span>{userEquipPending}</span>
              </div>
              <div className="dash__body__1">
                <span>Approved</span>
                <span>{userEquipApproved}</span>
              </div>
              <div className="dash__body__1">
                <span>Rejected</span>
                <span>{userEquipRejected}</span>
              </div>
            </div>
          </div>
          <div className="dash__card">
            <div className="dash__card__title">
              <h2>Suppliers</h2>
            </div>
            <div className="dash__card__body">
              <div className="dash__body__1">
                <span>Created</span>
                <span>{userSupplierCreated}</span>
              </div>
              <div className="dash__body__1">
                <span>Pending</span>
                <span>{userSupplierPending}</span>
              </div>
              <div className="dash__body__1">
                <span>Approved</span>
                <span>{userSupplierApproved}</span>
              </div>
              <div className="dash__body__1">
                <span>Rejected</span>
                <span>{userSupplierRejected}</span>
              </div>
            </div>
          </div>
          <div className="dash__card">
            <div className="dash__card__title">
              <h2>Labourers</h2>
            </div>
            <div className="dash__card__body">
              <div className="dash__body__1">
                <span>Created</span>
                <span>{userLaborCreated}</span>
              </div>
              <div className="dash__body__1">
                <span>Pending</span>
                <span>{userLaborPending}</span>
              </div>
              <div className="dash__body__1">
                <span>Approved</span>
                <span>{userLaborApproved}</span>
              </div>
              <div className="dash__body__1">
                <span>Rejected</span>
                <span>{userLaborRejected}</span>
              </div>
            </div>
          </div>
          <div className="dash__card">
            <div className="dash__card__title">
              <h2>Materials</h2>
            </div>
            <div className="dash__card__body">
              <div className="dash__body__1">
                <span>Created</span>
                <span>{userMaterialCreated}</span>
              </div>
              <div className="dash__body__1">
                <span>Pending</span>
                <span>{userMaterialPending}</span>
              </div>
              <div className="dash__body__1">
                <span>Approved</span>
                <span>{userMaterialApproved}</span>
              </div>
              <div className="dash__body__1">
                <span>Rejected</span>
                <span>{userMaterialRejected}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dash__1__2">  
          <h3>Data Created Status by Week</h3>
          <div className="dash__i__2__chart">
            <Charts/>
          </div>       
          
        </div>
      </div>

      <div className="dash__2">
        <div className="dash__2__1">
          <table className="table">
            <thead>
              <th>Income Status</th>
              <th>Equipment</th>
              <th>Dealers</th>
              <th>Materials</th>
              <th>Suppliers</th>
              <th>Labourers</th>
              <th>Total Income</th>
            </thead>
            <tbody>
              {/* <tr className='tb_row'>
                <td data-label='Created' className='tb_row'><button>Created</button></td>
                <td data-label='Equipment' className='tb_row'>{(equipCreate).toLocaleString()}</td>
                <td data-label='Dealers' className='tb_row'>{(dealerCreate).toLocaleString()}</td>
                <td data-label='Materials' className='tb_row'>{(materialCreate).toLocaleString()}</td>
                <td data-label='Suppliers' className='tb_row'>{(supplierCreate).toLocaleString()}</td>
                <td data-label='Labourers' className='tb_row'>{(laborCreate).toLocaleString()}</td>
                <td data-label='Total Income' className='tb_row'>{(total1).toLocaleString()}</td>
              </tr> */}
              <tr className='tb_row'>
                <td data-label='Pending' className='tb_row'><button>Pending</button></td>
                <td data-label='Equipment' className='tb_row'>{(equipPending).toLocaleString()}</td>
                <td data-label='Dealers' className='tb_row'>{(dealerPending).toLocaleString()}</td>
                <td data-label='Materials' className='tb_row'>{(materialPending).toLocaleString()}</td>
                <td data-label='Suppliers' className='tb_row'>{(supplierPending).toLocaleString()}</td>
                <td data-label='Labourers' className='tb_row'>{(laborCreate).toLocaleString()}</td>
                <td data-label='Total Income' className='tb_row'>{(total2).toLocaleString()}</td>
              </tr>
              <tr className='tb_row'>
                <td data-label='Approved' className='tb_row'><button>Approved</button></td>
                <td data-label='Equipment' className='tb_row'>{(equipApproved).toLocaleString()}</td>
                <td data-label='Dealers' className='tb_row'>{(dealerApproved).toLocaleString()}</td>
                <td data-label='Materials' className='tb_row'>{(materialApproved).toLocaleString()}</td>
                <td data-label='Suppliers' className='tb_row'>{(supplierApproved).toLocaleString()}</td>
                <td data-label='Labourers' className='tb_row'>{(laborApproved).toLocaleString()}</td>
                <td data-label='Total Income' className='tb_row total_income'>{(total3).toLocaleString()}</td>
              </tr>
              <tr className='tb_row'>
                <td data-label='Rejected' className='tb_row'><button>Rejected</button></td>
                <td data-label='Equipment' className='tb_row'>{(equipRejected).toLocaleString()}</td>
                <td data-label='Dealers' className='tb_row'>{(dealerRejected).toLocaleString()}</td>
                <td data-label='Materials' className='tb_row'>{(materialRejected).toLocaleString()}</td>
                <td data-label='Suppliers' className='tb_row'>{(supplierRejected).toLocaleString()}</td>
                <td data-label='Labourers' className='tb_row'>{(laborRejected).toLocaleString()}</td>
                <td data-label='Total Income' className='tb_row'>{(total4).toLocaleString()}</td>
              </tr>
              <tr className='tb_row'>
                <td data-label='Total' className='tb_row'><button>Total</button></td>
                <td data-label='Equipment' className='tb_row'>{(equipTotal).toLocaleString()}</td>
                <td data-label='Dealers' className='tb_row'>{(dealerTotal).toLocaleString()}</td>
                <td data-label='Materials' className='tb_row'>{(materialTotal).toLocaleString()}</td>
                <td data-label='Suppliers' className='tb_row'>{(supplierTotal).toLocaleString()}</td>
                <td data-label='Labourers' className='tb_row'>{(laborTotal).toLocaleString()}</td>
                <td data-label='Total Income' className='tb_row'>{(total5).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dash__2__2">
          <div className="dash__2__2__1">
            Your Rank is;
            <h1>25<span>out of 125</span></h1>
          </div>
          <div className="dash__2__2__2">
            <div className="dash__2__2__2__1">
              <span>Actual Earned (TZS):</span>
              <span>{(total3).toLocaleString()}</span>
            </div>
            <div className="dash__2__2__2__1">
              <span>Previous Paid (TZS):</span>
              <span>20,000.00</span>
            </div>
            <div className="dash__2__2__2__1 due">
              <span>Amount Due (TZS):</span>
              <span>{(totalDue).toLocaleString()}</span>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
