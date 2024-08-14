import Vue from "vue"

interface Props {
  cells: {
    type: string,
    position: string
    padded?: boolean
    prepend?: string
    title?: string
    text?: string
    link?: string
    linkText?: string
    image?: string
    html?: string
    component?: any
    componentProps?: any
    color?: string
  }[]
}

declare class GridZoom extends Vue {
  $props: Props
}

export { GridZoom }
