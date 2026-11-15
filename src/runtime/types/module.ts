import type { ModuleOptions as CoreModuleOptions } from '@nuxtify/core'

// Page interface
export interface PageModuleOptions {
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

export type ModuleOptions = Omit<CoreModuleOptions, keyof PageModuleOptions> & PageModuleOptions
