import { Button, DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog } from "@mui/joy";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useStore } from "@nanostores/react";
import type { AxiosError } from "axios";
import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import Code from "../../components/Layout/Code";
import { setToast } from "../../components/Toast/toastReducer";
import { profiles } from "../../features/user";
import { api, getServices } from "../../services/api";
import { getProfiles } from "../../services/api/profile/getProfiles";
import type { ServiceResponse } from "../../services/api/types";
import { kycPendingBadge } from "../../services/profile/KycPendingBadge";
import type { Profile } from "../../types/Profile";

const ProfilePage: React.FC = () => {
  const $profiles = useStore(profiles);
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const dispatch = useAppDispatch();

  const columns: GridColDef<Profile[][number]>[] = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 250,
      renderCell: (params) => {
        return <Code copy={params.row._id}>{params.row._id}</Code>;
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      sortable: false,
      minWidth: 100,
    },
    {
      field: "lastName",
      headerName: "Last name",
      sortable: false,
      minWidth: 100,
    },
    {
      field: "email",
      headerName: "Email",
      sortable: false,
      minWidth: 200,
    },
    {
      field: "kycStatus",
      headerName: "KYC",
      sortable: false,
      minWidth: 120,
      renderCell: (params) => {
        return kycPendingBadge(params.row.kycStatus);
      },
    },
    {
      field: "version",
      headerName: "Version",
      sortable: false,
      minWidth: 120,
    },
    {
      field: "view",
      headerName: "View",
      sortable: false,
      minWidth: 120,
      renderCell: (params) => {
        return (
          <Button component={Link} to={`/profile/${params.row._id}`} color="primary" variant="outlined" size="sm" sx={{ fontSize: 12, minHeight: 8, padding: "2px 10px" }}>
            View
          </Button>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      minWidth: 120,
      renderCell: (params) => {
        if (params.row.kycStatus !== "pending") {
          return null;
        }

        return (
          <Button
            onClick={() => {
              setId(params.row._id as string);
              setOpen(true);
            }}
            color="danger"
            variant="soft"
            size="sm"
            sx={{ fontSize: 12, minHeight: 8, padding: "2px 10px" }}
          >
            Cancel
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <DataGrid
        rows={$profiles.data.map((item) => ({ ...item, id: item._id }))}
        columns={columns}
        disableColumnResize
        density="compact"
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[50, 100]}
        disableRowSelectionOnClick
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>Confirmation</DialogTitle>
          <Divider />
          <DialogContent>Are you sure you want to cancel KYC your profile?</DialogContent>
          <DialogActions>
            <Button
              variant="solid"
              color="danger"
              onClick={async () => {
                setOpen(false);

                try {
                  await api.delete(getServices().user.cancel(id));
                  dispatch(
                    setToast({
                      show: true,
                      title: "",
                      message: "Cancel KYC successfully",
                      type: "success",
                    }),
                  );

                  getProfiles(getServices());
                } catch (error: unknown) {
                  const e = error as AxiosError<ServiceResponse<string>>;

                  dispatch(
                    setToast({
                      show: true,
                      title: "",
                      message: e.response?.data?.error || "Failed to cancel KYC",
                      type: "error",
                    }),
                  );
                }
              }}
            >
              Sure
            </Button>
            <Button
              variant="plain"
              color="neutral"
              onClick={async () => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ProfilePage;
