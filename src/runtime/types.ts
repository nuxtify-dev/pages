interface BrandOptions {
  /**
   * The name of the brand.
   *
   * @default "nuxtify-pages"
   */
  name?: string
  /**
   * The domain of the brand.
   *
   * @default ""
   */
  domain?: string
  /**
   * The tagline of the brand.
   *
   * @default ""
   */
  tagline?: string
  /**
   * The logo of the brand.
   */
  logo?: {
    /**
     * The URL of the light logo. Recommended 5:1 aspect ratio (e.g. 400 x 80 px).
     *
     * @default ""
     */
    lightUrl?: string
    /**
     * The URL of the dark logo. Recommended 5:1 aspect ratio (e.g. 400 x 80 px).
     *
     * @default ""
     */
    darkUrl?: string
    /**
     * The width of the logo.
     *
     * @default 200
     */
    width?: number
    /**
     * The width of the logo on mobile.
     *
     * @default 150
     */
    mobileWidth?: number
  }
}

export interface ModuleOptions {
  /**
   * Brand options
   */
  brand?: BrandOptions

  /**
   * Announcement banner options
   */
  announcement?: {
    show?: boolean
    message?: string
    buttonText?: string
    buttonUrl?: string
  }
}
