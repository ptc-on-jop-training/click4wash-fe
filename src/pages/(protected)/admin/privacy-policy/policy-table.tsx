import { DataGrid, GridColDef, GridToolbar, GridCellParams } from '@mui/x-data-grid'
import { Box, Chip, SxProps } from "@mui/material"
import { useSelector } from "react-redux"
import { RootStateType } from "../../../../stores"
import { useState } from "react"
import FormUpdatePolicy from "./form-update-policy.tsx"
import {useTranslation} from "react-i18next"

interface PolicyTableProps {
   sx?: SxProps
}

function PolicyTable(props: PolicyTableProps) {
   const policyList = useSelector((state: RootStateType) => state.policy.policyList)
   const [t] = useTranslation('trans')

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
      { field: 'id', headerName:  t("admin.PrivacyPolicy.id"), flex: 1, headerClassName: 'bold-header', align: "center", headerAlign: "center" },
      { field: 'title', headerName: t("admin.PrivacyPolicy.title"), flex: 3 },
      {field: 'action', headerName: t("admin.PrivacyPolicy.action"), flex: 1, renderCell: (params: GridCellParams) => (<Chip color="success" size="medium" variant="filled" label={t("admin.PrivacyPolicy.update")} onClick={() => handleUpdateClick(params.row.id,params.row.title)}/>)}
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
