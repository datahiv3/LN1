import { Button, DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog } from "@mui/joy";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useStore } from "@nanostores/react";
import type { AxiosError } from "axios";
import type React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import Code from "../../components/Layout/Code";
import { setToast } from "../../components/Toast/toastReducer";
import { allProfiles } from "../../features/user";
import { api, getServices } from "../../services/api";
import { getAllProfiles, getProfiles } from "../../services/api/profile/getProfiles";
import type { ServiceResponse } from "../../services/api/types";
import { kycPendingBadge } from "../../services/profile/KycPendingBadge";
import type { Profile } from "../../types/Profile";

const UserProfilesPage: React.FC = () => {
  const $allProfiles = useStore(allProfiles);
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const dispatch = useAppDispatch();
  const [isApproved, setIsApproved] = useState<boolean>(false);

  useEffect(() => {
    getAllProfiles(getServices());
  }, []);

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
      field: "evmAddress",
      headerName: "EVM Address",
      sortable: false,
      minWidth: 370,
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
      minWidth: 250,
      renderCell: (params) => {
        if (params.row.kycStatus !== "pending") {
          return null;
        }

        return (
          <div className="flex items-center gap-2 h-[100%]">
            <Button
              onClick={() => {
                setId(params.row._id as string);
                setIsApproved(true);
                setOpen(true);
              }}
              color="primary"
              variant="soft"
              size="sm"
              sx={{ fontSize: 12, minHeight: 8, padding: "2px 10px" }}
            >
              Approve
            </Button>
            <Button
              onClick={() => {
                setId(params.row._id as string);
                setIsApproved(false);
                setOpen(true);
              }}
              color="danger"
              variant="soft"
              size="sm"
              sx={{ fontSize: 12, minHeight: 8, padding: "2px 10px" }}
            >
              Reject
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <DataGrid
        rows={$allProfiles.data.map((item) => ({ ...item, id: item._id }))}
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
          <DialogContent>Are you sure you want to {isApproved ? "approve" : "reject"} this KYC this profile?</DialogContent>
          <DialogActions>
            <Button
              variant="solid"
              color={isApproved ? "primary" : "danger"}
              onClick={async () => {
                setOpen(false);

                try {
                  await api.post(getServices().admin[isApproved ? "approveProfile" : "rejectProfile"](id));
                  dispatch(
                    setToast({
                      show: true,
                      title: "",
                      message: "Action successfully",
                      type: "success",
                    }),
                  );

                  getAllProfiles(getServices());
                  getProfiles(getServices());
                } catch (error: unknown) {
                  const e = error as AxiosError<ServiceResponse<string>>;

                  dispatch(
                    setToast({
                      show: true,
                      title: "",
                      message: e.response?.data?.error || "Action failed",
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

export default UserProfilesPage;
