import { DataGrid, GridColDef, GridToolbar, GridCellParams } from '@mui/x-data-grid'
import { Box, Chip, SxProps } from "@mui/material"
import { useSelector } from "react-redux"
import { RootStateType } from "../../../../stores"
import { useState } from "react"
import FormUpdatePolicy from "./form-update-policy.tsx"

interface PolicyTableProps {
   sx?: SxProps
}

function PolicyTable(props: PolicyTableProps) {
   const policyList = useSelector((state: RootStateType) => state.policy.policyList)

   const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)
   const [selectedTitle, setSelectedTitle] = useState("")
   const [selectedId, setSelectedId] = useState("")


   const handleUpdateClick = (id: string, title: string) => {
      setSelectedId(id)
      setSelectedTitle(title)
      setIsUpdateDialogOpen(true)
   }

   const handleUpdateDialogClose = () => {
      setIsUpdateDialogOpen(false)
   }

   const columns: GridColDef[] = [
      { field: 'id', headerName: 'Id', flex: 1, headerClassName: 'bold-header', align: "center", headerAlign: "center" },
      { field: 'title', headerName: 'Title', flex: 3 },
      {field: 'action', headerName: 'Action', flex: 1, renderCell: (params: GridCellParams) => (<Chip color="success" size="medium" variant="filled" label="Update" onClick={() => handleUpdateClick(params.row.id,params.row.title)}/>)}
   ]

   return (
      <Box sx={props.sx}>
         <DataGrid
            {...cfg.table}
            columns={columns}
            rows={policyList ?? []}
            slots={{ toolbar: GridToolbar }}
         />
         <FormUpdatePolicy
            open={isUpdateDialogOpen}
            onClose={handleUpdateDialogClose}
            title={selectedTitle}
            id={selectedId}
         />
      </Box>
   )
}

const cfg = {
   container: {},
   table: {
      sx: {
         border: "none",
         height: "100%"
      }
   }
}

export default PolicyTable
