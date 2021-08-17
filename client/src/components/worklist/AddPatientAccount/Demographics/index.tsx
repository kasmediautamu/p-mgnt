import React, { useState } from 'react'
import Button from '../../../FormFields/Button'
import Input from '../../../FormFields/Input'
import DropdownSelect from '../../../FormFields/Select'
import './styles.scss'

const Demographics = () => {
  const [state$, setState$] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [employer, setEmployer] = useState('')
  return (
    <div className="demographics">
      <form className="demographics__form">
        <div className="demographics__title">Patient</div>
        <div className="demographics__fields">
          <label htmlFor="Last Name"> Last Name</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Last Name"
            name="lastName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Apt/Suite"> Apt/Suite</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Apt/Suite"
            name="aptSuite"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Age"> Age</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Age"
            name="age"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="First Name"> First Name</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter First Name"
            name="firstName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="City"> City</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter City"
            name="firstName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="City"> Sex</label>
          {/* radio btuuons:- male,female,unknown */}
          <p>put radio button here</p>
        </div>
        <div className="demographics__fields">
          <label htmlFor="mi">MI</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter MI"
            name="mi"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="State">State</label>
          <DropdownSelect
            items={['Denver', 'Carlifornia', ' Washington']}
            value={state$ === '' ? 'Select State' : state$}
            onChange={(value: string) => {
              setState$(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Marital Status">Marital Status</label>
          <DropdownSelect
            items={['Single', 'Married', 'Divorced', 'Widow']}
            value={maritalStatus === '' ? 'Married' : maritalStatus}
            onChange={(value: string) => {
              setMaritalStatus(value)
            }}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="suffix">Suffix</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Suffix"
            name="Ford"
            onChange={onchange}
          />
        </div>

        <div className="demographics__fields">
          <label htmlFor="Zip">Zip</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Zip"
            name="zip"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Employer">Employer</label>
          <DropdownSelect
            items={['Employer 1', 'Employer 2', 'Employer 3']}
            value={employer === '' ? 'Select Employer' : employer}
            onChange={(value: string) => {
              setEmployer(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Address">Address</label>
          {/* enter textarea */}
          <textarea name="address"></textarea>
        </div>
        <div className="demographics__fields">
          <label htmlFor="SSN">SSN</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter SSN"
            name="ssn"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="DOB">DOB</label>
          {/* enter date component */}
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="01/01/1965"
            name="dateOfBirth"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Adult Peds Flag">Adult Peds Flag</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Pegs Flag"
            name="adultPedsFlag"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Patient File ID">Patient File ID</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Patient File ID"
            name="patientFileID"
            onChange={onchange}
          />
        </div>
        <div className="demographics__title">Responsible Party</div>
        <div className="demographics__fields">
          <label htmlFor="Last Name">Last Name</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Last Name"
            name="responsiblePartyLastName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Address Line 1">Address Line 1</label>
          {/* text area */}
          <textarea name="addressLine1"></textarea>
        </div>
        <div className="demographics__fields">
          <label htmlFor="City">City</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Last City"
            name="responsiblePartyCity"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="First Name">First Name</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="First Name"
            name="responsiblePartyFirstName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Address Line 2">Address Line 2</label>
          {/* text area */}
          <textarea name="addressLine2"></textarea>
        </div>
        <div className="demographics__fields">
          <label htmlFor="Zip">Zip</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Zip"
            name="responsiblePartyZip"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="MI">MI</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter MI"
            name="responsiblePartyMI"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <p>Close</p>
          <Button type="submit" btnclass="demographics__btn">
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}
