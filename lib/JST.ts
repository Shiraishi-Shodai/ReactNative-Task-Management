// 日本時間を返す
export const getJST = (): Date => {
  const JST = new Date();
  JST.setHours(JST.getHours() + 9);
  return JST;
};
