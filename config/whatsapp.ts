const PHONE_NUMBER = "50498781409";
const DEFAULT_MESSAGE =
  "Hola Tera, me interesa una página web para mi negocio.";

const ENCODED_MESSAGE = encodeURIComponent(DEFAULT_MESSAGE);

export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${ENCODED_MESSAGE}`;

export const whatsappConfig = {
  phoneNumber: PHONE_NUMBER,
  defaultMessage: DEFAULT_MESSAGE,
  url: WHATSAPP_URL
};

export type WhatsappConfig = typeof whatsappConfig;

