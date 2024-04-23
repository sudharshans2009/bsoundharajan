import { clsx } from "clsx"
import Link from "next/link";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function configFormat(object, config) {
  const obj = {};
  const arr = Object.keys(object);
  arr.forEach(key => {
    if (config?.[key] !== undefined) {
      obj[key] = config[key];
    } else {
      obj[key] = object[key];
    }
  });

  return obj;
}

export function formatText(array, options = { linkUnderline: true }) {
  return array.map(item => {
    const { bold, italic, strikethrough, underline, code } = configFormat(item.annotations, options);
    const { content, link } = item.text;

    let formattedText = content;

    if (bold) formattedText = <b>{formattedText}</b>;
    if (italic) formattedText = <i>{formattedText}</i>;
    if (strikethrough) formattedText = <s>{formattedText}</s>;
    if (underline) formattedText = <u>${formattedText}</u>;
    if (code) formattedText = <code>{formattedText}</code>;
    if (link) formattedText = <Link href={link?.url} className={options.linkUnderline ? "border-b border-maincolor hover:border-white transition-all w-max border-dashed" : null}>{formattedText}</Link>;
    
    return formattedText;
  });
}