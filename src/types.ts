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

export interface ModuleOptions {
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
  email?: {
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
