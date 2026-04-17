export const WHATSAPP_NUMBER = "96891234567";
export const WHATSAPP_MESSAGE = "Hello She Stylish 🌟 I would like to book an abaya please";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const INSTAGRAM_LINK = "https://www.instagram.com/shestylish_designer";

export const buildWaLink = (customMessage) => {
  const msg = customMessage || WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
