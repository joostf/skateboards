// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = BoardsSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

type PageDocumentDataSlicesSlice = AllSkateBoardsSlice;

/**
 * Content for page documents
 */
interface PageDocumentData {
  /**
   * Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for skateboard documents
 */
interface SkateboardDocumentData {
  /**
   * title field in *skateboard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * visual field in *skateboard*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.visual
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  visual: prismic.ImageField<never>;
}

/**
 * skateboard document from Prismic
 *
 * - **API ID**: `skateboard`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkateboardDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SkateboardDocumentData>,
    "skateboard",
    Lang
  >;

export type AllDocumentTypes = HomeDocument | PageDocument | SkateboardDocument;

/**
 * Primary content in *AllSkateBoards → Items*
 */
export interface AllSkateBoardsSliceDefaultItem {
  /**
   * skateboard field in *AllSkateBoards → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: all_skate_boards.items[].skateboard
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  skateboard: prismic.ContentRelationshipField<"skateboard">;
}

/**
 * Default variation for AllSkateBoards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AllSkateBoardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<AllSkateBoardsSliceDefaultItem>
>;

/**
 * Slice variation for *AllSkateBoards*
 */
type AllSkateBoardsSliceVariation = AllSkateBoardsSliceDefault;

/**
 * AllSkateBoards Shared Slice
 *
 * - **API ID**: `all_skate_boards`
 * - **Description**: AllSkateBoards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AllSkateBoardsSlice = prismic.SharedSlice<
  "all_skate_boards",
  AllSkateBoardsSliceVariation
>;

/**
 * Primary content in *Boards → Items*
 */
export interface BoardsSliceDefaultItem {
  /**
   * skateboard field in *Boards → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: boards.items[].skateboard
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  skateboard: prismic.ContentRelationshipField<"skateboard">;
}

/**
 * Default variation for Boards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<BoardsSliceDefaultItem>
>;

/**
 * Slice variation for *Boards*
 */
type BoardsSliceVariation = BoardsSliceDefault;

/**
 * Boards Shared Slice
 *
 * - **API ID**: `boards`
 * - **Description**: Boards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoardsSlice = prismic.SharedSlice<"boards", BoardsSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SkateboardDocument,
      SkateboardDocumentData,
      AllDocumentTypes,
      AllSkateBoardsSlice,
      AllSkateBoardsSliceDefaultItem,
      AllSkateBoardsSliceVariation,
      AllSkateBoardsSliceDefault,
      BoardsSlice,
      BoardsSliceDefaultItem,
      BoardsSliceVariation,
      BoardsSliceDefault,
    };
  }
}
