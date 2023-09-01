import { Button } from '@mui/material'

interface IOutlinedbtn {
  children: any
  class?: string
  disabled?: boolean
  onClick?: (a: any) => void
}

const Outlinedbtn: React.FC<IOutlinedbtn> = (props) => {
  return (
    <Button className={'btn outlined text-1 normal ' + props.class} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </Button>
  )
}

export default Outlinedbtn
