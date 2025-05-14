import { useState } from '#imports'

// App
export const useDrawer = () => useState<boolean | null>('drawer', () => null)
