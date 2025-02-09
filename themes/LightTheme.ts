import type { Theme } from "@/types";

const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: "rgb(211, 230, 41)", // 明るい黄緑（黄寄り）
    background: "rgb(242, 242, 242)", // 明るいグレー（一般的な背景色）
    card: "rgb(255, 255, 255)", // 白
    text: "rgb(28, 28, 30)", // ほぼ黒（視認性を考慮）
    border: "rgb(216, 216, 216)", // グレー
    notification: "rgb(255, 59, 48)", // 赤（警告・通知）
    secondary: "rgb(255, 204, 0)", // 黄色（アクセント）
    success: "rgb(50, 205, 50)", // 緑（成功時の色）
    buttonColor: "rgb(211, 230, 41)", // 明るい黄緑（メインカラー）
    rippleColor: "rgba(150, 200, 30, 0.5)", // 透過感のある緑系（押した時に心地よいフィードバック）
    renderItemColor: "#F5F5F5",
  },
};

export default LightTheme;
