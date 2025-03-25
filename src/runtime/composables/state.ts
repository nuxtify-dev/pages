import { useState } from '#app'
import { ref } from '#imports'

// App
export const useDrawer = () => useState<boolean | null>('drawer', () => null)
export const useToast = () =>
  useState('toast', () =>
    ref({
      show: false,
      message: '',
    }),
  )
