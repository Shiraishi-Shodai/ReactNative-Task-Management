import { Theme } from "@/types";

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: "rgb(178, 208, 30)", // ライトモードの黄色より少し落ち着いた色
    background: "rgb(18, 18, 18)", // ほぼ黒（目に優しい）
    card: "rgb(36, 36, 36)", // ダークグレー（カード背景）
    text: "rgb(230, 230, 230)", // 明るいグレー（暗い背景で読みやすく）
    border: "rgb(64, 64, 64)", // 暗いグレー（馴染むように）
    notification: "rgb(255, 99, 71)", // トマトレッド（少し柔らかい警告色）
    secondary: "rgb(255, 180, 0)", // 暗い背景でも目立つ黄色
    success: "rgb(40, 180, 40)", // 落ち着いた緑
    buttonColor: "rgb(178, 208, 30)", // ライトモードより少し落ち着いた黄緑
    rippleColor: "rgba(255, 204, 0, 0.4)", // 暗い背景で映える黄色系
  },
};

export default DarkTheme;
