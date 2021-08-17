import React from 'react'
import CheckBox from '../FormFields/Checkbox'
import { ReactComponent as Separator } from '../../assets/separator.svg'
import './styles.scss'

const ViewAdministration = () => {
  // extra column data
  function Details() {
    return (
      <>
        <table className="view-administration__details">
          <thead>
            <tr>
              <th>Facility Name</th>
              <th>Rule Type</th>
              <th>Operand</th>
              <th>Code</th>
              <th>Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>All Facilities</td>
              <td>Payer Balance Due</td>
              <td>GREATER THAN</td>
              <td>1</td>
              <td>5</td>
            </tr>
            <tr>
              <td>All Facilities</td>
              <td>Payer Contactual</td>
              <td>No Equal to</td>
              <td></td>
              <td>0</td>
            </tr>
            <tr>
              <td>All Facilities</td>
              <td>Calculation Status</td>
              <td>INCLUDE</td>
              <td>1</td>
              <td>New/Modified Calculator Record</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
  return (
    <div className="view-administration">
      <table className="view-administration__table">
        <thead>
          <tr>
            <th>View Name</th>
            <th>View Description</th>
            <th>Auditor</th>
            <th>Follow-Up</th>
            <th>Status</th>
            <th>Account Age</th>
            <th>Hidden Records</th>
            <th>Default View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>My Last Quick Search</td>
            <td>My Last Quick Search</td>
            <td>All Records</td>
            <td>All Records</td>
            <td>Exclude Closed</td>
            <td>Within 2 years</td>
            <td>Exclude</td>
            <td>
              <CheckBox />
            </td>
          </tr>
          <tr>
            <td>Aetna Test</td>
            <td>Aetna Test</td>
            <td>All Records</td>
            <td>All Records</td>
            <td>Include All</td>
            <td>All Records</td>
            <td>Exclude</td>
            <td>
              <CheckBox />
            </td>
          </tr>
          <tr>
            <td>Automated Variances 17 Apr 2019 105348993</td>
            <td>Automated Variances</td>
            <td>All Records</td>
            <td>All Records</td>
            <td>Include All</td>
            <td>All Records</td>
            <td>Exclude</td>
            <td>
              <CheckBox />
            </td>
          </tr>
        </tbody>
      </table>
      <Separator />
      <Details />
    </div>
  )
}

export default ViewAdministration
