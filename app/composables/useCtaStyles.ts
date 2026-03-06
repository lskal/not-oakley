import { computed, ref } from "vue";
import type { TCssSize } from "../../types/cms";

export function useCtaStyles(props: {
  disabled?: boolean;
  textValue: string;
  ariaLabel?: string;
  isUppercase?: boolean;

  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;

  hoverBorderColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;

  disabledBorderColor?: string;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;

  margin?: TCssSize;
  padding?: TCssSize;
  borderRadius?: TCssSize;
  borderWidth?: TCssSize;
  borderStyle?: "solid" | "dashed" | "dotted" | "double" | "none";
}) {
  const isHover = ref(false);

  const formattedBorderColor = computed(() => {
    if (props.disabled) return props.disabledBorderColor ?? props.borderColor;
    if (isHover.value) return props.hoverBorderColor ?? props.borderColor;
    return props.borderColor;
  });

  const formattedBackgroundColor = computed(() => {
    if (props.disabled)
      return props.disabledBackgroundColor ?? props.backgroundColor;
    if (isHover.value)
      return props.hoverBackgroundColor ?? props.backgroundColor;
    return props.backgroundColor;
  });

  const formattedTextColor = computed(() => {
    if (props.disabled) return props.disabledTextColor ?? props.textColor;
    if (isHover.value) return props.hoverTextColor ?? props.textColor;
    return props.textColor;
  });

  const formattedAriaLabel = computed(() => props.ariaLabel ?? props.textValue);
  const formattedTextValue = computed(() =>
    props.isUppercase ? props.textValue.toUpperCase() : props.textValue,
  );

  const formattedMargin = useFormatCssSize(props.margin);
  const formattedPadding = useFormatCssSize(props.padding);
  const formattedBorderRadius = useFormatCssSize(props.borderRadius);
  const formattedBorderWidth = useFormatCssSize(props.borderWidth);

  const styleObj = computed(() => ({
    margin: formattedMargin.value,
    padding: formattedPadding.value,
    borderRadius: formattedBorderRadius.value,
    color: formattedTextColor.value,
    backgroundColor: formattedBackgroundColor.value,
    border: `${formattedBorderWidth.value} ${props.borderStyle} ${formattedBorderColor.value}`,
  }));

  return {
    isHover,
    formattedAriaLabel,
    formattedTextValue,
    styleObj,
  };
}
