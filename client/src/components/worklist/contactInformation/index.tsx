import React, { FormEvent } from 'react'
import Button from '../../FormFields/Button'
import Input from '../../FormFields/Input'
import './styles.scss'
const ContactInformation = () => {
  const onchange = (e: FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement
  }
  return (
    <form className="contact-form">
      <div className="contact-form__group">
        <div className="contact-form__sub-title">Insurance Information</div>
        <div className="contact-form__fields">
          <label htmlFor="">Facility Name</label>
          <Input
            type="text"
            inputclass="login-form__field--input"
            title="Facility Name"
            name="facilityName"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="">Payee Name</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="John Doe"
            name="payeeName"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="">Insured SSN</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="123456"
            name="insuredSSN"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="">Tax ID</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="AD-12031230"
            name="taxID"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="">Payer Phone</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="+256700756217"
            name="payerPhone"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="">Insured Group Name</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="GroupName"
            name="insuredGroupName"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="">NPI</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="13-1321"
            name="NPI"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="subscriber id">Subscriber ID</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="32093021"
            name="subscriberID"
            onChange={onchange}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <div className="contact-form__sub-title">Visit Information</div>
        <div className="contact-form__fields">
          <label htmlFor="patient name">Patient Name</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="Theresa Reed"
            name="patientName"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="insured name">Insured Name</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="John Doe"
            name="insuredName"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="medical record number">Medical Record No</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title=""
            name="medicalRecordNo"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Date of Birth">Date of Birth</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="05/29/1959"
            name="dateOfBirth"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Date of Birth">Admit Date</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="05/29/1959"
            name="admitDate"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Date of Birth">Social Security No</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="BN12345"
            name="socialSecurityNo"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Account Number">Account Number</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="13-1321"
            name="accountNumber"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Discharge Date</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="04/29/2021"
            name="dischargeDate"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Total Charges</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="$1500.00"
            name="totalCharges"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Patient Type</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="32093021"
            name="totalCharges"
            onChange={onchange}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <div className="contact-form__sub-title">Recovery Information</div>
        <div className="contact-form__fields">
          <label htmlFor="audit status">Audit Status</label>
          Pending
        </div>
        <div className="contact-form__fields">
          <label htmlFor="auditor">Auditor</label>
          Unassigned
        </div>
        <div className="contact-form__fields">
          <label htmlFor="followUp">Follow-Up Date</label>
          Unassigned
        </div>
        <div className="contact-form__fields">
          <label htmlFor="review category">Review Category</label>
          Review Category
        </div>
        <div className="contact-form__fields">
          <label htmlFor="review reason">Review Reason</label>
          Review Reason
        </div>

        <div className="contact-form__fields">
          <label htmlFor="event date">Event Date</label>
          Event Date
        </div>
        <div className="contact-form__fields">
          <label htmlFor="variance category">Variance Category</label>
          variance category
        </div>
        <div className="contact-form__fields">
          <label htmlFor="variance category suggestion">Variance Cat Suggestion</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="none"
            name="varianceCategorySuggestion"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="start date">Start Date</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="12/12/2021"
            name="startDate"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Closed Result</label>
          pending
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Closed Reason</label>
          No value
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Agency</label>
          No value
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Committed Amount</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="$5000.0"
            name="committedAmount"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Pursuing Reason</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="reason"
            name="pursuingReason"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Review stage</label>
          No Value
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Assigned Reviewer</label>
          Unassigned
        </div>
        <div className="contact-form__fields">
          <label htmlFor="Discharge Date">Argument</label>
          <textarea name="argument" />
        </div>
      </div>
      <div className="contact-form__group">
        <div className="contact-form__sub-title">Contact log</div>
        <div className="contact-form__fields">
          <label htmlFor="responsibility">Responsibility</label>
          payer 1
        </div>
        <div className="contact-form__fields">
          <label htmlFor="type">Type</label>
          type
        </div>
        <div className="contact-form__fields">
          <label htmlFor="responsibility">Duration(mins)</label>
          <Input
            type="text"
            inputclass="contact-form__field--input"
            title="1"
            name="duration"
            onChange={onchange}
          />
        </div>
        <div className="contact-form__fields">
          <label htmlFor="note">Note</label>
          <textarea name="note"></textarea>
        </div>
      </div>
      <div className="contact-form__fields">
        <p>Close</p>
        <Button type="submit" btnclass="contact-form__btn">
          Save
        </Button>
      </div>
    </form>
  )
}

export default ContactInformation
