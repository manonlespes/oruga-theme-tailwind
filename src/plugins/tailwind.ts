import type { OrugaOptions } from '@oruga-ui/oruga-next'

export const tailwindConfig: OrugaOptions = {
  button: {
    override: true,
    rootClass: 'btn',
    sizeClass: 'is-',
    variantClass: 'btn-',
    roundedClass: 'is-rounded',
    expandedClass: 'is-fullwidth',
    loadingClass: 'is-loading',
    outlinedClass: () => 'is-outlined',
    invertedClass: () => 'is-inverted',
    wrapperClass: 'button-wrapper'
  }
}
