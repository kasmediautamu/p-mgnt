import React, { FormEvent, useState } from 'react'
import Button from '../../FormFields/Button'
import CheckBox from '../../FormFields/Checkbox'
import Input from '../../FormFields/Input'
import DropdownSelect from '../../FormFields/Select'
import './styles.scss'

type IProps = {
  viewname: string
  description: string
  auditor: string
  followUp: string
  status: string
  accountAge: string
  hiddenRecords: string
  useThisAsDefaultView: boolean
}
const initialViewState: IProps = {
  viewname: '',
  description: '',
  auditor: '',
  followUp: '',
  status: '',
  accountAge: '',
  hiddenRecords: '',
  useThisAsDefaultView: false,
}

const CreateView = () => {
  const [viewData, setViewData] = useState(initialViewState)
  const [defaultView, setDefaultView] = useState<boolean | null>(false)
  const [Auditor, setAuditor] = useState<string>('')
  const [FollowUp, setFollowUp] = useState<string>('')
  const [Status, setStatus] = useState<string>('')
  const [actAge, setActAge] = useState<string>('')
  const [HiddenRecords, setHiddenRecords] = useState<string>('')

  const {
    viewname,
    description,
    auditor,
    followUp,
    status,
    accountAge,
    hiddenRecords,
    useThisAsDefaultView,
  } = viewData

  const isDefaultView = () => {
    setDefaultView(!defaultView)
  }

  // Enable createview
  const isEnableCreate = (): boolean => {
    return (
      viewname !== '' &&
      description !== '' &&
      auditor !== '' &&
      followUp !== '' &&
      status !== '' &&
      accountAge !== '' &&
      hiddenRecords !== ''
    )
  }
  //submit view
  const onFormSubmit = (e: any) => {
    e.preventDefault()
    setViewData({ ...viewData })
    console.log(viewData)
  }
  // input field change
  const onchange = (e: FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement
    setViewData({ ...viewData, [target.name]: target.value })
  }
  return (
    <form className="view-form">
      <div className="view-form__description">View Description</div>
      <div className="view-form__fields">
        <label htmlFor="viewname">View Name</label>
        <Input
          type="text"
          inputclass="view-form__Input"
          title=""
          name="viewname"
          onChange={onchange}
        />
      </div>
      <div className="view-form__group">
        <label htmlFor="description">Description</label>
        <textarea className="view-form__textarea" name="description" onChange={onchange} />
      </div>
      <div className="view-form__description">Default Limits</div>
      <div className="view-form__group">
        <label htmlFor="auditor">Auditor</label>
        <DropdownSelect
          items={['All Records', 'Records', 'Some Records']}
          value={Auditor === '' ? 'All Records' : Auditor}
          onChange={(value: string) => {
            setAuditor(value)
          }}
        />
      </div>
      <div className="view-form__group">
        <label htmlFor="auditor">Follow Up</label>
        <DropdownSelect
          items={['All Records', 'Records', 'Some Records']}
          value={FollowUp === '' ? 'All Records' : FollowUp}
          onChange={(value: string) => {
            setFollowUp(value)
          }}
        />
      </div>
      <div className="view-form__group">
        <label htmlFor="status">Status</label>
        <DropdownSelect
          items={['All Statuses', 'Statuses', 'Some Status']}
          value={Status === '' ? 'All Records' : Status}
          onChange={(value: string) => {
            setStatus(value)
          }}
        />
      </div>
      <div className="view-form__group">
        <label htmlFor="account age">Account Age</label>
        <DropdownSelect
          items={['All Ages', 'Ages', 'Some Age']}
          value={actAge === '' ? 'All Records' : actAge}
          onChange={(value: string) => {
            setActAge(value)
          }}
        />
      </div>
      <div className="view-form__group">
        <label htmlFor="hidden records">Hidden Records</label>
        <DropdownSelect
          items={['Hidden Records', ' All Records', 'Some Records']}
          value={HiddenRecords === '' ? 'All Records' : HiddenRecords}
          onChange={(value: string) => {
            setHiddenRecords(value)
          }}
        />
      </div>

      <div className="view-form__group">
        <CheckBox />
        <label htmlFor="defaulview">Use this as my default view</label>
      </div>
      <div className="view-form__group">
        <p className="view-form__close-btn">Cancel</p>
        <Button type="submit" btnclass="view-form__btn">Create View</Button>

      </div>
    </form>
  )
}

export default CreateView
