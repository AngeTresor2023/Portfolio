"use client";

import { useLang } from "@/lib/lang-context";

const WHATSAPP_NUMBER = "14384678027";

export function WhatsAppButton() {
  const { lang } = useLang();
  const label = lang === "fr" ? "Contacter sur WhatsApp" : "Message on WhatsApp";

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.663 4.523 1.813 6.378L4 29l7.805-1.767A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.6a9.55 9.55 0 0 1-4.87-1.33l-.35-.208-4.63 1.049 1.078-4.512-.228-.365A9.56 9.56 0 0 1 6.4 15c0-5.303 4.303-9.6 9.604-9.6 5.3 0 9.596 4.297 9.596 9.6 0 5.302-4.296 9.6-9.596 9.6Zm5.27-7.19c-.288-.145-1.706-.842-1.97-.938-.264-.096-.457-.144-.65.145-.192.288-.746.938-.914 1.13-.168.193-.336.217-.624.073-.288-.145-1.216-.448-2.316-1.428-.856-.763-1.434-1.706-1.602-1.994-.168-.288-.018-.444.127-.588.13-.13.288-.337.432-.505.144-.169.192-.289.288-.481.096-.193.048-.361-.024-.505-.072-.145-.65-1.566-.89-2.145-.235-.564-.474-.487-.65-.496-.168-.008-.36-.01-.553-.01a1.06 1.06 0 0 0-.77.36c-.264.288-1.007.985-1.007 2.402 0 1.418 1.031 2.787 1.175 2.98.144.192 2.03 3.1 4.918 4.347.687.297 1.223.474 1.641.606.689.219 1.316.188 1.812.114.553-.083 1.706-.698 1.947-1.372.24-.674.24-1.251.168-1.372-.072-.12-.264-.192-.552-.337Z" />
      </svg>
    </a>
  );
}
