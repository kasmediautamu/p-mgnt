import React from 'react'
import Button from '../../../FormFields/Button'
import Input from '../../../FormFields/Input'
import './styles.scss'

const InsuredInfo = () => {
  return (
    <div className="insured-info">
      <form className="insured-info__form">
        <div className="demographics__fields">
          <label htmlFor="Subscriber ID">Subscriber ID</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Subscriber ID"
            name="subscriberID"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Insured Last Name">Insured Last Name</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Insured Last Name"
            name="insuredLastName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Insured Group Name">Insured Group Name</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Insured Group Name"
            name="insuredGroupName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Claim Number">Claim Number</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Claim Number"
            name="claimNumber"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Insured First Name">Insured First Name</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter First Name"
            name="insuredFirstName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Relation of Insured">Relation of Insured</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Relation of Insured"
            name="relationOfInsured"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Claim Number">Claim Number</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Claim Number"
            name="claimNumber"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Insured First Name">Insured First Name</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Insured First Name"
            name="insuredFirstName"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Relation of Insured">Relation of Insured</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Relation of Insured"
            name="relationOfInsured"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Invoice ID">Invoice ID</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Invoice ID"
            name="invoiceID"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Insured Initial">Insured Initial</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Insured Initial e.g Mr."
            name="insuredInitial"
            onChange={onchange}
          />
        </div>
        <div className="demographics__fields">
          <label htmlFor="Insured SSN">Insured SSN</label>
          <Input
            type="text"
            inputclass="demographics__field--input"
            title="Enter Insured SSN."
            name="insuredSSN"
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

export default InsuredInfo
