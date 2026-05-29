import { TouchableOpacity } from "react-native";
import Icon from "./Icon.tsx";

function IconBtn({ icon }) {
  return (
    <TouchableOpacity>
      <Icon icon={icon} />
    </TouchableOpacity>
  )
}

export default IconBtn;