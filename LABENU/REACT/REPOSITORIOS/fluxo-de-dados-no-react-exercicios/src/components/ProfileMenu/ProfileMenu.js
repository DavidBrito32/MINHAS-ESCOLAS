import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from "./ProfileMenu.styled";

const ProfileMenu = (props) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={props.image} alt="Profile Image" />
      <ProfileName>{props.nome}</ProfileName>
      <ProfileBio>{props.bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
