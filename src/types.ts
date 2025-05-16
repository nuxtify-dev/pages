import type { ModuleOptions as CoreModuleOptions } from '@nuxtify/core'

// Extend core types
type CoreEmailOptions = NonNullable<CoreModuleOptions['email']>
interface Email extends CoreEmailOptions {
  provider?: {
    defaultSubmitUrl?: string
  }
}

// Link types
interface Link {
  text: string
  to?: string
  href?: string
  icon?: string
  openInNew?: boolean
}
interface FooterLinks {
  title: string
  links: Link[]
}

// Page interface
interface PageModuleOptions {
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
  email?: Email

  /**
   * Style options
   */
  style?: {
    btn?: {
      rounded?: boolean
    }
  }
}

export type ModuleOptions = Omit<CoreModuleOptions, keyof PageModuleOptions> & PageModuleOptions
