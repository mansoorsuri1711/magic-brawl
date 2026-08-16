import { notFound } from "next/navigation";

/** Unknown paths under a locale must 404 instead of bubbling as 5xx. */
export default function CatchAll() {
  notFound();
}
