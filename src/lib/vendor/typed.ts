/**
 * 吸収部品 seo-jsonld（second-brain 08_リソース/吸収部品・ASSET-047）の型付きシム。
 * .mjs はスナップショット（ここでは改変しない）。相対importにはambient宣言が効かないため cast で結線する。
 */
import { serialize as serializeJs, jsonLd as jsonLdJs, organization as organizationJs, website as websiteJs } from "./seo-jsonld.mjs";

export type JsonLdObject = Record<string, unknown>;

export const serialize = serializeJs as unknown as (objOrArray: JsonLdObject | JsonLdObject[]) => string;
export const jsonLd = jsonLdJs as unknown as (
  type: string,
  props?: Record<string, unknown>,
  opts?: { allowDeprecated?: boolean }
) => JsonLdObject;
export const organization = organizationJs as unknown as (props: Record<string, unknown>) => JsonLdObject;
export const website = websiteJs as unknown as (props: Record<string, unknown>) => JsonLdObject;
