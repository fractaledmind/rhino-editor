import type { Maybe } from "../types"
import { toMemorySize } from "./toMemorySize";

interface CaptionParams {
	fileName?: Maybe<string>
	fileSize?: Maybe<string | number>
}

export function toDefaultCaption ({fileName, fileSize}: CaptionParams): string {
	if (!fileName || !fileSize) {
		return ""
	}

  return `${fileName} · ${toMemorySize(Number(fileSize))}`;
}
