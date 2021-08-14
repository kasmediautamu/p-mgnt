import React from 'react'

export const modifyLinks = [
  {title:'Select All Filtered Records'},
  'Unselect All Filtered Records',
  'View Maintenance',
  'Layout Maintenance',
  'Show Research Section',
  'Hide Toolbar Captions',
  'Zoom In',
  'Zoom Out',
  'Create New Account',
  'Create Simulation DataSet',
  'Open New Tab'
]

export const  searchLinks = [
  'Patient Number',
  'Patient Last Name',
  'Medical Record Number',
  'Patient Number(From Clipboard)',
  'Quick Search'
]

export const helpLinks = [
  'Contents',
  'Overview',
  'Technical Support',
  'About',
  'Logout'
]

export const actionLinks =[
  'Adjust Payer Affiliations',
  'Delete Patient Records',
  'Export Patient Records',
  'Generate Forms/Letters',
  'Hide/Show Selected Records',
  'Recalculate Patient Records',
  'Update Audit/Recovery Information',
  'View Contact Information'
]

const SubMenu = ({dataList, ...props}:any) => {

  const { onSetLinks, activeLinks } = props

  function Links(){
    return (
      dataList.map((link:string) => {
        return (
          <div key={link}className="sub-link">
          {link}
          </div>
        )
      })
    )

  }
  return <Links/>
}

export default SubMenu
