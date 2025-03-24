import { useState } from '#app'
import { ref } from '#imports'

// App
export const useToast = () =>
  useState('toast', () =>
    ref({
      show: false,
      message: '',
    }),
  )
