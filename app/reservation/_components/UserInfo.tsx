import { defaultStyles } from "@/styles";
import Label from "@/ui/Label";
import { Text, View, TextInput } from "react-native";

interface IProps {
  firstName: string;
  lastName: string;
  setFirstName: (val: string) => void;
  setLastName: (val: string) => void;
}

export default function UserInfo(props: IProps) {
  const { firstName, lastName, setFirstName, setLastName } = props;
  return (
    <View style={defaultStyles.infoContainer}>
      <Text style={defaultStyles.infoMainHeader}>User Information</Text>
      <Label>First Name</Label>
      <TextInput
        autoCapitalize="words"
        placeholder="Enter your first name"
        style={defaultStyles.textField}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <Label>Last Name</Label>
      <TextInput
        autoCapitalize="words"
        placeholder="Enter your last name"
        style={defaultStyles.textField}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
    </View>
  );
}
