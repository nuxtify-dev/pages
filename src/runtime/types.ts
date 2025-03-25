import type { RouteLocationRaw } from 'vue-router'

interface Link {
  text: string
  to?: RouteLocationRaw
  href?: string
  icon?: string
  openInNew?: boolean
}

interface FooterLinks {
  title: string
  links: Link[]
}

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

interface PagesOptions {
  policies: {
    privacyUrl: string
    termsUrl: string
  }
}

export interface ModuleOptions {
  /**
   * Brand options
   */
  brand?: BrandOptions

  /**
   * Pages options
   */
  pages?: PagesOptions

  /**
   * Announcement banner options
   */
  announcement?: {
    show?: boolean
    message?: string
    buttonText?: string
    buttonUrl?: string
  }

  /**
   * Navigation options
   */
  navigation?: {
    primary?: Link[]
    secondary?: Link[]
    footerPrimary?: FooterLinks[]
    footerSecondary?: Link[]
  }

  /**
   * Footer options
   */
  footer?: {
    copyright?: string
    credits?: {
      creator?: {
        name?: string
        domain?: string
      }
      prependText?: string
      appendText?: string
      showPoweredBy?: boolean
    }
    cta?: {
      show?: boolean
      title?: string
      subtitle?: string
      color?: string
    }
  }

  /**
   * Email options
   */
  email?: {
    general?: string
    support?: string
    provider?: {
      defaultSubmitUrl?: string
    }
  }

  /**
   * Style options
   */
  style?: {
    btn?: {
      rounded?: boolean
    }
  }
}
