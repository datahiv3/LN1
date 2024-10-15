import { Button, Input } from "@mantine/core";
import { Card, FormControl, FormHelperText, Typography } from "@mui/joy";
import { formatEther, parseEther } from "ethers";
import type React from "react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useReadContracts, useWriteContract } from "wagmi";
import { useAppDispatch } from "../../app/hooks";
import Code from "../../components/Layout/Code";
import { setToast } from "../../components/Toast/toastReducer";
import { contracts } from "../../config";
import NodeFeeManagerABI from "../../services/eth/abi/NodeFeeManager.json";

type ChangeFee = {
  fee: string;
};

const AdminFee: React.FC = () => {
  const { writeContract } = useWriteContract();

  const [tx, setTx] = useState<`0x${string}` | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { data, isLoading, refetch } = useReadContracts({
    contracts: [
      {
        address: contracts.NodeFeeManager,
        abi: NodeFeeManagerABI,
        functionName: "fee",
        args: [contracts.DataHiveToken],
      },
    ],
  });

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ChangeFee>();

  const onSubmit: SubmitHandler<ChangeFee> = async (data) => {
    setLoading(true);

    writeContract(
      {
        abi: NodeFeeManagerABI,
        address: contracts.NodeFeeManager,
        functionName: "setFee",
        args: [contracts.DataHiveToken, parseEther(data.fee)],
      },
      {
        onSuccess: (res) => {
          setTx(res);

          setIsSuccess(true);
          setLoading(false);

          refetch();
        },

        onSettled: () => {},

        onError: (er) => {
          setLoading(false);

          console.error(er);

          dispatch(
            setToast({
              show: true,
              title: "",
              message: er.message.split("\n")?.[0] || er.message,
              type: "error",
            }),
          );
        },
      },
    );
  };

  if (isLoading) {
    return <Card>Loading...</Card>;
  }

  return (
    <Card>
      <Typography level="title-lg">Node Fee</Typography>
      <div>Current Fee: {formatEther(data?.[0].result as number)} DH</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start gap-2 max-w-[800px]">
          <FormControl error={!!errors.fee} className="flex-1">
            <Input placeholder="Address" {...register("fee", { required: { value: true, message: "New Fee is required" } })} />
            <FormHelperText>{errors.fee?.message}</FormHelperText>
          </FormControl>

          <Button disabled={loading} type="submit" placeholder="">
            Change
          </Button>
        </div>
      </form>

      <div>
        <div>
          {isSuccess && (
            <div>
              Action Tx: <Code copy={tx}>{tx}</Code>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AdminFee;
