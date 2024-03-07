export type ImageFormatType = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  url: string;
  width: number;
};

export type Formats = {
  small: ImageFormatType;
  medium: ImageFormatType;
  large: ImageFormatType;
  thumbnail: ImageFormatType;
};

export type Image = {
  alternativeText: string;
  caption?: string;
  created_at?: string;
  ext?: string;
  formats?: Formats;
  hash?: string;
  height?: number;
  id?: number;
  mime?: string;
  name?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: any;
  size?: number;
  updated_at?: string;
  url: string;
  width?: number;
};
