import { ref, watch, type Ref } from 'vue'
import { useMouseInElement, useMediaQuery } from '@vueuse/core'

export function ButtonForCursor(
    screenRef: Ref<HTMLElement | null>,
    buttonRef: Ref<HTMLElement | null>
) {

    const isCoarsePointer = useMediaQuery('(pointer: coarse)')

    const { elementX, elementY, isOutside } = useMouseInElement(screenRef)

    watch([elementX, elementY, isOutside], ([x, y, outside]) => {
        if (isCoarsePointer.value || !screenRef.value || !buttonRef.value || outside) return

        const container = screenRef.value.getBoundingClientRect()
        const btn = buttonRef.value.getBoundingClientRect()

        const clampedX = Math.max(0, Math.min(x - btn.width / 2, container.width - btn.width))
        const clampedY = Math.max(0, Math.min(y - btn.height / 2, container.height - btn.height))

        buttonRef.value.style.left = `${clampedX}px`
        buttonRef.value.style.top = `${clampedY}px`
    })

}