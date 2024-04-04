import type { OrugaOptions } from '@oruga-ui/oruga-next'

export const variantClass = (variant: string) => {
  switch (variant) {
    case 'primary':
      return 'btn-primary'

    case 'secondary':
      return 'btn-secondary'

    case 'tertiary':
      return 'btn-tertiary'

    case 'info':
      return 'btn-info'

    case 'warning':
      return 'btn-warning'
  }
}

export const tailwindConfig: OrugaOptions = {
  button: {
    override: true,
    rootClass: 'btn',
    sizeClass: 'is-',
    variantClass: variantClass,
    roundedClass: 'is-rounded',
    expandedClass: 'is-fullwidth',
    loadingClass: 'is-loading',
    outlinedClass: () => 'is-outlined',
    invertedClass: () => 'is-inverted',
    wrapperClass: 'button-wrapper'
  }
}
