import { Modal, View } from "react-native";
import React from "react";
import LogOutButton from "./LogoutButton";

interface LogoutModalProps {
  isVisible: boolean;
}
const LogoutModal = ({ isVisible }: LogoutModalProps) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View>
        <LogOutButton />
      </View>
    </Modal>
  );
};

export default LogoutModal;
