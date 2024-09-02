import { Stack } from "@mui/material"
import {ceategory} from '../../constants'
import { colors } from "../../constants/color"
import './ceategory.css'
const Ceategory = ({selectHendel,selectetCatigorya}) => {


  return (
    <Stack direction={"row"} sx={{overflowX:'scroll', background:'#1E2B46'}} pt={1} pb={1}>
        {ceategory.map(item=>(
            <button 
                key={item.name} 
                className="catigory-btn" 
                style={{
                    background:item.name === selectetCatigorya && colors.secondry,
                    color:item.name === selectetCatigorya && colors.borderColor,
                    border:item.name === selectetCatigorya && '1px solid orange'
                }}
                onClick={()=>{
                    selectHendel(item.name)
                }}
            >
                <span>{item.icon}</span>
                <span>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Ceategory