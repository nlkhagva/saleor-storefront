export const apiUrl = process.env.API_URI;
export const sentryDsn = process.env.SENTRY_DSN;
const sampleRate = parseFloat(process.env.SENTRY_APM);
export const sentrySampleRate = isNaN(sampleRate) ? 0 : sampleRate;
export const serviceWorkerTimeout =
  parseInt(process.env.SERVICE_WORKER_TIMEOUT, 10) || 60 * 1000;
export const demoMode = process.env.DEMO_MODE === "true";

export const PRODUCT_TYPE_SHIPPING = "UHJvZHVjdFR5cGU6MTY=";
export const PRODUCT_TYPE_ONLINE_ZAHIALGA = "UHJvZHVjdFR5cGU6MTU=";
export const PRODUCT_CATEGORY_SHIPPING = "Q2F0ZWdvcnk6MjQ=";
export const PRODUCT_CATEGORY_ONLINE_ZAHIALGA = "Q2F0ZWdvcnk6MjM=";

export const SHIPPING_STATUS = [
  { label: "Draft", value: "DRAFT" },
  { label: "Шинэ", value: "NEW" },
  { label: "Тээвэрлэж буй", value: "SHIPPING" },
  { label: "Монголд", value: "INMONGOLIA" },
  { label: "Хүлээн авсан", value: "RECEIVED" },
  { label: "Саатсан", value: "DELAYED" },
  { label: "Цуцалсан", value: "CANCELED" },
];
