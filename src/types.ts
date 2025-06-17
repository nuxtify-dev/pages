import type { ModuleOptions as CoreModuleOptions } from '@nuxtify/core'

// Extend core types
type CoreEmailOptions = NonNullable<CoreModuleOptions['email']>
interface Email extends CoreEmailOptions {
  provider?: {
    defaultSubmitUrl?: string
  }
}

// Page interface
interface PageModuleOptions {

  /**
   * Footer options
   */
  footer?: {
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
