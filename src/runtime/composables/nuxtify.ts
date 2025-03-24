// Types
import type { ModuleOptions } from '../types'

import { useAppConfig } from '#app'

export const useNuxtifyConfig = (): ModuleOptions => useAppConfig().nuxtify
