import { Button } from "@material-tailwind/react";
import { Card } from "@mui/joy";
import { useStore } from "@nanostores/react";
import type React from "react";
import { useNavigate } from "react-router-dom";
import BodyMd from "../../components/Layout/BodyMd";
import { profile } from "../../features/user";

const Profile: React.FC = () => {
  const $profile = useStore(profile);
  const $$profile = $profile.data;
  const navigate = useNavigate();

  if (!$$profile) {
    return null;
  }

  return (
    <Card>
      <BodyMd>
        <div>Name: {$$profile.name}</div>
        <div>Email: {$$profile.email}</div>
        <div>Phone: {$$profile.phoneNumber}</div>
        <div>Country: {$$profile.country}</div>
        <div>Address: {$$profile.address}</div>
        <div>City: {$$profile.city}</div>
        <div>Zip: {$$profile.zipCode}</div>
      </BodyMd>

      <Button
        placeholder=""
        onClick={() => {
          navigate("/profile/edit");
        }}
      >
        Edit profile
      </Button>
    </Card>
  );
};

export default Profile;
