import React, { useState } from 'react'
import Button from '../../FormFields/Button'
import Input from '../../FormFields/Input'
import DropdownSelect from '../../FormFields/Select'
import './styles.scss'

const AddPatientAccount = () => {
  const [orgCode1, setOrgCode1] = useState('')
  const [facility, setFacility] = useState('')
  const [orgCode2, setOrgCode2] = useState('')
  const [service, setService] = useState('')
  const [patientType, setPatientType] = useState('')
  const [dischargeType, setDischargeType] = useState('')
  const [serviceCenter, setServiceCenter] = useState('')
  const [admissionSource, setAdmissionSource] = useState('')
  const [billingStatusID, setBillingStatusID] = useState('')
  const [clinicCategoryID,setClinicCategoryID] = useState('')
  const [facilityServiceID,setFacilityServiceID] = useState('')
  const [programCodeID,setProgramCodeID] = useState('')
  function BillingInfo() {
    return (
      <form className="billing-info__form">
        <div className="billing-info__fields">
          <label htmlFor="account number"> Account Number</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="123456789"
            name="accountNumber"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Org Code 1">Org Code 1</label>
          <DropdownSelect
            items={['Acme Code 1', 'Kawempe Code 1', ' Kawempe Code 3']}
            value={orgCode1 === '' ? 'Select Org Code ' : orgCode1}
            onChange={(value: string) => {
              setOrgCode1(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Recov. Rm Charges"> Recov. Rm Charges</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="$0.00"
            name="RecoverRmCharges"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Org Code 1">Facility</label>
          <DropdownSelect
            items={['Facility 1', 'Facility 2', ' Facility 3']}
            value={facility === '' ? 'Select Facility ' : facility}
            onChange={(value: string) => {
              setFacility(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Org Code 1">Org Code 2</label>
          <DropdownSelect
            items={['Acme Org 1', 'Acme Org 2', ' Acme Org 3']}
            value={orgCode2 === '' ? 'Select Org Code 2 ' : orgCode2}
            onChange={(value: string) => {
              setOrgCode2(value)
            }}
          />
        </div>

        <div className="billing-info__fields">
          <label htmlFor="Recov. Time(hrs)"> Recov. Time(hrs)</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="0.00"
            name="RecoveryTimeInHrs"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="service">Service</label>
          <DropdownSelect
            items={['InPatient', 'Maternity', 'Paternity']}
            value={service === '' ? 'Select A Service ' : service}
            onChange={(value: string) => {
              setService(value)
            }}
          />
        </div>

        <div className="billing-info__fields">
          <label htmlFor="Patient Type">Patient Type</label>
          <DropdownSelect
            items={['PatientType1', 'PatientType2', 'PatientType2']}
            value={patientType === '' ? 'Select Type ' : patientType}
            onChange={(value: string) => {
              setPatientType(value)
            }}
          />
        </div>

        <div className="billing-info__fields">
          <label htmlFor="Recov Code Count"> Recov Code Count</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="0"
            name="RecoveryCodeCount"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Admission Date"> Admission Date</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="01/01/2021"
            name="AdmissionDate"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Discharge Type">Discharge Type</label>
          <DropdownSelect
            items={['DischargeType1', 'DischargeType2', 'DischargeType3']}
            value={dischargeType === '' ? 'Select Type ' : dischargeType}
            onChange={(value: string) => {
              setDischargeType(value)
            }}
          />
        </div>

        <div className="billing-info__fields">
          <label htmlFor="Cost/Service Center">Cost/Service Center</label>
          <DropdownSelect
            items={['Service Center1', 'Service Center2', 'Service Center3']}
            value={serviceCenter === '' ? 'Select Service Center ' : serviceCenter}
            onChange={(value: string) => {
              setServiceCenter(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Discharge Date"> Discharge Date</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="01/01/2021"
            name="DischargeDate"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Admission Source">Admission Source</label>
          <DropdownSelect
            items={['Source1', 'Source2', 'Source3']}
            value={admissionSource === '' ? 'Select Admission Source ' : admissionSource}
            onChange={(value: string) => {
              setAdmissionSource(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Recov Code Count"> Non-Billable</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="$0.00"
            name="nonBillableCharges"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Billing Date"> Billing Date</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="01/01/2021"
            name="BillingDate"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Professional Fees"> Professional Fees</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="$0.00"
            name="professionalFees"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Billing Status ID">Billing Status ID</label>
          <DropdownSelect
            items={['Status 1', 'Status 2', 'Status 3']}
            value={billingStatusID === '' ? 'Select Billing Status ' : billingStatusID}
            onChange={(value: string) => {
              setBillingStatusID(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Primary Grouper DRG"> Primary Grouper DRG</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="Acme Grouper 1"
            name="professionalFees"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Total Days"> Total Days</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="0.0"
            name="totalDays"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Clinic Category ID">Clinic Category ID</label>
          <DropdownSelect
            items={['Category 1', 'Category 2', 'Category 3']}
            value={clinicCategoryID === '' ? 'Select Clinic Category ' : clinicCategoryID}
            onChange={(value: string) => {
              setClinicCategoryID(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="State Grouper DRG"> State Grouper DRG</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="State Grouper DRG 1"
            name="stateGrouperDRG"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Total Charges"> Total Charges</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="$0.00"
            name="totalCharges"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Facility Service ID">Facility Service ID</label>
          <DropdownSelect
            items={['Category 1', 'Category 2', 'Category 3']}
            value={facilityServiceID === '' ? 'facility Service ID ' : facilityServiceID}
            onChange={(value: string) => {
              setFacilityServiceID(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Expanded Grouper DRG"> Expanded Grouper DRG</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="Acme Grouper 1"
            name="ExpandedGrouperDRG"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Surgical Time (mins)">Surgical Time(mins)</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="0.00"
            name="surgicalTime"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Program Code ID">Program Code ID</label>
          <DropdownSelect
            items={['Code 1', 'Code 2', 'Code 3']}
            value={programCodeID === '' ? 'Program Code ID ' : programCodeID}
            onChange={(value: string) => {
              setProgramCodeID(value)
            }}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Payer Used DRG">Payer Used DRG</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="Lorem"
            name="payerUsedDRG"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Room & Board">Room & Board</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="$0.00"
            name="roomAndBoard"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Federal Tax ID">Federal Tax ID</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="11223456789"
            name="federalTaxID"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="APR DRG Mortality ID">APR DRG Mortality ID</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="11223"
            name="aprDRGMortalityID"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Skilled Nursing Units">Skilled Nursing Units</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="0.00"
            name="skilledNursingUnits"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="stateMHBedDays">State MH Bed Days</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="0"
            name="stateMHBedDays"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="APR DRG Severity ID">APR DRG Severity ID</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="12345678"
            name="aprDRGSeverityID"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="APR DRG Severity ID">Obs. Room Charges</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="$0.0"
            name="obsRoomCharges"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Standard DRG Weight">Standard DRG Weight</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="Acme Grouper 1"
            name="standardDRGWeight"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <label htmlFor="Obs. Time(hrs)">Obs. Time(hrs)</label>
          <Input
            type="text"
            inputclass="billing-info__field--input"
            title="Acme Grouper 1"
            name="obsTimeInhrs"
            onChange={onchange}
          />
        </div>
        <div className="billing-info__fields">
          <p>Close</p>
          <Button type="submit" btnclass="billing-info__btn">
            Save
          </Button>
        </div>
      </form>
    )
  }


  return <div className="billing-info">hi</div>
}

export default AddPatientAccount
