import React from 'react'
import CheckBox from '../FormFields/Checkbox'
import { ReactComponent as Separator } from '../../assets/separator.svg'
import './styles.scss'

const WorkList = () => {
  function PatientDetails() {
    return (
      <>
        <table className="worklist__details">
          <thead>
            <tr>
              <th>Change Code</th>
              <th>Description</th>
              <th>Transaction ID</th>
              <th>Service Date</th>
              <th>Revenue Code</th>
              <th>Units</th>
              <th>Charges</th>
              <th>Denied Charges</th>
              <th>Non Covered Charges</th>
              <th>Costs</th>
              <th>Posting Date</th>
              <th>Charge Posted By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23210312</td>
              <td>Spirometry Pre/Post BO350</td>
              <td>30997</td>
              <td>04/25/2021</td>
              <td>0331</td>
              <td>4</td>
              <td>$500.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>04/25/2021</td>
              <td>John Doe</td>
            </tr>
            <tr>
              <td>23210312</td>
              <td>Spirometry Pre/Post BO350</td>
              <td>30997</td>
              <td>04/25/2021</td>
              <td>0331</td>
              <td>4</td>
              <td>$500.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>04/25/2021</td>
              <td>John Doe</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>12</td>
              <td>$8000.49</td>
              <td>$0.0</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </>
    )
  }
  return (
    <div className="worklist">
      <table className="worklist__table">
        <thead>
          <tr>
            <th>
              <CheckBox /> A/C Number
            </th>
            <th>Patient Name</th>
            <th>Payment Status</th>
            <th>Contact Name</th>
            <th>Payer ID</th>
            <th>Service Categpry</th>
            <th>AI Score</th>
            <th>Admission Date</th>
            <th>Discharge Date</th>
            <th>Adj Total Charges</th>
            <th>Exp Reimburse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CheckBox /> 23210312
            </td>
            <td>Jackson Harper</td>
            <td>Over Paid</td>
            <td>Contract abc</td>
            <td>30998</td>
            <td>Outpatient</td>
            <td>34</td>
            <td>04/25/2021</td>
            <td>04/25/2021</td>
            <td>$1000.0</td>
            <td>$340.43</td>
          </tr>
          <tr>
            <td>
              <CheckBox /> 23210312
            </td>
            <td>Jackson Harper</td>
            <td>Over Paid</td>
            <td>Contract abc</td>
            <td>30998</td>
            <td>Outpatient</td>
            <td>34</td>
            <td>04/25/2021</td>
            <td>04/25/2021</td>
            <td>$1000.0</td>
            <td>$340.43</td>
          </tr>
          <tr>
            <td>
              <CheckBox /> 23210312
            </td>
            <td>Jackson Harper</td>
            <td>Over Paid</td>
            <td>Contract abc</td>
            <td>30998</td>
            <td>Outpatient</td>
            <td>34</td>
            <td>04/25/2021</td>
            <td>04/25/2021</td>
            <td>$1000.0</td>
            <td>$340.43</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>$12,000,000.0</td>
            <td>$1,341,340.43</td>
          </tr>
        </tfoot>
      </table>
      <Separator />
      <PatientDetails />
    </div>
  )
}
export default WorkList
