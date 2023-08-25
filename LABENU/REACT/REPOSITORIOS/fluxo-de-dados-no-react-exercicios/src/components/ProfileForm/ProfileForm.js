import { useState } from "react";
import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";

const ProfileForm = (props) => {
  const [nome1, setNome1] = useState("");
  const [bio1, setBio1] = useState("");
  const [Image1, setImage1] = useState("");

  console.log(nome1, bio1, Image1);

  function EnviaDados(){
    props.setNome(nome1);
    props.setImage(Image1);
    props.setBio(bio1);
    alert("Dados Enviados Com sucesso!");
    setNome1("")
    setBio1("");
    setImage1("");
  }
  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={nome1}
            onChange={(e) => setNome1(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            value={bio1}
            onChange={(e) => setBio1(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            value={Image1}
            onChange={(e) => setImage1(e.target.value)}
          />
        </InputWrapper>

        <Button onClick={EnviaDados}>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
