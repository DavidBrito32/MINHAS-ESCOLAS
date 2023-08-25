import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";
import { useState } from "react";

function ProfileScreen() {
  const [nome, setNome] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  return (
    <ScreenContainer>
      <ProfileMenu nome={nome} image={image} bio={bio}/>

      <ProfileForm setNome={setNome} setImage={setImage} setBio={setBio}/>
    </ScreenContainer>
  );
}

export default ProfileScreen;