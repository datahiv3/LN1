import { Alert } from "@mantine/core";
import { useStore } from "@nanostores/react";
import type React from "react";
import DefaultPage from "../../components/Layout/DefaultPage";
import Link from "../../components/Layout/Link";
import { isVerified } from "../../features/user";

const Create: React.FC = () => {
  const $isVerified = useStore(isVerified);

  return (
    <DefaultPage>
      {!$isVerified && (
        <Alert variant="light" color="yellow">
          You don't have verified profile. Please create one first. Go to <Link to="/profile">Get Started</Link>
        </Alert>
      )}
    </DefaultPage>
  );
};

export default Create;
