
//COLOR SCHEME 

enum bgLight {
    white = '#ffffff',
    black =  '#1c1c1e',
    grey = '#FAFAFA'
}

enum txtLight {
    white = '#ffffff',
    black =  '#1c1c1e'
}

enum greyLight {
    grey55 = "#828283",
    grey25 = "#c6c6c7",
    grey15 = "#DDDDDD",
    grey10 = "#E8E8E9",
    grey5 =  "#F4F4F4"
}

enum rainbowLight {
    red = "#ED4956",
    green = "#00ff00"
}

enum brandLight {
    primary = '#274c77',
    secoundary = '#6096ba',
    bg = '#e7ecef',
    extra = '#a3cef1',
    grey = '#8b8c89',
    heaven = "#0095F6",
    heavenHover = "#2F74DD"
}

const colors = {
    bgLight,
    txtLight,
    greyLight,
    rainbowLight,
    brandLight,
    blueGradient: "linear-gradient(85.79deg, #2F80ED 0%, #56CCF2 100%)"
}

enum effects {
    shadow01 = "0px 4px 16px rgba(28, 28, 30, 0.12)"
}

enum spacing {
    "3xsmall" = "2px",
    "2xsmall" = "4px",
    "xsmall" = "8px",
    "small" = "12px",
    "medium" = "16x",
    "large" = "24px",
    "xlarge" = "32px",
    "2xlarge" = "40px",
    "3xlarge" = "48px",
    "4xlarge" = "64px",
    "5xlarge" = "96px",
}

export const theme = {
    colors,
    effects,
    spacing
}


