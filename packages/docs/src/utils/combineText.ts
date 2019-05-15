type Text = (string | number | null | undefined);

export function combineText(data: Text[], separator?: string) {

  const cleared = data.filter(item => !!item);
  if (cleared.length < 1) {
    return '';
  }

  return cleared.join(separator || ', ');
}

export default combineText;
