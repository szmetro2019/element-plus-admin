export function transElIconName(iconName:any) {
  return 'i' + iconName.replace(/[A-Z]/g, (match:any) => '-' + match.toLowerCase())
}

