export const WHATSAPP_PHONE = "971526240517";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello! I'm interested in Baharnani Advertising services.";

export function getWhatsAppUrl(
  message: string = WHATSAPP_DEFAULT_MESSAGE,
): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
